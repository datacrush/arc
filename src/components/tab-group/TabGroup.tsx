import { useState } from "react";
import { TabGroupContext } from "./context";

interface TabGroupProps {
  children: JSX.Element[];
  name: string;
}

export function TabGroup(props: TabGroupProps) {
  const [activeTab, setActiveTab] = useState(0);
  const context = { activeTab, name: props.name, setActiveTab };

  return (
    <TabGroupContext.Provider value={context}>
      <div className="tab-group">{props.children}</div>
    </TabGroupContext.Provider>
  );
}
