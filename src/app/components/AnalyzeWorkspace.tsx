import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { InputBar } from './InputBar';
import { Database, FileSpreadsheet, TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Activity } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { month: 'Jan', revenue: 45000, users: 1200, orders: 450 },
  { month: 'Feb', revenue: 52000, users: 1450, orders: 520 },
  { month: 'Mar', revenue: 48000, users: 1380, orders: 480 },
  { month: 'Apr', revenue: 61000, users: 1650, orders: 610 },
  { month: 'May', revenue: 72000, users: 1920, orders: 720 },
  { month: 'Jun', revenue: 68000, users: 1850, orders: 680 },
];

export function AnalyzeWorkspace() {
  const kpis = [
    { label: 'Total Revenue', value: '$346K', change: '+24%', trend: 'up', icon: DollarSign },
    { label: 'Active Users', value: '9,450', change: '+12%', trend: 'up', icon: Users },
    { label: 'Total Orders', value: '3,460', change: '+18%', trend: 'up', icon: ShoppingCart },
    { label: 'Conversion Rate', value: '3.2%', change: '-2%', trend: 'down', icon: Activity },
  ];

  return (
    <div className="flex h-full">
      <Sidebar variant="workspace" />

      <div className="flex-1 flex flex-col">
        <TopBar title="Analyze & Decide" showBackButton showActions={false} />

        <div className="flex-1 flex overflow-hidden">
          {/* Left Panel - Datasets */}
          <div className="w-56 border-r border-border bg-muted/30 overflow-y-auto">
            <div className="p-4">
              <div className="text-xs font-medium text-muted-foreground mb-3">DATASETS</div>
              <div className="space-y-1">
                {['Revenue Analysis', 'User Growth', 'Product Performance', 'Market Trends'].map((item, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      index === 0
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'text-foreground hover:bg-accent'
                    }`}
                  >
                    <Database className="w-4 h-4" />
                    <span className="flex-1 text-left truncate">{item}</span>
                  </button>
                ))}
              </div>

              <div className="text-xs font-medium text-muted-foreground mt-6 mb-3">SAVED ANALYSES</div>
              <div className="space-y-1">
                {['Q1 Report', 'Monthly Dashboard', 'Forecast Model'].map((item, index) => (
                  <div key={index} className="px-3 py-2 rounded-lg text-xs text-muted-foreground hover:bg-accent transition-colors cursor-pointer">
                    <div className="flex items-center gap-2 mb-1">
                      <FileSpreadsheet className="w-3 h-3" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Panel - Charts & Analysis */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {kpis.map((kpi, index) => {
                const Icon = kpi.icon;
                return (
                  <div key={index} className="p-4 rounded-xl bg-card border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                      <span className={`text-xs font-medium flex items-center gap-1 ${
                        kpi.trend === 'up' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {kpi.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {kpi.change}
                      </span>
                    </div>
                    <div className="text-2xl font-semibold mb-1">{kpi.value}</div>
                    <div className="text-xs text-muted-foreground">{kpi.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Revenue Chart */}
            <div className="p-6 rounded-xl bg-card border border-border mb-4">
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-1">Revenue Trend</h3>
                <p className="text-xs text-muted-foreground">6-month performance overview</p>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.269 0 0)" />
                  <XAxis dataKey="month" stroke="oklch(0.708 0 0)" style={{ fontSize: '12px' }} />
                  <YAxis stroke="oklch(0.708 0 0)" style={{ fontSize: '12px' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'oklch(0.205 0 0)',
                      border: '1px solid oklch(0.269 0 0)',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Line type="monotone" dataKey="revenue" stroke="#f59e0b" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Orders Chart */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-1">Order Volume</h3>
                <p className="text-xs text-muted-foreground">Monthly order distribution</p>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.269 0 0)" />
                  <XAxis dataKey="month" stroke="oklch(0.708 0 0)" style={{ fontSize: '12px' }} />
                  <YAxis stroke="oklch(0.708 0 0)" style={{ fontSize: '12px' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'oklch(0.205 0 0)',
                      border: '1px solid oklch(0.269 0 0)',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Bar dataKey="orders" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* AI Insights */}
            <div className="mt-6 p-6 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <div className="text-sm font-medium text-amber-400 mb-2">📊 Key Insights</div>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• Revenue growth accelerated in May (+18% MoM), driven by increased user acquisition</li>
                <li>• Conversion rate dip in June suggests need for checkout optimization</li>
                <li>• User growth remains consistent, indicating strong market fit</li>
              </ul>
            </div>
          </div>

          {/* Right Panel - Controls */}
          <div className="w-72 border-l border-border bg-muted/30 overflow-y-auto">
            <div className="p-4">
              <div className="text-xs font-medium text-muted-foreground mb-3">SCENARIO SIMULATION</div>

              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-background border border-border">
                  <label className="text-xs font-medium mb-2 block">Price Change</label>
                  <input type="range" min="-50" max="50" defaultValue="0" className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>-50%</span>
                    <span className="text-amber-400">0%</span>
                    <span>+50%</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-background border border-border">
                  <label className="text-xs font-medium mb-2 block">Marketing Spend</label>
                  <input type="range" min="0" max="100" defaultValue="50" className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>$0</span>
                    <span className="text-amber-400">$50K</span>
                    <span>$100K</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-background border border-border">
                  <label className="text-xs font-medium mb-2 block">Conversion Rate</label>
                  <input type="range" min="1" max="10" defaultValue="3" step="0.1" className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1%</span>
                    <span className="text-amber-400">3%</span>
                    <span>10%</span>
                  </div>
                </div>
              </div>

              <div className="text-xs font-medium text-muted-foreground mt-6 mb-3">CONFIDENCE INDICATORS</div>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-background border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs">Data Quality</span>
                    <span className="text-xs text-green-400">High</span>
                  </div>
                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-green-400 rounded-full" />
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-background border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs">Forecast Accuracy</span>
                    <span className="text-xs text-amber-400">Medium</span>
                  </div>
                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-amber-400 rounded-full" />
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-background border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs">Sample Size</span>
                    <span className="text-xs text-green-400">Strong</span>
                  </div>
                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[90%] bg-green-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <InputBar placeholder="Ask about your data or run a new analysis..." expandable={false} />
      </div>
    </div>
  );
}
