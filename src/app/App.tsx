import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { HomeScreen } from './components/HomeScreen';
import { BuildDescription } from './components/BuildDescription';
import { BuildWorkspace } from './components/BuildWorkspace';
import { AnalyzeDescription } from './components/AnalyzeDescription';
import { AnalyzeWorkspace } from './components/AnalyzeWorkspace';
import { ResearchDescription } from './components/ResearchDescription';
import { ResearchWorkspace } from './components/ResearchWorkspace';
import { BrainstormDescription } from './components/BrainstormDescription';
import { BrainstormWorkspace } from './components/BrainstormWorkspace';

export default function App() {
  return (
    <div className="dark size-full bg-background text-foreground">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/build" element={<BuildDescription />} />
          <Route path="/build/workspace" element={<BuildWorkspace />} />
          <Route path="/analyze" element={<AnalyzeDescription />} />
          <Route path="/analyze/workspace" element={<AnalyzeWorkspace />} />
          <Route path="/research" element={<ResearchDescription />} />
          <Route path="/research/workspace" element={<ResearchWorkspace />} />
          <Route path="/brainstorm" element={<BrainstormDescription />} />
          <Route path="/brainstorm/workspace" element={<BrainstormWorkspace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
