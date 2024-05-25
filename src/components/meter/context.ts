import { createContext, useContext } from "react";

export interface MeterContext {
  labeledById: string;
  min: number;
  max: number;
  percent: number;
  value: number;
}

export const MeterContext = createContext<MeterContext>({} as MeterContext);

export function useMeterContext() {
  return useContext(MeterContext);
}
