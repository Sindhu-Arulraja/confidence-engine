import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { InputBar } from './InputBar';
import { BarChart3, TrendingUp, DollarSign, Users, LineChart, PieChart } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';

export function AnalyzeDescription() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <TopBar title="Analyze & Decide" showBackButton showActions={false} />

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h1 className="text-2xl font-semibold">Analyze & Decide</h1>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Evaluate data, compare scenarios, and generate decision-ready insights with interactive
                dashboards and forecasting tools.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm font-semibold mb-4 text-foreground/70">What you can do:</h3>
                <div className="space-y-3">
                  {[
                    { icon: BarChart3, text: 'Test assumptions' },
                    { icon: TrendingUp, text: 'Compare outcomes' },
                    { icon: LineChart, text: 'Forecast results' },
                    { icon: PieChart, text: 'Analyze tradeoffs' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-foreground/80">
                      <item.icon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4 text-foreground/70">What you'll get:</h3>
                <div className="space-y-3">
                  {[
                    { icon: BarChart3, text: 'Charts and dashboards' },
                    { icon: TrendingUp, text: 'Scenario simulation' },
                    { icon: LineChart, text: 'Sensitivity analysis' },
                    { icon: DollarSign, text: 'Confidence indicators' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-foreground/80">
                      <item.icon className="w-4 h-4 text-amber-400 flex-shrink-0" />
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
                    <div className="text-[9px] font-medium text-muted-foreground">DATASETS</div>
                  </div>
                  <div className="p-1.5 space-y-0.5">
                    {['Revenue Analysis', 'User Growth', 'Product Performance'].map((name, i) => (
                      <div key={i} className="px-1.5 py-1 rounded text-[8px] bg-amber-500/10 border border-amber-500/20 text-amber-400 truncate">
                        {name}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Center Panel - Charts */}
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute left-1/2 top-6 -translate-x-1/2 w-56 h-44 bg-card border border-border rounded-lg shadow-xl overflow-hidden"
                >
                  <div className="p-1.5 border-b border-border bg-muted/50">
                    <div className="text-[9px] font-medium">Revenue Trend</div>
                  </div>
                  <div className="p-2">
                    {/* KPI Cards */}
                    <div className="grid grid-cols-2 gap-1.5 mb-2">
                      {[
                        { label: 'Revenue', value: '$346K', icon: DollarSign },
                        { label: 'Users', value: '9,450', icon: Users },
                      ].map((kpi, i) => (
                        <div key={i} className="p-1.5 rounded bg-background border border-border">
                          <div className="flex items-center gap-0.5 mb-0.5">
                            <kpi.icon className="w-2.5 h-2.5 text-amber-400" />
                            <span className="text-[8px] text-muted-foreground">{kpi.label}</span>
                          </div>
                          <div className="text-[10px] font-semibold">{kpi.value}</div>
                        </div>
                      ))}
                    </div>
                    {/* Mini Chart */}
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
                </motion.div>

                {/* Right Panel - Controls */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute right-3 top-3 w-36 h-44 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-2 border-b border-border bg-muted/50">
                    <div className="text-[9px] font-medium text-muted-foreground">SIMULATION</div>
                  </div>
                  <div className="p-2 space-y-2">
                    {['Price Change', 'Marketing Spend', 'Conversion Rate'].map((label, i) => (
                      <div key={i} className="p-1.5 rounded bg-background border border-border">
                        <div className="text-[8px] font-medium mb-1">{label}</div>
                        <input type="range" className="w-full h-0.5" />
                        <div className="flex justify-between text-[7px] text-muted-foreground mt-0.5">
                          <span>Low</span>
                          <span>High</span>
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
                onClick={() => navigate('/analyze/workspace')}
                className="px-6 py-3 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-colors font-medium"
              >
                Open Analysis Workspace
              </button>
            </div>
          </div>
        </div>

        <InputBar placeholder="Describe your analysis question..." />
      </div>
    </div>
  );
}
