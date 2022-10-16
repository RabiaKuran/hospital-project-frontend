import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const AGradientButton = styled(Button)({
    color: 'white',
    background: 'linear-gradient(90deg, rgba(255,88,0,1) 0%, rgba(198,6,8,1) 80%, rgba(198,6,8,1) 100%)',
    "&:hover": {
      background: 'linear-gradient(5deg, rgba(255,88,0,1) 0%, rgba(198,6,8,1) 15%, rgba(198,6,8,1) 100%)'
    }
  });
  
  export default AGradientButton;