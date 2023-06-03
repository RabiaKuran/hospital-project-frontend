import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import React from "react";
import AGrid from "../grids/AGrid";
import AGridItem from "../grids/AGridItem";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
interface IACardInfoButton {
  text?: String;
  onClick?: () => void;
  title?: string;
  onChange?: any;
}
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function ACardInfoButton(props: IACardInfoButton) {
  const { text, onClick, title, onChange } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AGrid marginBottom={2} marginTop={2}>
      <AGridItem xs={3}>
        {" "}
        <Typography style={{ textAlign: "left" }} variant="h5">
          {text}
        </Typography>
      </AGridItem>
      <AGridItem xs={2} marginRight={6} >
        <Button
        style={{ textAlign: "left" }}
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          color="success"
          endIcon={<KeyboardArrowDownIcon />}
        >
          EXPORT
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            To CSV
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            To Excel
          </MenuItem>
        </StyledMenu>
      </AGridItem>
      <AGridItem xs={6}>
        <FormControl variant="standard">
          <Input
            type="text"
            onChange={onChange}
            sx={{ minWidth: "400px" }}
            placeholder="Search"
            id="search"
            startAdornment={
              <InputAdornment position={"start"}>
                <IconButton
                  onClick={onClick}
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon style={{ alignItems: "end" }} />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </AGridItem>
    </AGrid>
  );
}
