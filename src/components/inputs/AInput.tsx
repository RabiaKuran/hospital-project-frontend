import { OutlinedInput, ThemeProvider, createTheme } from "@mui/material";
interface IAInput {
  width?: number;
  height?: any;
  placeholder?: any;
  onClick?: () => void;
  type?: any;
  value?: String;
  onChange?: any;
  autoComplete?: any;
  id?: any;
  inputProps?: any;
  rows?: any;
  minHeight?: any;
  name?: any;
  label?: any;
}

const theme = createTheme({
  components: {

    MuiOutlinedInput: {
      styleOverrides: {
    
        input: {
          
          padding: "13px 15px !important",
        },
      },
    },
  },
});
export default function AInput(props: IAInput) {
  const {
    placeholder,
    type,
    onClick,
    value,
    onChange,
    autoComplete,
    id,
    name,
    inputProps,
    height,
    rows,
    minHeight,
    label,
  } = props;
  return (
    <ThemeProvider theme={theme}>
      <OutlinedInput
        required
        name={name}
        label={label}
        type={type}
        id={id}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        sx={{
          backgroundColor: "#eee !important",
          border: "none",
          alignItems: "center !important",
          fontFamily: "Barlow !important",
          height: "calc(40 % + 150px) !important",
          borderRadius: "10px !important",
          borderBottom: "1px solid #ddd !important",
          boxShadow: "inset 0 0 0 rgba(0, 0, 0, 0.4), 0 0 0 #fff, 0 0 0 #fff",
          minHeight: { minHeight },
          "&.Mui-focused fieldset": {
            borderColor: "darkblue !important",
          },
          margin: "4px",
        }}
        style={{
          width: "80%",
        }}
        rows={rows}
        inputProps={inputProps}
        maxRows={3}
        placeholder={placeholder}
      />
    </ThemeProvider>
  );
}

AInput.defaultProps = {
  size: "small",
  className: "",
  fullWidth: false,
  height: "100%",
};
