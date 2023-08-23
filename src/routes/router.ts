import { routesUser } from "../config/router";
import DefaultLayout from "../layouts/LayoutUser/DefaultLayout";
//pages/users
import Home from "../pages/Home";
//public router
const publicRoutes = [
    { path: routesUser.home, component: Home, layout: DefaultLayout }
]
export default publicRoutes;