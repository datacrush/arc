import { useEffect } from "react";
import { ROLES } from "./aria";
import { useMeterContext } from "./context";

interface IndicatorProps {
  label?: string;
}

const ROLE = ROLES.METER;

export function Indicator({ label }: IndicatorProps) {
  const { labelledById, min, max, percent, value } = useMeterContext();

  useEffect(() => {
    if (!labelledById && !label) {
      console.warn("ARIA meter nodes must have an accessible name");
    }
  }, [label, labelledById]);

  return (
    <div
      className={`${ROLE}-indicator-container`}
      role={ROLE}
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-labelledby={labelledById}
      aria-label={label}
    >
      <svg
        height="100%"
        className={`${ROLE}-indicator-bar`}
        aria-hidden="true"
        version="1.1"
        style={{ width: `${percent}%` }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="100%" height="100%" fill="currentcolor"></rect>
      </svg>
    </div>
  );
}

export default Indicator;
