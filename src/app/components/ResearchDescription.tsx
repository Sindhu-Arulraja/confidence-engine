import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { InputBar } from './InputBar';
import { Search, FileText, CheckCircle2, AlertTriangle, Link2, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';

export function ResearchDescription() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <TopBar title="Research & Verify" showBackButton showActions={false} />

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-green-500/20 text-green-400">
                  <Search className="w-6 h-6" />
                </div>
                <h1 className="text-2xl font-semibold">Research & Verify</h1>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Explore information with evidence-backed validation, source credibility checks, and
                contradiction detection.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm font-semibold mb-4 text-foreground/70">What you can do:</h3>
                <div className="space-y-3">
                  {[
                    { icon: CheckCircle2, text: 'Verify claims' },
                    { icon: Search, text: 'Compare sources' },
                    { icon: FileText, text: 'Summarize findings' },
                    { icon: Link2, text: 'Inspect evidence' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-foreground/80">
                      <item.icon className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4 text-foreground/70">What you'll get:</h3>
                <div className="space-y-3">
                  {[
                    { icon: CheckCircle2, text: 'Source credibility signals' },
                    { icon: AlertTriangle, text: 'Contradiction detection' },
                    { icon: Link2, text: 'Citation mapping' },
                    { icon: BookOpen, text: 'Structured summaries' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-foreground/80">
                      <item.icon className="w-4 h-4 text-green-400 flex-shrink-0" />
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
                {/* Left Panel - Sources */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-3 top-3 w-32 h-48 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-2 border-b border-border bg-muted/50">
                    <div className="text-[9px] font-medium text-muted-foreground">SOURCES (3)</div>
                  </div>
                  <div className="p-1.5 space-y-1.5">
                    {[
                      { name: 'Nature Journal', credibility: 95 },
                      { name: 'MIT Research', credibility: 92 },
                      { name: 'Harvard Study', credibility: 88 },
                    ].map((source, i) => (
                      <div key={i} className="p-1.5 rounded bg-green-500/10 border border-green-500/20">
                        <div className="flex items-start gap-1 mb-0.5">
                          <CheckCircle2 className="w-2 h-2 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-[8px] font-medium text-green-400 truncate">{source.name}</span>
                        </div>
                        <div className="text-[7px] text-muted-foreground mb-0.5">
                          Credibility: {source.credibility}%
                        </div>
                        <div className="w-full h-0.5 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-400 rounded-full"
                            style={{ width: `${source.credibility}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Center Panel - Summary */}
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute left-1/2 top-6 -translate-x-1/2 w-56 h-44 bg-card border border-border rounded-lg shadow-xl overflow-hidden"
                >
                  <div className="p-1.5 border-b border-border bg-muted/50">
                    <div className="text-[9px] font-medium">Research Summary</div>
                  </div>
                  <div className="p-2 space-y-1.5">
                    <div className="p-1.5 rounded bg-green-500/10 border border-green-500/20">
                      <div className="text-[8px] font-medium text-green-400 mb-0.5">✓ Verified</div>
                      <div className="text-[8px] text-foreground/70 leading-relaxed">
                        Recent studies show 40% improvement in AI efficiency
                      </div>
                    </div>
                    <div className="p-1.5 rounded bg-background border border-green-500/20">
                      <div className="flex items-start gap-1 mb-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5 text-green-400 flex-shrink-0 mt-0.5" />
                        <div className="text-[8px]">Energy consumption reduced by 25%</div>
                      </div>
                      <div className="text-[7px] text-muted-foreground">3 sources</div>
                    </div>
                    <div className="p-1.5 rounded bg-amber-500/10 border border-amber-500/20">
                      <div className="flex items-start gap-1">
                        <AlertTriangle className="w-2.5 h-2.5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <div className="text-[8px] text-amber-400">Potential contradiction detected</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Panel - Citations */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute right-3 top-3 w-36 h-44 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-2 border-b border-border bg-muted/50">
                    <div className="text-[9px] font-medium text-muted-foreground">CITATIONS</div>
                  </div>
                  <div className="p-2 space-y-1.5">
                    {['Nature Journal', 'MIT Research'].map((name, i) => (
                      <div key={i} className="p-1.5 rounded bg-background border border-border">
                        <div className="flex items-start gap-1 mb-1">
                          <Link2 className="w-2.5 h-2.5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-[8px] font-medium truncate">{name}</span>
                        </div>
                        <div className="space-y-0.5">
                          <div className="flex justify-between text-[7px]">
                            <span className="text-muted-foreground">Peer Reviewed</span>
                            <CheckCircle2 className="w-2 h-2 text-green-400" />
                          </div>
                          <div className="flex justify-between text-[7px]">
                            <span className="text-muted-foreground">Citations</span>
                            <span>247</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() => navigate('/research/workspace')}
                className="px-6 py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors font-medium"
              >
                Open Research Workspace
              </button>
            </div>
          </div>
        </div>

        <InputBar placeholder="Enter a research question..." />
      </div>
    </div>
  );
}
