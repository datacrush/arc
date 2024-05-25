import { ReactNode } from "react";
import { COMPONENT_NAMESPACE, ROLES } from "./aria";
import { MeterContext } from "./context";

interface MeterProps {
  children: ReactNode;
  min: number;
  max: number;
  labeledById?: string;
  value: number;
}

const ROLE = ROLES.METER;

export function Meter({ children, min, max, labeledById, value }: MeterProps) {
  const percent = (100 * (value - min)) / (max - min);

  const context = {
    labeledById: labeledById ? `${ROLE}-${labeledById}` : null,
    min,
    max,
    percent,
    value,
  };

  return (
    <MeterContext.Provider value={context}>
      <div className={COMPONENT_NAMESPACE}>{children}</div>
    </MeterContext.Provider>
  );
}

export default Meter;
