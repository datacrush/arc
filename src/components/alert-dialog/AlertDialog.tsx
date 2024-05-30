import { ReactNode } from "react";

import { PATTERNS, libraryPrefix } from "../common";
import { ROLES } from "./aria";
import { AlertDialogContext } from "./context";

interface AlertDialogProps {
  active: boolean;
  children: ReactNode;
  labelledById?: string;
  setActive?: (active: boolean) => void;
}

const pattern = PATTERNS.ALERT_DIALOG;
const ROLE = ROLES.ALERT_DIALOG;

const COMPONENT_NAMESPACE = `${libraryPrefix}-${pattern}`;

export function AlertDialog({
  active,
  children,
  labelledById,
}: AlertDialogProps) {
  const labelledBy = labelledById ? `${labelledById}-${ROLE}-label` : null;

  const context = {
    labelledById: labelledBy,
    active,
    setActive: (active: boolean) => active,
  };

  return (
    <AlertDialogContext.Provider value={context}>
      <div
        id={labelledById}
        role={ROLE}
        aria-modal={true}
        aria-labelledby={labelledBy}
        className={COMPONENT_NAMESPACE}
      >
        {active ? children : null}
      </div>
    </AlertDialogContext.Provider>
  );
}

export default AlertDialog;
