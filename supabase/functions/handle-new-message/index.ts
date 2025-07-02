/**
 * Supabase Edge Function to handle new messages from the chat interface
 * and respond with Gemini AI-generated content.
 * 
 * To deploy:
 * 1. Install Supabase CLI: npm i -g supabase
 * 2. Login: supabase login
 * 3. Initialize: supabase init
 * 4. Set up your Gemini API key: supabase secrets set GEMINI_API_KEY=your_api_key
 * 5. Deploy this function: supabase functions deploy handle-new-message --no-verify-jwt
 */

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { SMTPClient } from "https://deno.land/x/denomailer@1.0.1/mod.ts";

// Define message type to match frontend interface
interface ChatMessage {
  id: string;
  content: string;
  username: string;
  room_name: string; // For database
  created_at: string;
}

// Request payload when a new message is inserted
interface DatabaseChangesPayload {
  type: 'INSERT';
  table: string;
  schema: string;
  record: ChatMessage;
  old_record: null;
}

// Gemini API request format
interface GeminiRequest {
  contents: [{
    parts: [{ text: string }]
  }];
}

// Gemini API response format
interface GeminiResponse {
  candidates: [{
    content: {
      parts: [{ text: string }];
      role: string;
    };
  }];
}

// Email configuration - these will be read from Supabase secrets
const TO_EMAIL = "parker@syntora.io"; // Your destination email
const FROM_EMAIL = Deno.env.get("GMAIL_USER")!;
const GMAIL_APP_PASSWORD = Deno.env.get("GMAIL_APP_PASSWORD")!;

// Initialize SMTP Client
const client = new SMTPClient({
  connection: {
    hostname: "smtp.gmail.com",
    port: 465, // Use 465 for SSL
    tls: true,
    auth: {
      user: FROM_EMAIL,
      pass: GMAIL_APP_PASSWORD,
    },
  },
});

// Call Gemini API to generate a response
async function callGeminiAPI(message: string, apiKey: string): Promise<string> {
  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const requestBody: GeminiRequest = {
      contents: [{
        parts: [{ text: `You are a helpful customer support agent for Syntora, a company that specializes in business process automation. Be concise and helpful. Customer message: ${message}` }]
      }]
    };
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });
    
    if (!response.ok) {
      console.error(`Gemini API error: ${response.status} ${response.statusText}`);
      return "I'm sorry, I couldn't process your request at the moment. Please try again later.";
    }
    
    const data: GeminiResponse = await response.json();
    
    // Return the Gemini response text
    if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
      return data.candidates[0].content.parts[0].text.trim();
    } else {
      return "I'm sorry, I couldn't generate a response. Please try again.";
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return "I encountered an error. Our team has been notified.";
  }
}

// Main function to handle database webhook events
Deno.serve(async (req) => {
  try {
    // Get Supabase credentials from environment
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
    
    if (!supabaseUrl || !supabaseServiceKey) {
      return new Response(
        JSON.stringify({ error: 'Missing Supabase credentials' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    if (!geminiApiKey) {
      return new Response(
        JSON.stringify({ error: 'Missing Gemini API key' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Parse webhook payload
    const payload: DatabaseChangesPayload = await req.json();
    
    // Only process new message inserts
    if (payload.type === 'INSERT' && payload.table === 'gemini_messages') {
      const newMessage = payload.record;
      
      // Don't respond to bot messages (prevent loops)
      if (newMessage.username === 'Support Bot') {
        return new Response(
          JSON.stringify({ message: 'Ignoring bot message' }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }
      
      console.log(`Processing message from ${newMessage.username}: "${newMessage.content}"`);
      
      // Get AI response
      const aiResponse = await callGeminiAPI(newMessage.content, geminiApiKey);
      
      // Insert AI response back to the database
      const { error } = await supabase
        .from('gemini_messages')
        .insert({
          content: aiResponse,
          username: 'Support Bot',
          room_name: newMessage.room_name,
          created_at: new Date().toISOString(),
        });
      
      if (error) {
        console.error('Error inserting AI response:', error);
        return new Response(
          JSON.stringify({ error: 'Failed to save AI response' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }
      
      // Return success
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // For other events, just acknowledge
    return new Response(
      JSON.stringify({ message: 'Event processed' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Error in Edge Function:', error);
    
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}); 