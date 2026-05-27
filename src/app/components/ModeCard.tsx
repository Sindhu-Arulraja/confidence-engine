import { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';

interface ModeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  preview: React.ReactNode;
  accentColor: 'blue' | 'amber' | 'green' | 'purple';
  path: string;
}

const accentColors = {
  blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-500/50',
  amber: 'from-amber-500/20 to-amber-600/20 border-amber-500/30 hover:border-amber-500/50',
  green: 'from-green-500/20 to-green-600/20 border-green-500/30 hover:border-green-500/50',
  purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 hover:border-purple-500/50',
};

const iconColors = {
  blue: 'text-blue-400',
  amber: 'text-amber-400',
  green: 'text-green-400',
  purple: 'text-purple-400',
};

export function ModeCard({
  icon: Icon,
  title,
  description,
  preview,
  accentColor,
  path,
}: ModeCardProps) {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate(path)}
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${accentColors[accentColor]} border-2 p-5 text-left transition-all hover:scale-[1.01] group h-[220px]`}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <div className={`p-1.5 rounded-lg bg-background/50 ${iconColors[accentColor]}`}>
              <Icon className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold">{title}</h3>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{description}</p>
        </div>

        {/* Preview */}
        <div className="mt-auto rounded-lg bg-background/40 border border-background/60 p-2 h-[90px] flex items-center justify-center overflow-hidden">
          {preview}
        </div>
      </div>
    </motion.button>
  );
}
