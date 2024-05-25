import { ReactNode } from "react";

import { useMeterContext } from "./context";
import { COMPONENT_NAMESPACE } from "./aria";

interface LabelProps {
  children: ReactNode;
}

export function Label({ children }: LabelProps) {
  const { labeledById } = useMeterContext();

  return (
    <h3 className={`${COMPONENT_NAMESPACE}-label`} id={labeledById}>
      {children}
    </h3>
  );
}

export default Label;
