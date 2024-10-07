import { useRoutes } from "react-router-dom"
import MainRoutes from "./MainRoutes"
import LoreRoutes from "./LoreRoutes";
import { useScrollToTop } from "../hooks";

const RoutesComponent = () => {
    useScrollToTop();
    
    return useRoutes([MainRoutes, LoreRoutes]);
};

export default RoutesComponent;