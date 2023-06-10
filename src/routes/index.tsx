import ContactPage from "../pages/contact/ContactPage";
import SignInPage from "../pages/signIn/SignInPage";

export interface IRouteItem {
  path: string,
  component: any,
  name: string,
  icon?: any,
  subName?: string
  roles: string[]
}
export const RouteList: IRouteItem[] = [
  {
    path: "/contact-us",
    component: <ContactPage />,
    name: "Contact Us",
    roles: ["*"]
  },
  {
    path: "/",
    component: <SignInPage />,
    name: "Logout",
    roles: ["*"]
  }


];

const RouteManager = () => {

  // const { getUser } = useContext(UserContext) as IUserContext;
  const getRouteList = () => {
    const all = "*";
    const currentUser = { role: "Manager" };
    const currentUserRole = currentUser.role;
    const filterRoute = (route: IRouteItem) => route.roles.includes(currentUserRole) || route.roles.includes(all);

    return RouteList.filter(filterRoute);
  }
  return {
    routes: getRouteList()
  }
};

export default RouteManager;