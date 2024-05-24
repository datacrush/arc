import { Children, cloneElement } from "react";
import { useTabGroup } from "./context";

interface PanelProps {
  children: JSX.Element | JSX.Element[];
  tabIndex?: number;
}

interface PanelListProps {
  children: JSX.Element | JSX.Element[];
}

export function Panel({ children, tabIndex }: PanelProps) {
  const { activeTab } = useTabGroup();

  return tabIndex === activeTab ? (
    <div
      role="tabpanel"
      id={`tabpanel-${activeTab}`}
      aria-labelledby={`tab-${tabIndex}`}
    >
      {children}
    </div>
  ) : null;
}

export function PanelList({ children }: PanelListProps) {
  const transformedChildren = Children.map(children, (child, index) => {
    return cloneElement(child, { tabIndex: index });
  });

  return <>{transformedChildren}</>;
}
