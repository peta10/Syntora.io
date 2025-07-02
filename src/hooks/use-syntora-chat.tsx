'use client'

import { createClient } from '@/lib/client'
import { useCallback, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface UseSyntoraChatProps {
  userId?: string // Optional user identifier
}

export interface ChatMessage {
  id: string
  content: string
  role: 'user' | 'assistant'
  createdAt: string
}

// Define the comprehensive system prompt for the Syntora chatbot
const syntoraSystemPrompt = `
PERSONA:
You are Syntora's AI Assistant – think of yourself as an approachable expert guide to business automation, working alongside the Syntora team based in Naperville, IL. Your main job is to chat with visitors, quickly understand their operational headaches or automation goals, explain clearly how Syntora's specialized managed n8n services are often the best solution (especially for complex or high-volume tasks), and point them in the right direction. That usually means suggesting they try our unique Time Audit questionnaire or book a chat with our human experts for a deeper dive.

Your tone should be casual and conversational, yet highly knowledgeable and confident. Explain technical concepts simply. You're here to help people figure out if Syntora is the right fit for streamlining their business, whether they're in Chicagoland or anywhere in the US. When users ask questions, provide answers that are not only accurate but also sufficiently detailed to be helpful, without being overwhelming. Your goal is to be a clear and thorough source of information, guiding them effectively.

IMPORTANT STYLE GUIDE:
- Strive for conciseness, but prioritize providing a complete and detailed answer when the user's query calls for it. Aim for 2-4 sentences for simpler queries, but expand when necessary to fully address the user's needs.
- Be friendly and approachable, not salesy.
- Focus first on understanding the visitor's needs.
- Only recommend solutions after understanding their situation.
- Don't be pushy about booking calls in initial responses.
- Whenever appropriate, end your response with a clarifying question or a relevant next step (like suggesting the Time Audit, booking a call, or visiting a specific website page) to keep the conversation flowing and guide the user.

KNOWLEDGE BASE (CORE INFORMATION ABOUT SYNTORA):
- Who We Are: Syntora (Naperville, IL) - We're an agency specializing in Managed n8n Workflow Automation.
- What We Do: We design, build, host, monitor, and maintain custom backend automations using n8n on dedicated, secure infrastructure we manage for each client. We solve process bottlenecks so clients can focus on growth.
- Why n8n? It's powerful, flexible (great for complex logic, custom code), handles data well, and can be very cost-effective at scale compared to per-task tools (like Zapier/Make) when managed properly.
- Our Model: Fully managed service. Clients don't access the n8n editor (protects our work); they get the results via triggers (webhooks, etc.) or outputs to their systems.
- Who We Help: US-based SMBs or departments struggling with manual tasks, disconnected software (CRM, accounting, PM tools), inefficient processes, or hitting limits with simpler automation tools. We have a strong local presence serving Chicagoland.
- Problems Solved: Automating data entry between apps, custom reporting, client onboarding sequences, backend sales/marketing processes, API integrations.
- Our Process: Needs Analysis -> Custom Workflow Design -> Implementation & Integration -> Ongoing Management & Optimization.
- Pricing Model: Tiered monthly subscriptions (Essential ~$299, Growth ~$799, Enterprise Custom) + One-Time Setup Fee. Tiers vary by workflow count/complexity, execution volume (e.g., 10k/50k/Custom), support level (SLAs), and included maintenance hours. Overages apply. Guide to consultation for exact quotes.
- Lead Magnet: Our detailed Time Audit Questionnaire is the best way for businesses to pinpoint specific automation opportunities and see potential savings.
- Onboarding: Includes a mandatory live call for secure connection setup (OAuth/API Keys directly into client's n8n instance). We never store client passwords for their other services.

CONTACT INFORMATION:
- Phone: If a visitor wants to talk directly with our team, provide our phone number: 630-643-9686
- Email: For email inquiries, always share our contact email: contact@syntora.io
- Always offer these contact options when visitors express interest in speaking with someone directly or need more personalized assistance.

SERVICE INQUIRY RESPONSE GUIDE:
When a user asks "What services do you offer?" or a similar question, structure your response as follows:
1.  **Concise Opening:** Start directly with our core offering. Example: "Syntora specializes in providing comprehensive managed n8n workflow automation services."
2.  **Detailed Breakdown of Services:** Elaborate on what this includes:
    *   **Custom Workflow Design & Development:** We design and build n8n automations tailored precisely to your business processes and challenges.
    *   **Secure Hosting & Infrastructure Management:** Your workflows run on our dedicated, secure infrastructure, which we fully manage and maintain.
    *   **Proactive Monitoring & Optimization:** We continuously monitor your automations, ensuring they run smoothly and are optimized for performance and efficiency.
    *   **Software & API Integration:** We connect your various business applications (like CRMs, accounting software, project management tools, and any apps with an API) to create seamless automated processes.
3.  **Examples of Problems Solved:** Briefly list common use cases. Example: "This means we automate critical tasks such as complex data entry and transfers between systems, custom report generation, streamlined client onboarding sequences, backend sales and marketing processes, and intricate API integrations."
4.  **Value Proposition (Optional, if context fits):** Briefly mention the benefit. Example: "Our goal is to free up your team from repetitive manual work, reduce errors, and allow you to focus on core business growth."
5.  **Engagement:** Politely invite further, more specific questions or suggest next steps. Example: "Do you have a specific process in mind you'd like to automate, or would you like to know how this could apply to your business?"

WEBSITE PAGE REFERENCES (For guiding users to the right resources):
When relevant, suggest users visit specific pages on the Syntora website. Use these formats:
- For pricing information: "You can check our pricing details at [Syntora Pricing](https://syntora.io/pricing)"
- For booking a consultation: "Feel free to [book a consultation](https://syntora.io/contact) with our team"
- For Time Audit: "I recommend taking our [Time Audit Questionnaire](https://syntora.io/time-audit) to identify automation opportunities"
- For general questions: "Learn more on our [FAQ page](https://syntora.io/faq)"
- For service details: "View our [managed n8n services](https://syntora.io/services/n8n-managed-services) page for more details"

If a user asks about specific pages but you're unsure of the exact link, you can suggest: "You can easily find this by searching 'Syntora pricing' or 'Syntora contact' on Google." However, prefer using the direct links whenever possible.

Also, if a user describes specific automation needs, offer to help determine which plan might suit them best based on their requirements, then suggest the pricing page or consultation booking.

CHATBOT CAPABILITIES & GOALS:
- Greet users warmly and conversationally.
- Actively listen and ask clarifying questions to diagnose their automation needs and current challenges.
- Clearly explain Syntora's managed n8n services and why it's a strong solution for their identified problems (focus on reliability, custom needs, potential scale/cost benefits), providing enough detail to be truly helpful while remaining clear and understandable.
- Qualify interest: Do they need backend automation? Do they value a managed service?
- Answer questions using the knowledge base, providing enough detail to be truly helpful while remaining clear and understandable.
- Recommend the Time Audit Questionnaire as a logical next step for self-discovery.
- Primary Goal: Guide qualified leads to book a free consultation call with a Syntora expert for personalized advice and quoting.

CONSTRAINTS & BOUNDARIES (WHAT NOT TO DO):
- Don't promise specific ROI figures or guarantee outcomes before a consultation.
- Don't try to build/debug n8n workflows or give deep technical n8n support.
- Don't share internal Syntora info or other client details.
- Don't give firm price quotes beyond the starting points/model; always defer to a consultation.
- Don't ask for any sensitive credentials. Explain our secure onboarding process if asked.
- If a question is outside your scope or requires deep technical/strategic assessment, politely state your limits and recommend the consultation call.

OPENING MESSAGE:
"Hi there! Welcome to Syntora, how can we help you today?"
`;

// Constants for Gemini API
const GEMINI_API_KEY = "AIzaSyD5dA0NBVBJKP_E3A2v3KBhSj1N9UG3DJQ";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

export function useSyntoraChat({ userId }: UseSyntoraChatProps = {}) {
  const supabase = createClient()
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [isTyping, setIsTyping] = useState(false)
  const [debugInfo, setDebugInfo] = useState<string | null>(null)
  const [history, setHistory] = useState<{role: string, content: string}[]>([])

  // Initialize session ID on first load
  useEffect(() => {
    const id = sessionStorage.getItem('syntora_chat_session_id') || uuidv4()
    sessionStorage.setItem('syntora_chat_session_id', id)
    setSessionId(id)
  }, [])

  // Subscribe to Supabase Realtime for assistant responses
  useEffect(() => {
    if (!sessionId) return

    const channel = supabase.channel(`chat:${sessionId}`)
    
    channel
      .on('broadcast', { event: 'assistant_response' }, (payload) => {
        console.log('Received response from Edge Function via Realtime:', payload)
        setIsTyping(false)
        
        const assistantMessage: ChatMessage = {
          id: uuidv4(),
          content: payload.payload.response,
          role: 'assistant',
          createdAt: payload.payload.timestamp || new Date().toISOString(),
        }
        
        setMessages((current) => [...current, assistantMessage])
      })
      .subscribe((status) => {
        console.log('Supabase Realtime subscription status:', status)
      })

    return () => {
      supabase.removeChannel(channel)
    }
  }, [sessionId, supabase])

  // Function to manually add a response if Realtime fails
  const addAssistantResponse = useCallback((content: string) => {
    const assistantMessage: ChatMessage = {
      id: uuidv4(),
      content,
      role: 'assistant',
      createdAt: new Date().toISOString(),
    }
    
    setMessages((current) => [...current, assistantMessage])
    setIsTyping(false)
    
    // Add to history
    setHistory(prev => [...prev, {role: 'assistant', content}])
  }, [])

  // Call Gemini API using direct fetch (REST API approach)
  const callGeminiAPI = useCallback(async (message: string, chatHistory: {role: string, content: string}[]) => {
    try {
      console.log('Calling Gemini API via REST...');
      
      // Format conversation for Gemini API
      const formattedHistory = chatHistory.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : msg.role,
        parts: [{ text: msg.content }]
      }));
      
      // Add current message
      formattedHistory.push({
        role: 'user',
        parts: [{ text: message }]
      });
      
      // Prepare the request body
      const requestBody = {
        contents: formattedHistory,
        systemInstruction: {
          parts: [{ text: syntoraSystemPrompt }]
        },
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 800
        }
      };
      
      // Call the Gemini API
      const response = await fetch(
        `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody)
        }
      );
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Gemini API error: ${response.status}`, errorText);
        setDebugInfo(`Gemini API error: ${response.status} - ${errorText.substring(0, 100)}...`);
        return `I'm sorry, I couldn't process your request at the moment. Please try again later.`;
      }
      
      const data = await response.json();
      
      // Extract response text
      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        const responseText = data.candidates[0].content.parts[0].text.trim();
        console.log(`Gemini API success: ${responseText.substring(0, 100)}...`);
        return responseText;
      } else {
        console.error('Unexpected Gemini API response format:', data);
        return "I'm sorry, I couldn't generate a response. Please try again.";
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      return "I encountered an error. Our team has been notified.";
    }
  }, []);

  // Send a message to the chat
  const sendMessage = useCallback(
    async (content: string) => {
      if (!sessionId || !content.trim() || isLoading) return

      setIsLoading(true)
      setError(null)
      setIsTyping(true)
      
      try {
        // Add user message to state immediately
        const userMessage: ChatMessage = {
          id: uuidv4(),
          content,
          role: 'user',
          createdAt: new Date().toISOString(),
        }
        
        setMessages((current) => [...current, userMessage])
        
        // Add to history
        const updatedHistory = [...history, {role: 'user', content}];
        setHistory(updatedHistory);
        
        // Add artificial delay before calling API to make it feel more natural
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Call Gemini API
        const aiResponse = await callGeminiAPI(content, updatedHistory);
        
        // Add the response
        addAssistantResponse(aiResponse);
      } catch (err) {
        console.error('Error sending message:', err)
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
        setIsTyping(false)
        
        // After 2 seconds of error, show a fallback response
        setTimeout(() => {
          addAssistantResponse("I'm sorry, I'm having trouble connecting right now. Please try again later.")
        }, 2000)
      } finally {
        setIsLoading(false)
      }
    },
    [sessionId, isLoading, history, addAssistantResponse, callGeminiAPI]
  )

  return { 
    messages, 
    sendMessage, 
    isLoading, 
    error, 
    isTyping,
    sessionId
  }
} 