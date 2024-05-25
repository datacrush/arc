import { ReactNode } from "react";

import { useTabGroup } from "./context";
import { COMPONENT_NAMESPACE } from "./aria";

interface LabelProps {
  children: ReactNode;
}

export function Label({ children }: LabelProps) {
  const { labeledById } = useTabGroup();

  return <h2 id={`${COMPONENT_NAMESPACE}-${labeledById}`}>{children}</h2>;
}

export default Label;
