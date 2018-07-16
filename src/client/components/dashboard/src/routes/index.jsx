import Dashboard from "../layouts/Dashboard/Dashboard.jsx";
import Login from '../views/Login/Login.jsx';

var indexRoutes = [{ path: "/", name: "Login", component: Login },
    {path:"/dashboard", name:"Dashboard", component: Dashboard}
];

export default indexRoutes;
