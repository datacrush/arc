import { ReactNode } from "react";
import { ROLES } from "./aria";
import { MeterContext } from "./context";
import { PATTERNS, libraryPrefix } from "../common";

interface MeterProps {
  children: ReactNode;
  min: number;
  max: number;
  labelledById?: string;
  value: number;
}

const pattern = PATTERNS.METER;
const ROLE = ROLES.METER;

const COMPONENT_NAMESPACE = `${libraryPrefix}-${pattern}`;

export function Meter({ children, min, max, labelledById, value }: MeterProps) {
  const percent = (100 * (value - min)) / (max - min);

  const context = {
    labelledById: labelledById ? `${ROLE}-${labelledById}` : null,
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
