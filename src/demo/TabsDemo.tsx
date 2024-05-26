import { Label, Panel, PanelList, TabGroup } from "../components/tab-group";
import { Tab, TabList } from "../components/tab-group/Tab";

export function TabsDemo() {
  return (
    <div>
      <h2>Tabs</h2>

      <TabGroup labelledById="demo">
        <Label>Demo Tab Group</Label>
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

export default TabsDemo;
