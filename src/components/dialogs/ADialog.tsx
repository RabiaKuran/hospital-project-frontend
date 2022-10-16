import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import AButton from '../buttons/AButton';
import ACard from '../cards/ACard';
import ACardContent from '../cards/ACardContent';
import AGrid from '../grids/AGrid';
import AGridItem from '../grids/AGridItem';
import { CloseIcon } from '../icons/Icon';
import ACardHeader from '../cards/ACardHeader';
import DateHelper from '../../helper/DateHelper';

interface IADialogProps {
  text?: string;
  headerText: string;
  variant?: 'text' | 'contained' | 'outlined' | undefined;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  size?: 'small' | 'medium' | 'large' | undefined;
  gradient?: true
  children: any
  style?: any
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ADialog(props: IADialogProps) {
  const { text, size, color, headerText, children, style } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AButton
        text={text}
        size={size}
        color={color}
        onClick={handleClickOpen}
        style={style}
      />

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <ACard>
          <ACardHeader
            title={headerText}
            rightComponent={
              <CloseIcon
                onClick={handleClose}
                color="inherit"
              />
            }
          />
          <ACardContent>
            <AGrid>
              <AGridItem xs={12}>
                {children}
              </AGridItem>
            </AGrid>
          </ACardContent>
        </ACard>
      </Dialog>
    </>
  );
}
