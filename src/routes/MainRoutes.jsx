import config from "../config";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/404/404";
import Axs from "../pages/Axs";
import CodeOfConduct from "../pages/CodeOfConduct";
import Home from "../pages/Home";
import Lore from "../pages/Lore";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfUse from "../pages/TermsOfUse";

const MainRouter = () => {
  return <MainLayout />;
};

const publicRoutes = {
  children: [
    { path: config.routes.home, element: <Home /> },
    { path: config.routes.lore, element: <Lore /> },
    { path: config.routes.axs, element: <Axs /> },
    { path: config.routes.codeOfConduct, element: <CodeOfConduct /> },
    { path: config.routes.privacyPolicy, element: <PrivacyPolicy /> },
    { path: config.routes.termsOfUse, element: <TermsOfUse /> },
  ],
};

const notFoundRoutes = { path: "*", element: <NotFound /> };

const MainRoutes = {
  path: "/",
  element: <MainRouter />,
  children: [publicRoutes, notFoundRoutes],
};

export default MainRoutes;
