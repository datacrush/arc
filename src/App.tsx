import "./App.css";

import {
  Panel,
  PanelList,
  TabGroup,
  Label as TabLabel,
} from "./components/tab-group";
import { Tab, TabList } from "./components/tab-group/Tab";
import { AlertDemo } from "./demo";
import { MeterDemo } from "./demo";

function App() {
  return (
    <div className="app-root">
      <h1>React Components</h1>

      <AlertDemo />

      <MeterDemo />

      <h2>Tabs</h2>

      <TabGroup labelledById="demo">
        <TabLabel>Demo Tab Group</TabLabel>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <PanelList>
          <Panel>
            <h3>Here is Tab 1's panel Content</h3>
          </Panel>
          <Panel>
            <h3>Here is Tab 2's panel content</h3>
          </Panel>
        </PanelList>
      </TabGroup>
    </div>
  );
}

export default App;
