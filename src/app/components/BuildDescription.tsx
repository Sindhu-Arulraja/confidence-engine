import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { InputBar } from './InputBar';
import { Code2, Terminal, Play, CheckCircle2, XCircle, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';

export function BuildDescription() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <TopBar title="Build & Automate" showBackButton showActions={false} />

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <h1 className="text-2xl font-semibold">Build & Automate</h1>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Create workflows, formulas, scripts, automations, and logic systems with intelligent
                debugging and testing tools.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm font-semibold mb-4 text-foreground/70">What you can do:</h3>
                <div className="space-y-3">
                  {[
                    { icon: Code2, text: 'Write formulas and scripts' },
                    { icon: Wrench, text: 'Automate repetitive tasks' },
                    { icon: Terminal, text: 'Build workflows' },
                    { icon: Play, text: 'Debug logic' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-foreground/80">
                      <item.icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4 text-foreground/70">What you'll get:</h3>
                <div className="space-y-3">
                  {[
                    { icon: Terminal, text: 'Testing workspace' },
                    { icon: Play, text: 'Execution previews' },
                    { icon: CheckCircle2, text: 'Runtime validation' },
                    { icon: XCircle, text: 'Debugging tools' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-foreground/80">
                      <item.icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
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
                {/* Left Panel */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-3 top-3 w-32 h-48 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-2 border-b border-border bg-muted/50">
                    <div className="text-[9px] font-medium text-muted-foreground">SCRIPTS</div>
                  </div>
                  <div className="p-1.5 space-y-0.5">
                    {['data-transformer.js', 'email-automation.py', 'report-generator.ts'].map((name, i) => (
                      <div key={i} className="px-1.5 py-1 rounded text-[8px] bg-blue-500/10 border border-blue-500/20 text-blue-400 truncate">
                        {name}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Center Panel */}
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute left-1/2 top-6 -translate-x-1/2 w-56 h-44 bg-card border border-border rounded-lg shadow-xl overflow-hidden"
                >
                  <div className="p-1.5 border-b border-border bg-muted/50 flex items-center justify-between">
                    <div className="text-[9px] font-medium flex items-center gap-1.5">
                      <Code2 className="w-2.5 h-2.5 text-blue-400" />
                      <span>Code Editor</span>
                    </div>
                    <button className="px-1.5 py-0.5 rounded text-[8px] bg-green-500/20 text-green-400 flex items-center gap-0.5">
                      <Play className="w-2.5 h-2.5" />
                      Run
                    </button>
                  </div>
                  <div className="p-2 font-mono text-[8px] space-y-0.5">
                    <div className="text-purple-400">function transformData(input) {'{'}</div>
                    <div className="ml-2 text-foreground/70">const result = input.map(...);</div>
                    <div className="ml-2 text-foreground/70">return result;</div>
                    <div className="text-purple-400">{'}'}</div>
                  </div>
                </motion.div>

                {/* Right Panel */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute right-3 top-3 w-36 h-44 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-2 border-b border-border bg-muted/50">
                    <div className="text-[9px] font-medium text-muted-foreground">TEST RESULTS</div>
                  </div>
                  <div className="p-1.5 space-y-1.5">
                    {[
                      { name: 'validateInput()', status: 'passed' },
                      { name: 'processData()', status: 'passed' },
                      { name: 'generateOutput()', status: 'failed' },
                    ].map((test, i) => (
                      <div key={i} className="p-1.5 rounded bg-background border border-border">
                        <div className="flex items-center gap-1 text-[8px]">
                          {test.status === 'passed' ? (
                            <CheckCircle2 className="w-2.5 h-2.5 text-green-400" />
                          ) : (
                            <XCircle className="w-2.5 h-2.5 text-red-400" />
                          )}
                          <span className="font-mono truncate">{test.name}</span>
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
                onClick={() => navigate('/build/workspace')}
                className="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors font-medium"
              >
                Open Build Workspace
              </button>
            </div>
          </div>
        </div>

        <InputBar placeholder="Describe what you want to build..." />
      </div>
    </div>
  );
}
