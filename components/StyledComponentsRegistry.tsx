"use client";

import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { PropsWithChildren, useState } from "react";

export function StyledComponentsRegistry({ children }: PropsWithChildren) {
  const [styledSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledSheet.getStyleElement();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") {
    return <>{children}</>;
  }

  return (
    <StyleSheetManager sheet={styledSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}