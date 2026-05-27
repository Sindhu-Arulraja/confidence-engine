import { Mic, ArrowUp, ChevronDown } from 'lucide-react';

interface InputBarProps {
  placeholder?: string;
  expandable?: boolean;
  className?: string;
}

export function InputBar({
  placeholder = 'Message ChatGPT',
  expandable = true,
  className = ''
}: InputBarProps) {
  return (
    <div className={`w-full px-4 py-4 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <div className="relative flex items-center gap-3 bg-muted rounded-3xl px-4 py-3 border border-border">
          {expandable && (
            <button className="p-1 rounded-lg hover:bg-accent transition-colors">
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
          <input
            type="text"
            placeholder={placeholder}
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
          />
          <button className="p-2 rounded-lg hover:bg-accent transition-colors">
            <Mic className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors">
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-2 text-xs text-muted-foreground text-center">
          ChatGPT can make mistakes. Check important info.
        </div>
      </div>
    </div>
  );
}
