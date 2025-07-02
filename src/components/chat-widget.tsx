'use client'

import { useState } from 'react'
import { SyntoraChat } from '@/components/syntora-chat'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * A floating chat widget that can be added to any page
 * This provides a consistent chat interface across the application
 */
export default function ChatWidget() {
  // Control chat visibility
  const [isOpen, setIsOpen] = useState(false)

  // Function to toggle chat visibility
  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Chat widget button */}
      <button 
        onClick={toggleChat}
        className={cn(
          'fixed bottom-5 right-5 bg-black text-white p-4 rounded-full shadow-lg hover:bg-zinc-800 z-50',
          'focus:outline-none focus:ring-2 focus:ring-[#FF6BBA] focus:ring-offset-2',
          'transition-transform duration-200',
          isOpen ? 'hidden' : 'hover:scale-110'
        )}
        aria-label="Open chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-lg shadow-xl bg-zinc-950">
          <div className="absolute right-2 top-2 z-10">
            <Button
              onClick={toggleChat}
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-zinc-400 hover:bg-zinc-800 hover:text-white"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <SyntoraChat className="h-full w-full" />
        </div>
      )}
    </>
  )
} 