import { Children, cloneElement } from "react";
import { useTabGroup } from "./context";
import { ROLES } from "./aria";

interface PanelProps {
  children: JSX.Element | JSX.Element[];
  tabIndex?: number;
}

interface PanelListProps {
  children: JSX.Element | JSX.Element[];
}

const ROLE = ROLES.TABPANEL;
const LABELLED_BY_ROLE = ROLES.TAB;

export function Panel({ children, tabIndex }: PanelProps) {
  const { activeTab } = useTabGroup();

  return tabIndex === activeTab ? (
    <div
      role={ROLE}
      id={`${ROLE}-${tabIndex}`}
      aria-labelledby={`${LABELLED_BY_ROLE}-${tabIndex}`}
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
