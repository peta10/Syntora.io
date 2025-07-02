# Syntora Live Chat with Google Gemini AI

This document provides setup instructions for the Syntora live chat widget that uses Google Gemini AI to respond to customer inquiries.

## 1. Supabase Setup

### Create a Supabase Project

1. Sign up or log in to [Supabase](https://supabase.com)
2. Create a new project and note your project URL and anon key
3. Create a `.env.local` file in your project root with:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GEMINI_API_KEY=AIzaSyD5dA0NBVBJKP_E3A2v3KBhSj1N9UG3DJQ
```

### Create Database Tables

Run the following SQL in your Supabase SQL editor:

```sql
-- Create messages table
CREATE TABLE gemini_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT NOT NULL,
  username TEXT NOT NULL,
  room_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Set up RLS (Row Level Security) policies
ALTER TABLE gemini_messages ENABLE ROW LEVEL SECURITY;

-- Create policy for all users to select/read
CREATE POLICY "Anyone can read messages" 
ON gemini_messages FOR SELECT USING (true);

-- Create policy for authenticated users to insert
CREATE POLICY "Anyone can insert messages" 
ON gemini_messages FOR INSERT WITH CHECK (true);

-- Create index for faster querying by room
CREATE INDEX idx_messages_room_name ON gemini_messages(room_name);
CREATE INDEX idx_messages_created_at ON gemini_messages(created_at);
```

## 2. Deploy Edge Function for Gemini AI Integration

### Set Up Supabase CLI

1. Install the Supabase CLI globally:
   ```
   npm install -g supabase
   ```

2. Log in to Supabase:
   ```
   supabase login
   ```

3. Link your project (replace with your actual values):
   ```
   supabase init
   supabase link --project-ref your-project-ref
   ```

### Configure Edge Function

1. Create a database function hook to trigger our Edge Function when messages are inserted:

```sql
-- Add a trigger to call the Edge Function when a new message is inserted
CREATE OR REPLACE FUNCTION handle_new_message()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM http_post(
    'https://your-project-ref.supabase.co/functions/v1/handle-new-message',
    '{"type":"INSERT","table":"gemini_messages","schema":"public","record":' || row_to_json(NEW)::text || ',"old_record":null}',
    '{"Content-Type":"application/json", "Authorization":"Bearer your-service-role-key"}'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a trigger on the messages table
CREATE TRIGGER on_message_inserted
AFTER INSERT ON gemini_messages
FOR EACH ROW EXECUTE FUNCTION handle_new_message();
```

2. Set up environment variables for the Edge Function:

```
supabase secrets set GEMINI_API_KEY=AIzaSyD5dA0NBVBJKP_E3A2v3KBhSj1N9UG3DJQ
```

3. Deploy the Edge Function:

```
supabase functions deploy handle-new-message --no-verify-jwt
```

## 3. Add Chat Widget to Your Application

The chat widget is already set up in the application and should appear on all pages through the Layout component.

### Usage

1. Start the development server:
   ```
   npm run dev
   ```

2. The chat widget will appear as a floating button in the bottom right corner of all pages.

3. Click the button to open the chat interface and test it out!

## 4. Customization

### Adjust Chat Messages

To customize the Gemini AI prompt, edit the Edge Function in `supabase/functions/handle-new-message/index.ts`:

```typescript
// Modify this prompt to change how Gemini AI responds
requestBody: GeminiRequest = {
  contents: [{
    parts: [{ text: `You are a helpful customer support agent for Syntora, a company that specializes in business process automation. Be concise and helpful. Customer message: ${message}` }]
  }]
};
```

### Styling

The chat widget uses your site's blue color scheme. To adjust colors, modify the CSS classes in:

- `src/components/chat-widget.tsx`

## 5. Troubleshooting

### Common Issues

1. **Messages not appearing:** Check the Supabase logs for the Edge Function
2. **Gemini API errors:** Verify your API key is correct and has necessary permissions
3. **Database errors:** Ensure your Supabase RLS policies are correctly configured

### Viewing Logs

```
supabase functions logs handle-new-message --project-ref your-project-ref
``` 