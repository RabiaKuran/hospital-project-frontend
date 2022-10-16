import { Container } from '@mui/material'

export default function AContainer(props: any) {
  const { children } = props;
  return <Container {...props}>{children}</Container>;
}
