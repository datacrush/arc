import { ReactNode } from "react";

import { useTabGroup } from "./context";
import { ROLES } from "./aria";

interface LabelProps {
  children: ReactNode;
}

const ROLE = ROLES.TABLIST;

export function Label({ children }: LabelProps) {
  const { labeledById } = useTabGroup();

  return (
    <div className={`${ROLE}-label`} id={`${ROLE}-${labeledById}`}>
      {children}
    </div>
  );
}

export default Label;
