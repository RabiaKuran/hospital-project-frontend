import IconButton from "@mui/material/IconButton";
import RedirectHelper from "../../helper/RedirectHelper";

export default function ANotificationItem() {
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    RedirectHelper.redirect("/");
  }

  return (
    <h1 onClick={handleLogout} style={{ color: "#fff", marginLeft: 25, fontSize: 18, marginTop: -7.8 }}>Logout</h1>
  );
} 