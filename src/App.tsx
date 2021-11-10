import { FSDataProvider } from './components/FSDataProvider';
import { Topbar } from './components/Topbar';
import { MainArea } from './components/MainArea';
import { FSTree } from './components/FSTree';
import { FSDetails } from './components/FSDetails';

export const App = function App() {
  return (
    <div className="default-layout">
      <Topbar title="Home Assignment" />
      <MainArea>
        <FSDataProvider>
          <FSTree />
          <FSDetails />
        </FSDataProvider>
      </MainArea>
    </div>
  );
};
