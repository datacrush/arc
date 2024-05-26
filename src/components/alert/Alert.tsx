import { ReactNode } from "react";
import "./Alert.css";
import { ROLES } from "./aria";
import { PATTERNS, libraryPrefix } from "../common";

interface AlertProps {
  active: boolean;
  children: ReactNode;
  id: string;
}

const pattern = PATTERNS.ALERT;
const ROLE = ROLES.ALERT;

const COMPONENT_NAMESPACE = `${libraryPrefix}-${pattern}`;

export function Alert({ active, children, id }: AlertProps) {
  return (
    <div id={id} className={COMPONENT_NAMESPACE} role={ROLE}>
      {active ? children : null}
    </div>
  );
}

export default Alert;
