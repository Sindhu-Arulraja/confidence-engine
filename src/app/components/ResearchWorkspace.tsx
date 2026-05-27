import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { InputBar } from './InputBar';
import { FileText, Link2, CheckCircle2, AlertTriangle, BookOpen, ExternalLink } from 'lucide-react';

export function ResearchWorkspace() {
  const sources = [
    { name: 'Nature Journal', credibility: 95, verified: true },
    { name: 'MIT Research Lab', credibility: 92, verified: true },
    { name: 'Harvard Study 2024', credibility: 88, verified: true },
    { name: 'Tech Blog Post', credibility: 45, verified: false },
  ];

  const claims = [
    { text: 'AI models show 40% improvement in efficiency', verified: true, sources: 3 },
    { text: 'Energy consumption reduced by 25%', verified: true, sources: 2 },
    { text: 'Implementation costs vary widely', verified: false, sources: 1 },
  ];

  return (
    <div className="flex h-full">
      <Sidebar variant="workspace" />

      <div className="flex-1 flex flex-col">
        <TopBar title="Research & Verify" showBackButton showActions={false} />

        <div className="flex-1 flex overflow-hidden">
          {/* Left Panel - Sources */}
          <div className="w-56 border-r border-border bg-muted/30 overflow-y-auto">
            <div className="p-4">
              <div className="text-xs font-medium text-muted-foreground mb-3">SOURCES ({sources.length})</div>
              <div className="space-y-2">
                {sources.map((source, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border transition-colors cursor-pointer ${
                      index === 0
                        ? 'bg-green-500/10 border-green-500/30'
                        : 'bg-background border-border hover:border-green-500/20'
                    }`}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      {source.verified ? (
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-xs font-medium">{source.name}</span>
                    </div>
                    <div className="text-[10px] text-muted-foreground mb-1">
                      Credibility: {source.credibility}%
                    </div>
                    <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          source.credibility >= 80 ? 'bg-green-400' :
                          source.credibility >= 60 ? 'bg-amber-400' : 'bg-red-400'
                        }`}
                        style={{ width: `${source.credibility}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-xs font-medium text-muted-foreground mt-6 mb-3">SAVED RESEARCH</div>
              <div className="space-y-1">
                {['AI Efficiency Study', 'Climate Impact Report', 'Market Analysis'].map((item, index) => (
                  <div key={index} className="px-3 py-2 rounded-lg text-xs text-muted-foreground hover:bg-accent transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-3 h-3" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Panel - Research Summary */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-3xl">
              {/* Research Title */}
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">AI Model Efficiency Research</h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    3 sources verified
                  </span>
                  <span>Last updated: 2 hours ago</span>
                </div>
              </div>

              {/* Summary */}
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 mb-6">
                <div className="text-sm font-medium text-green-400 mb-2">✓ Summary</div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Recent studies from multiple academic institutions demonstrate significant improvements in AI model efficiency.
                  Research shows a 40% improvement in computational efficiency while maintaining accuracy. Energy consumption
                  has been reduced by approximately 25% through optimization techniques.
                </p>
              </div>

              {/* Key Claims */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Key Claims</h3>
                <div className="space-y-3">
                  {claims.map((claim, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
                        claim.verified
                          ? 'bg-background border-green-500/30'
                          : 'bg-background border-amber-500/30'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {claim.verified ? (
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm mb-2">{claim.text}</p>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span>{claim.sources} sources</span>
                            <span>•</span>
                            <button className="text-green-400 hover:underline flex items-center gap-1">
                              View citations
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evidence Excerpt */}
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="text-xs font-medium text-muted-foreground mb-3">EVIDENCE EXCERPT</div>
                <div className="space-y-4">
                  <div className="border-l-2 border-green-500 pl-4">
                    <p className="text-sm text-foreground/80 mb-2">
                      "Our experiments demonstrate a 42% reduction in computational overhead while maintaining
                      98% accuracy across all test scenarios."
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3 h-3 text-green-400" />
                      <span>Nature Journal • March 2024</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-green-500 pl-4">
                    <p className="text-sm text-foreground/80 mb-2">
                      "Energy consumption metrics show consistent 20-28% improvement across different model architectures."
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3 h-3 text-green-400" />
                      <span>MIT Research Lab • April 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contradictions Alert */}
              <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <div className="text-sm font-medium text-amber-400 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Potential Contradiction Detected
                </div>
                <p className="text-sm text-foreground/80">
                  One source reports implementation costs of $50K-100K, while another suggests $200K+.
                  Further verification recommended.
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel - Citation Inspector */}
          <div className="w-72 border-l border-border bg-muted/30 overflow-y-auto">
            <div className="p-4">
              <div className="text-xs font-medium text-muted-foreground mb-3">CITATION INSPECTOR</div>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-background border border-border">
                  <div className="flex items-start gap-2 mb-2">
                    <Link2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-xs font-medium mb-1">Nature Journal</div>
                      <div className="text-[10px] text-muted-foreground">doi:10.1038/nature.2024.12345</div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-muted-foreground">Peer Reviewed</span>
                      <CheckCircle2 className="w-3 h-3 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-muted-foreground">Citations</span>
                      <span className="text-foreground">247</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-muted-foreground">Published</span>
                      <span className="text-foreground">Mar 2024</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-background border border-border">
                  <div className="flex items-start gap-2 mb-2">
                    <Link2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-xs font-medium mb-1">MIT Research</div>
                      <div className="text-[10px] text-muted-foreground">research.mit.edu/ai-efficiency</div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-muted-foreground">Institution</span>
                      <span className="text-foreground">MIT CSAIL</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-muted-foreground">Sample Size</span>
                      <span className="text-foreground">1,200+</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-muted-foreground">Methodology</span>
                      <CheckCircle2 className="w-3 h-3 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-xs font-medium text-muted-foreground mt-6 mb-3">VERIFICATION CONTROLS</div>
              <div className="space-y-2">
                <button className="w-full px-3 py-2 rounded-lg bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/30 hover:bg-green-500/30 transition-colors">
                  ✓ Cross-reference claims
                </button>
                <button className="w-full px-3 py-2 rounded-lg bg-background text-foreground text-xs font-medium border border-border hover:bg-accent transition-colors">
                  Check for updates
                </button>
                <button className="w-full px-3 py-2 rounded-lg bg-background text-foreground text-xs font-medium border border-border hover:bg-accent transition-colors">
                  Export citations
                </button>
              </div>
            </div>
          </div>
        </div>

        <InputBar placeholder="Ask a research question or verify a claim..." expandable={false} />
      </div>
    </div>
  );
}
