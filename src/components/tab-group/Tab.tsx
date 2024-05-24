import { Children, ReactNode, cloneElement } from "react";

import { useTabGroup } from "./context";

interface TabProps {
  children: ReactNode;
  tabIndex?: number;
}

interface TabListProps {
  children: JSX.Element | JSX.Element[];
}

export function Tab({ children, tabIndex }: TabProps) {
  const { activeTab, setActiveTab } = useTabGroup();

  return (
    <button
      id={`tab-${tabIndex}`}
      role="tab"
      type="button"
      aria-selected={tabIndex === activeTab}
      aria-controls={`tabpanel-${tabIndex}`}
      onClick={() => setActiveTab(tabIndex)}
    >
      {children}
    </button>
  );
}

export function TabList({ children }: TabListProps) {
  const { name } = useTabGroup();

  const transformedChildren = Children.map(children, (child, index) => {
    return cloneElement(child, { tabIndex: index });
  });

  return (
    <div role="tablist" aria-labelledby={`tab-group-${name}`}>
      {transformedChildren}
    </div>
  );
}
