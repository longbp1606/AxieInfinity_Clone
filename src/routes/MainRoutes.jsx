import config from "../config";
import MainLayout from "../layouts/MainLayout"
import NotFound from "../pages/404/404";
import Axs from "../pages/Axs";
import Home from "../pages/Home";
import Lore from "../pages/Lore";

const MainRouter = () => {
    return <MainLayout/>
};

const publicRoutes = {
    children: [
        { path: config.routes.home, element: <Home/> },
        { path: config.routes.lore, element: <Lore/> },
        { path: config.routes.axs, element: <Axs/> },
    ]
};

const notFoundRoutes = { path: '*', element: <NotFound />}

const MainRoutes = {
    path: '/',
    element: <MainRouter/>,
    children: [publicRoutes, notFoundRoutes]
};

export default MainRoutes;