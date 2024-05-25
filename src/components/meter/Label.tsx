import { ReactNode } from "react";

import { useMeterContext } from "./context";
import { ROLES } from "./aria";

interface LabelProps {
  children: ReactNode;
}

const ROLE = ROLES.METER;

export function Label({ children }: LabelProps) {
  const { labeledById } = useMeterContext();

  return (
    <div className={`${ROLE}-label`} id={labeledById}>
      {children}
    </div>
  );
}

export default Label;
