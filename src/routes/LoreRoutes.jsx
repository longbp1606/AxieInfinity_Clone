import { Outlet } from "react-router-dom"
import config from "../config";
import LoreDetails from "../pages/LoreDetails";

const LoreRouter = () => {
    return <Outlet/>;
};

const loreRoutes = {
    path: config.routes.loreDetail,
    element: <LoreDetails/>,
}

const LoreRoutes = {
    path: config.routes.loreDetail,
    element: <LoreRouter/>,
    children: [loreRoutes]
};

export default LoreRoutes;