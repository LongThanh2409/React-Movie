import { routesUser } from "../config/router";
import DefaultLayout from "../layouts/LayoutUser/DefaultLayout";
//pages/users
import Home from "../pages/Home/Home";
import Search_Home from "../pages/Search_Home";
//public router
const publicRoutes = [
    { path: routesUser.home, component: Home, layout: DefaultLayout },
    { path: routesUser.search, component: Search_Home, layout: DefaultLayout }
]
export default publicRoutes;