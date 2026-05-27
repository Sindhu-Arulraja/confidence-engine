import { Home, Clock, FolderOpen, Bookmark, History, Settings, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';
import { useState } from 'react';

interface SidebarProps {
  variant?: 'default' | 'workspace';
}

export function Sidebar({ variant = 'default' }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [pinnedOpen, setPinnedOpen] = useState(true);
  const [recentsOpen, setRecentsOpen] = useState(true);

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Clock, label: 'Recents', path: '/recents' },
    { icon: FolderOpen, label: 'Projects', path: '/projects' },
    { icon: Bookmark, label: 'Saved', path: '/saved' },
    { icon: History, label: 'History', path: '/history' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const pinnedItems = [
    'trip 2',
    'AI Output Evaluation Survey',
    'making better UI for Claud AI',
  ];

  const recentItems = [
    'Product Management Role Goals',
    'AI Workflow Ideas',
  ];

  return (
    <div className="w-56 h-full bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo/Brand */}
      <div className="px-3 py-3 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-sidebar-primary" />
          <span className="text-sm font-medium text-sidebar-foreground">ChatGPT</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span>{item.label}</span>
            </button>
          );
        })}

        {/* Pinned Section */}
        <div className="mt-4">
          <button
            onClick={() => setPinnedOpen(!pinnedOpen)}
            className="w-full flex items-center justify-between px-2.5 py-1.5 text-xs text-muted-foreground hover:text-sidebar-foreground transition-colors"
          >
            <span className="font-medium">Pinned</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${pinnedOpen ? '' : '-rotate-90'}`} />
          </button>
          {pinnedOpen && (
            <div className="mt-0.5 space-y-0.5">
              {pinnedItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full flex items-center px-2.5 py-1.5 rounded-lg text-xs text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors text-left truncate"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Recents Section */}
        <div className="mt-3">
          <button
            onClick={() => setRecentsOpen(!recentsOpen)}
            className="w-full flex items-center justify-between px-2.5 py-1.5 text-xs text-muted-foreground hover:text-sidebar-foreground transition-colors"
          >
            <span className="font-medium">Recents</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${recentsOpen ? '' : '-rotate-90'}`} />
          </button>
          {recentsOpen && (
            <div className="mt-0.5 space-y-0.5">
              {recentItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full flex items-center px-2.5 py-1.5 rounded-lg text-xs text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors text-left truncate"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-2 border-t border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-sidebar-accent/50 transition-colors cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-sidebar-foreground truncate">Sindhu Arulraja</div>
            <div className="text-[10px] text-muted-foreground">Free</div>
          </div>
          <button className="text-[10px] px-2 py-1 rounded bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/80 transition-colors flex-shrink-0">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}
