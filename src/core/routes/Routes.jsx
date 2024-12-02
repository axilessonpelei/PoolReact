import { createBrowserRouter} from "react-router-dom";
import Staking from "../../ui/pages/staking/Staking.jsx";
import Router from "../../ui/pages/router/Router.jsx";
import Registr from "../../ui/pages/registr/Registr.jsx";
import Pool from "../../ui/pages/poolPages/Pool.jsx";
const routes = [
    {
        path: "/pool",
        element: <Pool/>,
    },
    {
        path: "/staking",
        element: <Staking/>,
    },
    {
        path: "/router",
        element: <Router/>,
    },
    {
        path: "/",
        element: <Registr/>,
    }

]
const router = createBrowserRouter(routes);
export {router}