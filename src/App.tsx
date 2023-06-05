import "./App.css";
import { Panel, PanelList, TabGroup, Title } from "./components/tab-group";
import { Tab, TabList } from "./components/tab-group/Tab";

function App() {
  return (
    <div className="app-root">
      <h1>React Components</h1>

      <TabGroup name="demo">
        <Title>Demo Tab Group</Title>
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
