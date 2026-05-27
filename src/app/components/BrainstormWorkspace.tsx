import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { InputBar } from './InputBar';
import { Lightbulb, GitBranch, Sparkles, Palette, Volume2, Shuffle } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export function BrainstormWorkspace() {
  const [selectedNode, setSelectedNode] = useState<number | null>(0);

  const ideaNodes = [
    { id: 0, x: 50, y: 40, title: 'AI Productivity App', type: 'main', children: [1, 2, 3] },
    { id: 1, x: 20, y: 60, title: 'Voice Interface', type: 'branch', children: [4, 5] },
    { id: 2, x: 50, y: 75, title: 'Smart Templates', type: 'branch', children: [6] },
    { id: 3, x: 80, y: 60, title: 'Team Collaboration', type: 'branch', children: [7, 8] },
    { id: 4, x: 10, y: 80, title: 'Multi-language', type: 'leaf', children: [] },
    { id: 5, x: 30, y: 85, title: 'Emotion Detection', type: 'leaf', children: [] },
    { id: 6, x: 50, y: 90, title: 'Auto-formatting', type: 'leaf', children: [] },
    { id: 7, x: 70, y: 85, title: 'Real-time Sync', type: 'leaf', children: [] },
    { id: 8, x: 90, y: 80, title: 'Version Control', type: 'leaf', children: [] },
  ];

  const nodeColors = {
    main: 'bg-purple-500/30 border-purple-500 text-purple-300',
    branch: 'bg-purple-500/20 border-purple-500/50 text-purple-200',
    leaf: 'bg-purple-500/10 border-purple-500/30 text-purple-100',
  };

  return (
    <div className="flex h-full">
      <Sidebar variant="workspace" />

      <div className="flex-1 flex flex-col">
        <TopBar title="Brainstorm & Create" showBackButton showActions={false} />

        <div className="flex-1 flex overflow-hidden">
          {/* Left Panel - Idea History */}
          <div className="w-56 border-r border-border bg-muted/30 overflow-y-auto">
            <div className="p-4">
              <div className="text-xs font-medium text-muted-foreground mb-3">IDEA BRANCHES</div>
              <div className="space-y-2">
                {['AI Productivity App', 'Social Platform Ideas', 'E-commerce Features', 'Education Tools'].map((item, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      index === 0
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : 'text-foreground hover:bg-accent'
                    }`}
                  >
                    <GitBranch className="w-4 h-4" />
                    <span className="flex-1 text-left truncate">{item}</span>
                  </button>
                ))}
              </div>

              <div className="text-xs font-medium text-muted-foreground mt-6 mb-3">SAVED CONCEPTS</div>
              <div className="space-y-1">
                {['Concept Board A', 'Variations Set B', 'Final Ideas'].map((item, index) => (
                  <div key={index} className="px-3 py-2 rounded-lg text-xs text-muted-foreground hover:bg-accent transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="w-3 h-3" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-xs font-medium text-muted-foreground mt-6 mb-3">INSPIRATION</div>
              <div className="grid grid-cols-2 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/20 cursor-pointer hover:border-purple-500/40 transition-colors"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Center Panel - Idea Canvas */}
          <div className="flex-1 overflow-hidden relative bg-background">
            {/* Canvas */}
            <div className="absolute inset-0 overflow-auto">
              <div className="relative w-full h-full min-h-[800px]">
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {ideaNodes.map((node) =>
                    node.children.map((childId) => {
                      const child = ideaNodes.find((n) => n.id === childId);
                      if (!child) return null;
                      return (
                        <line
                          key={`${node.id}-${childId}`}
                          x1={`${node.x}%`}
                          y1={`${node.y}%`}
                          x2={`${child.x}%`}
                          y2={`${child.y}%`}
                          stroke="oklch(0.269 0 0)"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                        />
                      );
                    })
                  )}
                </svg>

                {/* Idea Nodes */}
                {ideaNodes.map((node) => (
                  <motion.button
                    key={node.id}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                      nodeColors[node.type as keyof typeof nodeColors]
                    } ${selectedNode === node.id ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-background' : ''}`}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    onClick={() => setSelectedNode(node.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {node.title}
                  </motion.button>
                ))}

                {/* Add Idea Button */}
                <button className="absolute bottom-8 right-8 flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 hover:bg-purple-500/30 transition-colors">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Add Idea</span>
                </button>
              </div>
            </div>

            {/* Canvas Controls */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <button className="p-2 rounded-lg bg-background border border-border hover:bg-accent transition-colors">
                <Shuffle className="w-4 h-4" />
              </button>
              <div className="px-3 py-1.5 rounded-lg bg-background border border-border text-xs text-muted-foreground">
                15 ideas • 3 branches
              </div>
            </div>
          </div>

          {/* Right Panel - Controls */}
          <div className="w-72 border-l border-border bg-muted/30 overflow-y-auto">
            <div className="p-4">
              <div className="text-xs font-medium text-muted-foreground mb-3">CREATIVE CONTROLS</div>

              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-background border border-border">
                  <label className="text-xs font-medium mb-2 flex items-center gap-2">
                    <Palette className="w-3 h-3" />
                    Tone
                  </label>
                  <div className="flex gap-2 mt-2">
                    {['Professional', 'Playful', 'Bold'].map((tone) => (
                      <button
                        key={tone}
                        className={`flex-1 px-2 py-1 rounded text-xs transition-colors ${
                          tone === 'Playful'
                            ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                            : 'bg-muted text-muted-foreground hover:bg-accent'
                        }`}
                      >
                        {tone}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-background border border-border">
                  <label className="text-xs font-medium mb-2 block">Originality</label>
                  <input type="range" min="0" max="100" defaultValue="70" className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Safe</span>
                    <span className="text-purple-400">Creative</span>
                    <span>Wild</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-background border border-border">
                  <label className="text-xs font-medium mb-2 block">Detail Level</label>
                  <input type="range" min="0" max="100" defaultValue="50" className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Minimal</span>
                    <span className="text-purple-400">Balanced</span>
                    <span>Rich</span>
                  </div>
                </div>
              </div>

              <div className="text-xs font-medium text-muted-foreground mt-6 mb-3">EXPANSION PROMPTS</div>
              <div className="space-y-2">
                <button className="w-full px-3 py-2 rounded-lg bg-purple-500/20 text-purple-400 text-xs font-medium border border-purple-500/30 hover:bg-purple-500/30 transition-colors flex items-center justify-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  Generate variations
                </button>
                <button className="w-full px-3 py-2 rounded-lg bg-background text-foreground text-xs font-medium border border-border hover:bg-accent transition-colors">
                  Explore alternatives
                </button>
                <button className="w-full px-3 py-2 rounded-lg bg-background text-foreground text-xs font-medium border border-border hover:bg-accent transition-colors">
                  Remix concepts
                </button>
                <button className="w-full px-3 py-2 rounded-lg bg-background text-foreground text-xs font-medium border border-border hover:bg-accent transition-colors">
                  Deepen this branch
                </button>
              </div>

              <div className="text-xs font-medium text-muted-foreground mt-6 mb-3">AI SUGGESTIONS</div>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30">
                  <div className="text-xs text-purple-400 font-medium mb-1">💡 Consider adding</div>
                  <div className="text-xs text-foreground/70">Mobile-first design approach</div>
                </div>
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30">
                  <div className="text-xs text-purple-400 font-medium mb-1">🎨 Inspiration</div>
                  <div className="text-xs text-foreground/70">Combine "Voice" with "Templates"</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <InputBar placeholder="Describe an idea or ask for variations..." expandable={false} />
      </div>
    </div>
  );
}
