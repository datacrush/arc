import { Children, JSX, ReactNode, cloneElement } from "react";

import { useTabGroup } from "./context";
import { ROLES } from "./aria";

interface TabProps {
  children: ReactNode;
  tabIndex?: number;
}

interface TabListProps {
  children: JSX.Element | JSX.Element[];
}

const ROLE = ROLES.TABLIST;
const CONTROLS_ROLE = ROLES.TABPANEL;

export function Tab({ children, tabIndex }: TabProps) {
  const { activeTab, setActiveTab } = useTabGroup();

  return (
    <button
      id={`tab-${tabIndex}`}
      role={ROLES.TAB}
      type="button"
      aria-selected={tabIndex === activeTab}
      aria-controls={`${CONTROLS_ROLE}-${tabIndex}`}
      onClick={() => setActiveTab(tabIndex)}
    >
      {children}
    </button>
  );
}

export function TabList({ children }: TabListProps) {
  const { labelledById } = useTabGroup();

  const transformedChildren = Children.map(children, (child, index) => {
    return cloneElement(child, { tabIndex: index });
  });

  return (
    <div role={ROLE} aria-labelledby={`${ROLE}-${labelledById}`}>
      {transformedChildren}
    </div>
  );
}
