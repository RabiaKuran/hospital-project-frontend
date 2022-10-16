import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import ACard from '../cards/ACard';
import ACardContent from '../cards/ACardContent';
import AGrid from '../grids/AGrid';
import AGridItem from '../grids/AGridItem';
import { InfoOutlinedIcon, CloseIcon } from '../icons/Icon';
import ACardHeader from '../cards/ACardHeader';

interface IInfoDialogProps {
    headerText: string;
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

export default function InfoDialog(props: IInfoDialogProps) {
    const { headerText, children } = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <InfoOutlinedIcon
                color="disabled"
                onClick={handleClickOpen}
                fontSize="small"
                sx={{ marginTop: 0.4, marginLeft: 0.5 }}
            ></InfoOutlinedIcon>

            <Dialog
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