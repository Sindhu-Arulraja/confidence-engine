import { ChevronDown, Sparkles, Share2, MoreHorizontal, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

interface TopBarProps {
  title?: string;
  showBackButton?: boolean;
  showActions?: boolean;
}

export function TopBar({ title = 'ChatGPT', showBackButton = false, showActions = true }: TopBarProps) {
  const navigate = useNavigate();

  return (
    <div className="h-14 border-b border-border bg-background flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        {showBackButton && (
          <button
            onClick={() => navigate('/')}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        )}
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-accent transition-colors">
          <span className="font-medium">{title}</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {showActions && (
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Upgrade</span>
          </button>
          <button className="p-2 rounded-lg hover:bg-accent transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg hover:bg-accent transition-colors">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
