import HomeIcon from '@mui/icons-material/Home';
import Empty from "../pages/Empty";
import HomePage from '../pages/home/HomePage';
import SignInPage from '../pages/signIn/SignInPage';

export interface IRouteItem {
  path: string,
  component: any,
  name: string,
  subName?: string
  roles: string[]
}
export const RouteList: IRouteItem[] = [
  {
    path: "/",
    component: <HomePage />,
    name: "Home",
    roles: ["*"]
  },
  {
    path: "/contact-us",
    component: <Empty />,
    name: "Contact Us",
    roles: ["*"]
  }
];

const SignInIndex = () => {

  // const { getUser } = useContext(UserContext) as IUserContext;
  const getRouteList = () => {
    const all = "*";
    const currentUser = { role: "*" };
    const currentUserRole = currentUser.role;
    const filterRoute = (route: IRouteItem) => route.roles.includes(currentUserRole) || route.roles.includes(all);

    return RouteList.filter(filterRoute);
  }
  return {
    routes: getRouteList()
  }
};

export default SignInIndex;