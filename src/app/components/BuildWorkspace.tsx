import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { InputBar } from './InputBar';
import { FolderGit2, FileCode2, GitBranch, Play, XCircle, CheckCircle2, AlertCircle } from 'lucide-react';

export function BuildWorkspace() {
  const scripts = [
    { name: 'data-transformer.js', status: 'active' },
    { name: 'email-automation.py', status: 'idle' },
    { name: 'report-generator.ts', status: 'idle' },
  ];

  const testResults = [
    { name: 'validateInput()', status: 'passed', time: '12ms' },
    { name: 'processData()', status: 'passed', time: '45ms' },
    { name: 'generateOutput()', status: 'failed', time: '102ms' },
    { name: 'handleEdgeCase()', status: 'warning', time: '8ms' },
  ];

  const logs = [
    { type: 'info', message: 'Starting execution...', time: '12:34:01' },
    { type: 'success', message: 'Connected to database', time: '12:34:02' },
    { type: 'error', message: 'Undefined variable "userId"', time: '12:34:03' },
    { type: 'info', message: 'Retrying with fallback...', time: '12:34:04' },
  ];

  return (
    <div className="flex h-full">
      <Sidebar variant="workspace" />

      <div className="flex-1 flex flex-col">
        <TopBar title="Build & Automate" showBackButton showActions={false} />

        <div className="flex-1 flex overflow-hidden">
          {/* Left Panel - Projects */}
          <div className="w-56 border-r border-border bg-muted/30 overflow-y-auto">
            <div className="p-4">
              <div className="text-xs font-medium text-muted-foreground mb-3">SCRIPTS & WORKFLOWS</div>
              <div className="space-y-1">
                {scripts.map((script, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      script.status === 'active'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'text-foreground hover:bg-accent'
                    }`}
                  >
                    <FileCode2 className="w-4 h-4" />
                    <span className="flex-1 text-left truncate">{script.name}</span>
                  </button>
                ))}
              </div>

              <div className="text-xs font-medium text-muted-foreground mt-6 mb-3">EXECUTION HISTORY</div>
              <div className="space-y-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="px-3 py-2 rounded-lg text-xs text-muted-foreground hover:bg-accent transition-colors cursor-pointer">
                    <div className="flex items-center gap-2 mb-1">
                      <GitBranch className="w-3 h-3" />
                      <span>Run #{245 - i}</span>
                    </div>
                    <div className="text-[10px]">2 hours ago</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Panel - Code Editor */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Editor Header */}
            <div className="h-10 border-b border-border bg-muted/50 flex items-center px-4 gap-2">
              <FileCode2 className="w-4 h-4 text-blue-400" />
              <span className="text-sm">data-transformer.js</span>
              <div className="ml-auto flex items-center gap-2">
                <button className="px-3 py-1 rounded-md bg-green-500/20 text-green-400 text-xs font-medium flex items-center gap-1.5 hover:bg-green-500/30 transition-colors">
                  <Play className="w-3 h-3" />
                  Run
                </button>
              </div>
            </div>

            {/* Code Editor */}
            <div className="flex-1 bg-background p-4 overflow-y-auto font-mono text-sm">
              <div className="space-y-1">
                <div className="flex">
                  <span className="w-8 text-muted-foreground text-right mr-4">1</span>
                  <span><span className="text-purple-400">function</span> <span className="text-blue-400">transformData</span>(<span className="text-orange-400">input</span>) {'{'}</span>
                </div>
                <div className="flex">
                  <span className="w-8 text-muted-foreground text-right mr-4">2</span>
                  <span className="ml-4"><span className="text-purple-400">const</span> result = <span className="text-orange-400">input</span>.<span className="text-blue-400">map</span>(item =&gt; {'{'}</span>
                </div>
                <div className="flex">
                  <span className="w-8 text-muted-foreground text-right mr-4">3</span>
                  <span className="ml-8"><span className="text-purple-400">return</span> {'{'}</span>
                </div>
                <div className="flex">
                  <span className="w-8 text-muted-foreground text-right mr-4">4</span>
                  <span className="ml-12">id: item.<span className="text-blue-400">id</span>,</span>
                </div>
                <div className="flex">
                  <span className="w-8 text-muted-foreground text-right mr-4">5</span>
                  <span className="ml-12">value: item.<span className="text-blue-400">value</span> * <span className="text-green-400">2</span>,</span>
                </div>
                <div className="flex bg-red-500/10 border-l-2 border-red-500">
                  <span className="w-8 text-muted-foreground text-right mr-4">6</span>
                  <span className="ml-12">timestamp: userId.<span className="text-blue-400">now</span>() <span className="text-muted-foreground">// Error: userId undefined</span></span>
                </div>
                <div className="flex">
                  <span className="w-8 text-muted-foreground text-right mr-4">7</span>
                  <span className="ml-8">{'};'}</span>
                </div>
                <div className="flex">
                  <span className="w-8 text-muted-foreground text-right mr-4">8</span>
                  <span className="ml-4">{'});'}</span>
                </div>
                <div className="flex">
                  <span className="w-8 text-muted-foreground text-right mr-4">9</span>
                  <span className="ml-4"><span className="text-purple-400">return</span> result;</span>
                </div>
                <div className="flex">
                  <span className="w-8 text-muted-foreground text-right mr-4">10</span>
                  <span>{'}'}</span>
                </div>
              </div>
            </div>

            {/* Bottom Console */}
            <div className="h-48 border-t border-border bg-muted/30">
              <div className="h-8 border-b border-border flex items-center px-4 text-xs font-medium text-muted-foreground">
                <span>CONSOLE OUTPUT</span>
              </div>
              <div className="h-40 overflow-y-auto p-3 font-mono text-xs space-y-1">
                {logs.map((log, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-muted-foreground">[{log.time}]</span>
                    <span className={
                      log.type === 'error' ? 'text-red-400' :
                      log.type === 'success' ? 'text-green-400' :
                      'text-foreground/70'
                    }>
                      {log.message}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Testing */}
          <div className="w-72 border-l border-border bg-muted/30 overflow-y-auto">
            <div className="p-4">
              <div className="text-xs font-medium text-muted-foreground mb-3">TEST RESULTS</div>
              <div className="space-y-2">
                {testResults.map((test, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-background border border-border"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {test.status === 'passed' && <CheckCircle2 className="w-4 h-4 text-green-400" />}
                      {test.status === 'failed' && <XCircle className="w-4 h-4 text-red-400" />}
                      {test.status === 'warning' && <AlertCircle className="w-4 h-4 text-amber-400" />}
                      <span className="text-sm font-mono">{test.name}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{test.time}</div>
                  </div>
                ))}
              </div>

              <div className="text-xs font-medium text-muted-foreground mt-6 mb-3">AI SUGGESTIONS</div>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
                  <div className="text-xs text-blue-400 font-medium mb-1">💡 Fix undefined variable</div>
                  <div className="text-xs text-foreground/70">Replace "userId" with "Date" on line 6</div>
                </div>
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
                  <div className="text-xs text-blue-400 font-medium mb-1">⚡ Performance tip</div>
                  <div className="text-xs text-foreground/70">Consider memoizing the result for faster execution</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <InputBar placeholder="Ask about your code or request changes..." expandable={false} />
      </div>
    </div>
  );
}
