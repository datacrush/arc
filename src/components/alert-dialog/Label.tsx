import { ReactNode } from "react";

import { useAlertDialogContext } from "./context";
import { ROLES } from "./aria";

interface LabelProps {
  children: ReactNode;
}

const ROLE = ROLES.ALERT_DIALOG;

export function Label({ children }: LabelProps) {
  const { labelledById } = useAlertDialogContext();

  return (
    <div className={`${ROLE}-label`} id={labelledById}>
      {children}
    </div>
  );
}

export default Label;
