import { useState } from "react";
import { TabGroupContext } from "./context";
import { COMPONENT_NAMESPACE } from "./aria";

interface TabGroupProps {
  children: JSX.Element[];
  labeledById: string;
}

export function TabGroup({ children, labeledById }: TabGroupProps) {
  const [activeTab, setActiveTab] = useState(0);
  const context = { activeTab, labeledById, setActiveTab };

  return (
    <TabGroupContext.Provider value={context}>
      <div className={COMPONENT_NAMESPACE}>{children}</div>
    </TabGroupContext.Provider>
  );
}
