import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IRouteItem } from '../../routes'
import "./ANavbarItem.css";

interface IANavbarItemRoute extends IRouteItem {
}
interface IANavbarItemProps {
  route: IANavbarItemRoute;
}

function ANavbarItem(props: IANavbarItemProps) {
  const { name, path } = props.route;
  const navigate = useNavigate();
  const isSelected = window.location.href.endsWith(path);
  const onMenuClick = () => {
    if (!isSelected) navigate(path, { replace: true });
  };

  return (
    <Button
      sx={{ my: 2, ml: 3, display: "block" }}
      className={`a-nav-item ${isSelected ? "selected" : ""}`}
      onClick={onMenuClick}
    >
      {name && (
        <h2>{name}</h2>
      )}
    </Button>
  );
}

ANavbarItem.propTypes = {};

export default ANavbarItem;
