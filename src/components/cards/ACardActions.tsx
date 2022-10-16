import { CardActions } from '@mui/material'
interface IACardActionsProps {
  children: any;
  disableSpacing?: boolean;
}

export default function ACardActions(props: IACardActionsProps) {
  const { children, disableSpacing } = props;
  return <CardActions disableSpacing={disableSpacing}>{children}</CardActions>;
}

ACardActions.defaultProps = {
  disableSpacing: false,
};