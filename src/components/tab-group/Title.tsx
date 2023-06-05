import React, { ReactNode } from "react";

import { useTabGroup } from "./context";

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  const { name } = useTabGroup();

  return (
    <h3 role="tab" id={`tab-group-${name}`}>
      {children}
    </h3>
  );
}

export default Title;
