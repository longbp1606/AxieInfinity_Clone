import { useRoutes } from "react-router-dom"
import MainRoutes from "./MainRoutes"
import LoreRoutes from "./LoreRoutes";

const RoutesComponent = () => {
    return useRoutes([MainRoutes, LoreRoutes]);
};

export default RoutesComponent;