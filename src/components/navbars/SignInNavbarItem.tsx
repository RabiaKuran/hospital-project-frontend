import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IRouteItem } from "../../routes/SignInIndex";
import "./ANavbarItem.css";

interface ISignInNavbarItemRoute extends IRouteItem {
}
interface ISignInNavbarItemProps {
  route: ISignInNavbarItemRoute;
}

function SignInNavbarItem(props: ISignInNavbarItemProps) {
  const {  name, path } = props.route;
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
        <>
         <h1>{name}</h1>
        </>
      )}
    </Button>
  );
}

SignInNavbarItem.propTypes = {};

export default SignInNavbarItem;