import { createContext, useContext } from "react";

export interface TabGroupContext {
  activeTab: number;
  name: string;
  setActiveTab: (tab: number) => void;
}

export const TabGroupContext = createContext<TabGroupContext>(
  {} as TabGroupContext
);

export function useTabGroup() {
  return useContext(TabGroupContext);
}