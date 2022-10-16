import { Button, CardActions } from '@mui/material';
import ACard from '../../../components/cards/ACard'
import ACardContent from '../../../components/cards/ACardContent';
import CardHeader from '@mui/material/CardHeader';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AHeaderLabel from '../../../components/labels/header/AHeaderLabel';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import ADivider from '../../../components/divider/ADivider';
import { ColorPalette } from '../../../theme/ColorPalette';
export default function DemoCard() {
  return (
    <ACard>
      <CardHeader
        title={"Başlık"}
        avatar={<Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>}
        action={
          <i>
            <AHeaderLabel
              text="Düne Göre asdfDeğişim"
              color={ColorPalette.lighterGray}
              size={1}
            >
              <InfoOutlinedIcon sx={{ fontSize: 14 }}></InfoOutlinedIcon>
            </AHeaderLabel>
          </i>
        }
        subheader="sub header"
      ></CardHeader>
      <ACardContent>
        <ADivider></ADivider>
      </ACardContent>
      <CardActions>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
        </Grid>
      </CardActions>
    </ACard>
  );
}
