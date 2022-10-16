import IconButton from "@mui/material/IconButton";

interface IAIconButton {
  children: any;
}

export default function AIconButton(props: IAIconButton) {
  const { children } = props;
  return <IconButton>{children}</IconButton>;
}
