import { FSDataProvider } from './components/FSDataProvider';
import { Topbar } from './components/Topbar';
import { Sidebar } from './components/Sidebar';

export const App = function App() {
  return (
    <div className="default-layout">
      <Topbar title="Home Assignment" />
      <FSDataProvider>
        <Sidebar />
      </FSDataProvider>
    </div>
  );
};
