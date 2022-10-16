import { createTheme } from '@mui/material/styles';
import { Shadows } from '@mui/material/styles/shadows';

const AButtonTheme = createTheme({
    palette: {
      primary: {
        main: '#0073B0',
      },
      secondary: {
        main: '#F9F9FD'
      },
      warning: {
        main: '#C60608'
      },
      error: {
        main: '#c60608',
      },
      background: {
        default: 'blue'
      },
      info:{
        main: '#fff',
      }
    },
    shadows: Array(25).fill("none") as Shadows,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none'
          },
          sizeSmall: {
            padding: '5px 16px'
          },
          sizeMedium: {
            padding: '5px 50px'
          },
          sizeLarge: {
            padding: '5px 100px'
          }
        }
  
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            textTransform: 'none'
          }
        }
      },
    }
  });
  
  export default AButtonTheme;