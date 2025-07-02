import React, { useState, useEffect } from 'react';
import { RealtimeChat } from '@/components/realtime-chat';
import { createClient } from '@/lib/client';
import type { ChatMessage } from '@/hooks/use-realtime-chat';

export default function ChatPage() {
  const [username, setUsername] = useState(`user_${Math.random().toString(36).substring(7)}`);
  const [roomName] = useState('sales-support');
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle chat visibility
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Initiate Supabase client
  const supabase = createClient();

  // Function to store messages in Supabase (optional)
  const handleStoreMessages = async (messages: ChatMessage[]) => {
    if (messages.length === 0) return;
    
    // Get the latest message only
    const latestMessage = messages[messages.length - 1];
    
    try {
      // Only store messages from actual users (not bot responses which will come through the Edge Function)
      if (latestMessage.user.name === username) {
        // Insert the message into the database
        const { error } = await supabase.from('gemini_messages').insert({
          content: latestMessage.content,
          username: latestMessage.user.name,
          room_name: roomName,
          created_at: latestMessage.createdAt
        });
        
        if (error) console.error('Error storing message:', error);
      }
    } catch (error) {
      console.error('Error storing message:', error);
    }
  };

  return (
    <div className="relative">
      {/* Chat widget button */}
      <button 
        onClick={toggleChat}
        className={`fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-50
                  transition-transform duration-200 ${isOpen ? 'hidden' : 'hover:scale-110'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Chat window */}
      <div 
        className={`fixed bottom-20 right-5 w-full max-w-sm md:max-w-md h-[60vh] bg-white rounded-lg shadow-xl 
                  flex flex-col z-40 md:bottom-5 md:h-[70vh] transition-all duration-300 ease-in-out
                  ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        {/* Chat header with close button */}
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center rounded-t-lg">
          <h3 className="font-semibold text-lg">Live Chat</h3>
          <button 
            onClick={toggleChat}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* RealtimeChat component */}
        <div className="flex-1 overflow-hidden">
          <RealtimeChat
            roomName={roomName}
            username={username}
            onMessage={handleStoreMessages}
          />
        </div>
      </div>
    </div>
  );
} 