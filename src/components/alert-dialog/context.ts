import { createContext, useContext } from "react";

export interface AlertDialogContext {
  labelledById: string;
  active: boolean;
  setActive: (active: boolean) => void;
}

export const AlertDialogContext = createContext<AlertDialogContext>(
  {} as AlertDialogContext
);

export function useAlertDialogContext() {
  return useContext(AlertDialogContext);
}
