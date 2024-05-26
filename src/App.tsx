import "./App.css";

import { Indicator, Meter, Label as MeterLabel } from "./components/meter";
import {
  Panel,
  PanelList,
  TabGroup,
  Label as TabLabel,
} from "./components/tab-group";
import { Tab, TabList } from "./components/tab-group/Tab";
import { AlertDemo } from "./demo";

function App() {
  return (
    <div className="app-root">
      <h1>React Components</h1>

      <AlertDemo />

      <h2>Meter</h2>

      <p>Meter with explicit Label</p>

      <Meter min={0} max={100} value={75} labelledById="cpu-usage">
        <MeterLabel>Central Processing Unit (CPU) Usage</MeterLabel>
        <Indicator />
      </Meter>

      <p>Meter with Aria Label Specified on the Indicator</p>

      <Meter min={0} max={100} value={25}>
        <Indicator label="Central Processing Unit (CPU) Usage" />
      </Meter>

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
