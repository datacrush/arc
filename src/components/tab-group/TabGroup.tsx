import { useState } from "react";
import { TabGroupContext } from "./context";
import { PATTERNS, libraryPrefix } from "../common";

interface TabGroupProps {
  children: JSX.Element[];
  labeledById: string;
}

const pattern = PATTERNS.TABS;
const COMPONENT_NAMESPACE = `${libraryPrefix}-${pattern}}`;

export function TabGroup({ children, labeledById }: TabGroupProps) {
  const [activeTab, setActiveTab] = useState(0);
  const context = { activeTab, labeledById, setActiveTab };

  return (
    <TabGroupContext.Provider value={context}>
      <div className={COMPONENT_NAMESPACE}>{children}</div>
    </TabGroupContext.Provider>
  );
}
