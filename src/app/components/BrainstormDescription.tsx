import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { InputBar } from './InputBar';
import { Lightbulb, Sparkles, GitBranch, Palette, Shuffle, Wand2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';

export function BrainstormDescription() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <TopBar title="Brainstorm & Create" showBackButton showActions={false} />

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h1 className="text-2xl font-semibold">Brainstorm & Create</h1>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Generate ideas and explore creative directions with an infinite canvas for concept
                exploration and variation generation.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm font-semibold mb-4 text-foreground/70">What you can do:</h3>
                <div className="space-y-3">
                  {[
                    { icon: Lightbulb, text: 'Brainstorm concepts' },
                    { icon: Shuffle, text: 'Remix ideas' },
                    { icon: GitBranch, text: 'Expand directions' },
                    { icon: Wand2, text: 'Generate variations' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-foreground/80">
                      <item.icon className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4 text-foreground/70">What you'll get:</h3>
                <div className="space-y-3">
                  {[
                    { icon: Palette, text: 'Idea canvas' },
                    { icon: GitBranch, text: 'Branching flows' },
                    { icon: Sparkles, text: 'Concept variations' },
                    { icon: Wand2, text: 'Exploration tools' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-foreground/80">
                      <item.icon className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Panels Preview */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold mb-4 text-foreground/70">Workspace Preview:</h3>
              <div className="relative h-64 bg-muted/30 rounded-xl border border-border overflow-hidden">
                {/* Left Panel - Branches */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-3 top-3 w-32 h-48 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-2 border-b border-border bg-muted/50">
                    <div className="text-[9px] font-medium text-muted-foreground">IDEA BRANCHES</div>
                  </div>
                  <div className="p-1.5 space-y-0.5">
                    {['AI Productivity App', 'Social Platform', 'E-commerce Features'].map((name, i) => (
                      <div key={i} className="px-1.5 py-1 rounded text-[8px] bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center gap-1">
                        <GitBranch className="w-2 h-2 flex-shrink-0" />
                        <span className="truncate">{name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-1.5 pt-3">
                    <div className="text-[8px] font-medium text-muted-foreground mb-1">INSPIRATION</div>
                    <div className="grid grid-cols-2 gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square rounded bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/20"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Center Panel - Canvas */}
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute left-1/2 top-6 -translate-x-1/2 w-56 h-44 bg-card border border-border rounded-lg shadow-xl overflow-hidden"
                >
                  <div className="p-1.5 border-b border-border bg-muted/50">
                    <div className="text-[9px] font-medium">Idea Canvas</div>
                  </div>
                  <div className="relative w-full h-full p-3">
                    {/* Connected nodes */}
                    <svg className="absolute inset-0 w-full h-full">
                      <line x1="50%" y1="25%" x2="30%" y2="60%" stroke="oklch(0.269 0 0)" strokeWidth="1" strokeDasharray="2 2" />
                      <line x1="50%" y1="25%" x2="70%" y2="60%" stroke="oklch(0.269 0 0)" strokeWidth="1" strokeDasharray="2 2" />
                    </svg>
                    {/* Main node */}
                    <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 px-2 py-1 rounded-lg bg-purple-500/30 border-2 border-purple-500 text-[8px] font-medium text-purple-300">
                      AI Productivity App
                    </div>
                    {/* Branch nodes */}
                    <div className="absolute left-[30%] top-[60%] -translate-x-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-purple-500/20 border border-purple-500/50 text-[7px] text-purple-200">
                      Voice Interface
                    </div>
                    <div className="absolute left-[70%] top-[60%] -translate-x-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-purple-500/20 border border-purple-500/50 text-[7px] text-purple-200">
                      Smart Templates
                    </div>
                  </div>
                </motion.div>

                {/* Right Panel - Controls */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute right-3 top-3 w-36 h-44 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-2 border-b border-border bg-muted/50">
                    <div className="text-[9px] font-medium text-muted-foreground">CREATIVE CONTROLS</div>
                  </div>
                  <div className="p-2 space-y-2">
                    <div className="p-1.5 rounded bg-background border border-border">
                      <div className="text-[8px] font-medium mb-1 flex items-center gap-0.5">
                        <Palette className="w-2.5 h-2.5 text-purple-400" />
                        Tone
                      </div>
                      <div className="flex gap-0.5">
                        {['Pro', 'Play', 'Bold'].map((tone) => (
                          <div
                            key={tone}
                            className="flex-1 px-1 py-0.5 rounded text-[7px] text-center bg-purple-500/20 text-purple-400 border border-purple-500/30"
                          >
                            {tone}
                          </div>
                        ))}
                      </div>
                    </div>
                    {['Originality', 'Detail Level'].map((label) => (
                      <div key={label} className="p-1.5 rounded bg-background border border-border">
                        <div className="text-[8px] font-medium mb-1">{label}</div>
                        <input type="range" className="w-full h-0.5" />
                      </div>
                    ))}
                    <button className="w-full px-1.5 py-1 rounded bg-purple-500/20 text-purple-400 text-[8px] font-medium border border-purple-500/30 flex items-center justify-center gap-0.5">
                      <Sparkles className="w-2.5 h-2.5" />
                      Generate variations
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() => navigate('/brainstorm/workspace')}
                className="px-6 py-3 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors font-medium"
              >
                Open Creative Canvas
              </button>
            </div>
          </div>
        </div>

        <InputBar placeholder="Describe an idea to explore..." />
      </div>
    </div>
  );
}
