import { JSX, useState } from "react";
import { TabGroupContext } from "./context";
import { PATTERNS, libraryPrefix } from "../common";

interface TabGroupProps {
  children: JSX.Element[];
  labelledById: string;
}

const pattern = PATTERNS.TABS;
const COMPONENT_NAMESPACE = `${libraryPrefix}-${pattern}`;

export function TabGroup({ children, labelledById }: TabGroupProps) {
  const [activeTab, setActiveTab] = useState(0);
  const context = { activeTab, labelledById, setActiveTab };

  return (
    <TabGroupContext.Provider value={context}>
      <div className={COMPONENT_NAMESPACE}>{children}</div>
    </TabGroupContext.Provider>
  );
}
