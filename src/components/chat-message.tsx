import { cn } from '@/lib/utils'
import type { ChatMessage } from '@/hooks/use-realtime-chat'

interface ChatMessageItemProps {
  message: ChatMessage
  isOwnMessage: boolean
  showHeader: boolean
}

export const ChatMessageItem = ({ message, isOwnMessage, showHeader }: ChatMessageItemProps) => {
  return (
    <div className={`flex mt-2 ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
      <div
        className={cn('max-w-[75%] w-fit flex flex-col gap-1', {
          'items-end': isOwnMessage,
        })}
      >
        {showHeader && (
          <div
            className={cn('flex items-center gap-2 text-xs px-3', {
              'justify-end flex-row-reverse': isOwnMessage,
            })}
          >
            <span className={cn(
              'font-medium',
              isOwnMessage 
                ? 'bg-gradient-to-r from-[#FF6BBA] to-[#6E86FF] inline-block text-transparent bg-clip-text' 
                : 'text-gray-300'
            )}>
              {message.user.name}
            </span>
            <span className="text-gray-400 text-xs">
              {new Date(message.createdAt).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
              })}
            </span>
          </div>
        )}
        <div
          className={cn(
            'py-2 px-3 rounded-xl text-sm w-fit',
            isOwnMessage 
              ? 'bg-black border border-zinc-700' 
              : 'bg-zinc-800 text-gray-200'
          )}
        >
          <span className={cn(
            isOwnMessage 
              ? 'bg-gradient-to-r from-[#FF6BBA] to-[#6E86FF] inline-block text-transparent bg-clip-text font-medium' 
              : 'text-gray-200'
          )}>
          {message.content}
          </span>
        </div>
      </div>
    </div>
  )
}
