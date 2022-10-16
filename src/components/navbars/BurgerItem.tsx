import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import {useState} from 'react'
import { RouteList } from "../../routes";
import { useNavigate } from "react-router-dom";

export default function BurgerItem() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(
    null
  );
 
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isSelected=(path:string)=>{
    return window.location.href.endsWith(path);
  }
  const onMenuClick = (route:any) => {
    if (!isSelected(route.path)) {
      navigate(route.path, { replace: true });
      handleCloseNavMenu();
    }
  };
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {RouteList.map((route, index) => (
          <MenuItem
            key={"burger" + index}
            onClick={() => {
              onMenuClick(route);
            }}
          >
            <Typography textAlign="center">
              {route.name}
              {route.subName && " - " + route.subName}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
