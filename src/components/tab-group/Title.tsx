import { ReactNode } from "react";

import { useTabGroup } from "./context";
import { COMPONENT_NAMESPACE } from "./aria";

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  const { name } = useTabGroup();

  return <h2 id={`${COMPONENT_NAMESPACE}-${name}`}>{children}</h2>;
}

export default Title;
