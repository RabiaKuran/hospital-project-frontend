import RedirectHelper from "../../helper/RedirectHelper";

export default function ALogoItem() {
    const logo = () => {
        RedirectHelper.redirect("/panel");
    }

    return (
        <h1 onClick={logo} style={{ color: "#fff", fontSize: 25, marginTop: -1, marginLeft: -5, fontFamily: "-moz-initial", fontWeight: "1"}}>HOME PAGE</h1>
    );
} 