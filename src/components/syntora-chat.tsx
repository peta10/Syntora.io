'use client'

import { useState, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useSyntoraChat } from '@/hooks/use-syntora-chat'

interface SyntoraChatProps {
  className?: string
}

export function SyntoraChat({ className }: SyntoraChatProps) {
  const [message, setMessage] = useState('')
  const { messages, sendMessage, isLoading, isTyping } = useSyntoraChat()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [typingText, setTypingText] = useState('')
  const [isShowingResponse, setIsShowingResponse] = useState(false)

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isTyping, typingText])

  // Typing effect for the newest message
  useEffect(() => {
    if (!isTyping || messages.length === 0) return;
    
    // Get the latest message
    const latestMessage = messages[messages.length - 1];
    
    // If the latest message is from the assistant and we haven't started showing it yet
    if (latestMessage.role === 'assistant' && !isShowingResponse) {
      setIsShowingResponse(true);
      setTypingText('');
      
      // Simulate typing effect
      let i = 0;
      const text = latestMessage.content;
      const typeSpeed = 15; // milliseconds per character
      
      const typeWriter = () => {
        if (i < text.length) {
          setTypingText(text.substring(0, i + 1));
          i++;
          setTimeout(typeWriter, typeSpeed + Math.random() * 10);
        } else {
          // Done typing
          setIsShowingResponse(false);
        }
      };
      
      // Start typing
      typeWriter();
    }
  }, [messages, isTyping, isShowingResponse]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && !isLoading && !isShowingResponse) {
      sendMessage(message)
      setMessage('')
    }
  }

  return (
    <div className={cn('flex h-full w-full flex-col overflow-hidden rounded-md bg-zinc-950 text-zinc-50', className)}>
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/50 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-gradient-to-r from-[#FF6BBA] to-[#6E86FF]"></span>
          <h3 className="font-semibold">Syntora Support</h3>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 max-h-[calc(100%-110px)]">
        <div className="space-y-4">
          {messages.length === 0 ? (
            <div className="flex h-full items-center justify-center">
              <p className="text-center text-sm text-zinc-500">
                👋 Hi there! Welcome to Syntora, how can we help you today?
              </p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <div
                key={msg.id}
                className={cn(
                  'flex w-max max-w-[80%] flex-col rounded-lg px-4 py-2',
                  msg.role === 'user'
                    ? 'ml-auto bg-gradient-to-r from-[#FF6BBA] to-[#6E86FF] text-white'
                    : 'bg-zinc-800 text-zinc-100'
                )}
              >
                <p className="text-sm">
                  {/* Apply typing effect to the latest assistant message */}
                  {msg.role === 'assistant' && index === messages.length - 1 && isShowingResponse
                    ? typingText
                    : msg.content}
                </p>
                <span className="mt-1 text-xs opacity-70">
                  {new Date(msg.createdAt).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            ))
          )}
          
          {isTyping && !isShowingResponse && (
            <div className="flex w-max max-w-[80%] flex-col rounded-lg bg-zinc-800 px-4 py-2 text-zinc-100">
              <div className="flex space-x-1">
                <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-400"></div>
                <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-400" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-400" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex w-full gap-2 border-t border-zinc-800 p-4">
        <Input
          className={cn(
            'rounded-full bg-zinc-800 text-sm text-white transition-all duration-300 border-zinc-700 focus-within:border-transparent focus-within:ring-1 focus-within:ring-[#FF6BBA]',
            !isLoading && message.trim() ? 'w-[calc(100%-36px)]' : 'w-full'
          )}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          disabled={isLoading || isShowingResponse}
        />
        {!isLoading && !isShowingResponse && message.trim() && (
          <Button
            className="aspect-square rounded-full animate-in fade-in slide-in-from-right-4 duration-300 bg-gradient-to-r from-[#FF6BBA] to-[#6E86FF] hover:opacity-90 text-white"
            type="submit"
          >
            <Send className="size-4" />
          </Button>
        )}
      </form>
    </div>
  )
} 