import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { InputBar } from './InputBar';
import { ModeCard } from './ModeCard';
import { Code2, BarChart3, Search, Lightbulb, Terminal, TrendingUp, FileText, Sparkles } from 'lucide-react';

export function HomeScreen() {
  return (
    <div className="flex h-full">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <TopBar />

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-8 py-12">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-2xl font-medium mb-1">Choose what you want to do today</h2>
            </div>

            {/* Mode Cards Grid */}
            <div className="grid grid-cols-2 gap-8 mb-8 max-w-6xl mx-auto">
              <ModeCard
                icon={Code2}
                title="Build & Automate"
                description="Create workflows, formulas, scripts, automations, and logic systems."
                accentColor="blue"
                path="/build"
                preview={
                  <div className="space-y-1 w-full">
                    <div className="flex items-center gap-1 text-[8px] font-mono">
                      <Terminal className="w-2 h-2 text-blue-400" />
                      <span className="text-blue-400">$ npm run test</span>
                    </div>
                    <div className="bg-background/50 rounded px-1.5 py-1 text-[8px] font-mono text-green-400">
                      ✓ All tests passed (12/12)
                    </div>
                    <div className="flex gap-0.5">
                      <div className="flex-1 h-1 bg-blue-500/30 rounded" />
                      <div className="flex-1 h-1 bg-blue-500/20 rounded" />
                      <div className="flex-1 h-1 bg-blue-500/10 rounded" />
                    </div>
                  </div>
                }
              />

              <ModeCard
                icon={BarChart3}
                title="Analyze & Decide"
                description="Evaluate data, compare scenarios, and generate decision-ready insights."
                accentColor="amber"
                path="/analyze"
                preview={
                  <div className="space-y-1 w-full">
                    <div className="flex items-center justify-between text-[8px]">
                      <span className="text-muted-foreground">Revenue Growth</span>
                      <span className="text-green-400 flex items-center gap-0.5">
                        <TrendingUp className="w-2 h-2" />
                        +24%
                      </span>
                    </div>
                    <div className="flex items-end gap-0.5 h-12">
                      {[40, 55, 45, 70, 85, 75, 90].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-amber-500/50 to-amber-400/30 rounded-t"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                }
              />

              <ModeCard
                icon={Search}
                title="Research & Verify"
                description="Explore information with evidence-backed validation."
                accentColor="green"
                path="/research"
                preview={
                  <div className="space-y-1 w-full">
                    <div className="flex items-center gap-1">
                      <FileText className="w-2 h-2 text-green-400" />
                      <span className="text-[8px]">3 sources verified</span>
                    </div>
                    <div className="space-y-0.5">
                      {['Nature Journal', 'MIT Research', 'Harvard Study'].map((source, i) => (
                        <div key={i} className="flex items-center gap-1 text-[8px]">
                          <div className="w-0.5 h-0.5 rounded-full bg-green-400" />
                          <span className="text-muted-foreground">{source}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                }
              />

              <ModeCard
                icon={Lightbulb}
                title="Brainstorm & Create"
                description="Generate ideas and explore creative directions."
                accentColor="purple"
                path="/brainstorm"
                preview={
                  <div className="space-y-1 w-full">
                    <div className="flex items-center gap-1">
                      <Sparkles className="w-2 h-2 text-purple-400" />
                      <span className="text-[8px]">15 ideas generated</span>
                    </div>
                    <div className="grid grid-cols-3 gap-0.5">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square rounded bg-gradient-to-br from-purple-500/30 to-purple-600/20 border border-purple-500/20"
                        />
                      ))}
                    </div>
                  </div>
                }
              />
            </div>

            {/* Prototype Note */}
            <div className="mt-16 text-center text-xs text-muted-foreground border-t border-border pt-8">
              This is a prototype. The button above represents where chatgpt would begin execution in the live product.
            </div>
          </div>
        </div>

        <InputBar />
      </div>
    </div>
  );
}
