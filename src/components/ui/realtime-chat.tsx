import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { cn } from '@/lib/utils';
import { Send } from 'lucide-react';
import { Button } from './button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './card';
import { Input } from './input';
import { ScrollArea } from './scroll-area';
import { Skeleton } from './skeleton';

export interface ChatMessage {
  id: string;
  content: string;
  username: string;
  created_at: string;
  roomName: string;
}

interface RealtimeChatProps {
  roomName: string;
  username: string;
  messages?: ChatMessage[];
  onMessage?: (messages: ChatMessage[]) => void;
  className?: string;
}

export function RealtimeChat({
  roomName,
  username,
  messages: initialMessages = [],
  onMessage,
  className,
}: RealtimeChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [botTyping, setBotTyping] = useState(false);

  // Fetch initial messages
  useEffect(() => {
    async function fetchMessages() {
      try {
        const { data, error } = await supabase
          .from('messages')
          .select('*')
          .eq('roomName', roomName)
          .order('created_at', { ascending: true });

        if (error) {
          console.error('Error fetching messages:', error);
          return;
        }

        if (data) {
          setMessages(data as ChatMessage[]);
          if (onMessage) {
            onMessage(data as ChatMessage[]);
          }
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMessages();
  }, [roomName, onMessage]);

  // Subscribe to new messages
  useEffect(() => {
    // Subscribe to INSERT events on the messages table
    const subscription = supabase
      .channel('messages-channel')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `roomName=eq.${roomName}`,
        },
        (payload) => {
          const newMessage = payload.new as ChatMessage;
          
          // Don't add our own message twice
          const exists = messages.some(message => message.id === newMessage.id);
          if (!exists) {
            setMessages((currentMessages) => [...currentMessages, newMessage]);
            if (onMessage) {
              onMessage([...messages, newMessage]);
            }
            // If the message is from a bot, set typing to false
            if (newMessage.username === 'Support Bot') {
              setBotTyping(false);
            }
          }
        }
      )
      .subscribe();

    return () => {
      // Unsubscribe on component unmount
      supabase.removeChannel(subscription);
    };
  }, [roomName, messages, onMessage]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Handle sending messages
  const handleSendMessage = async () => {
    if (!inputValue.trim() || isSending) return;

    setIsSending(true);
    try {
      const { error } = await supabase.from('messages').insert({
        content: inputValue,
        username: username,
        roomName: roomName,
      });

      if (error) {
        console.error('Error sending message:', error);
        return;
      }
      
      // After sending a user message, show the bot is typing
      setBotTyping(true);
      
      // Clear input
      setInputValue('');
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSending(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  // Format timestamp
  const formatTime = (timestamp: string) => {
    try {
      return new Date(timestamp).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch (error) {
      return '';
    }
  };

  return (
    <Card className={cn('w-full max-w-md mx-auto shadow-xl', className)}>
      <CardHeader className="bg-blue-600 text-white rounded-t-lg">
        <CardTitle className="text-center">Live Chat</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[60vh] p-4 relative">
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-12 w-2/3 ml-auto" />
              <Skeleton className="h-12 w-3/4" />
            </div>
          ) : (
            <div className="space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-sm text-gray-500 py-8">
                  No messages yet. Start the conversation!
                </div>
              )}
              {messages.map((message) => {
                const isUser = message.username === username;
                return (
                  <div
                    key={message.id}
                    className={cn('flex flex-col', {
                      'items-end': isUser,
                      'items-start': !isUser,
                    })}
                  >
                    <div
                      className={cn(
                        'px-4 py-2 rounded-lg max-w-[80%] break-words',
                        {
                          'bg-blue-600 text-white': isUser,
                          'bg-gray-200 text-gray-900': !isUser,
                        }
                      )}
                    >
                      {message.content}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {isUser ? 'You' : message.username} -{' '}
                      {formatTime(message.created_at)}
                    </div>
                  </div>
                );
              })}
              {botTyping && (
                <div className="flex items-start">
                  <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                      <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 ml-1">
                    Support Bot is typing...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-3 border-t">
        <form
          onSubmit={handleSubmit}
          className="flex w-full space-x-2"
        >
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading || isSending}
            className="flex-1"
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || isSending || !inputValue.trim()}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
} 