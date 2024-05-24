import { ReactNode } from "react";

import { useTabGroup } from "./context";

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  const { name } = useTabGroup();

  return <h2 id={`tab-group-${name}`}>{children}</h2>;
}

export default Title;
