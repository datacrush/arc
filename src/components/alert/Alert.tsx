import { ReactNode } from "react";

import { COMPONENT_NAMESPACE, ROLES } from "./aria";

interface AlertProps {
  children: ReactNode;
}

const ROLE = ROLES.ALERT;

export function Alert({ children }: AlertProps) {
  return (
    <div className={COMPONENT_NAMESPACE} role={ROLE}>
      {children}
    </div>
  );
}

export default Alert;
