import { Stack } from "@mui/material";
import React from "react";

interface IAStackProps {
  children: any;
  spacing?: number;
}
export default function AStack(props: IAStackProps) {
  const { children, spacing } = props;
  return <Stack spacing={spacing}>{children}</Stack>;
}

AStack.defaultProps = {
  spacing: 0,
};
