import Dashboard from "../views/Dashboard/Dashboard";
import UserProfile from "../views/UserProfile/UserProfile";
import MediaCenter from "../views/MediaCenter/MediaCenter";
import OurProjects from "../views/OurProjects/OurProjects";
import Login from "../views/Login/Login";
import Maps from "../views/Maps/Maps";
import Notifications from "../views/Notifications/Notifications";
import Upgrade from "../views/Upgrade/Upgrade";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/mediacenter",
    name: "Media Center",
    icon: "pe-7s-note2",
    component: MediaCenter
  },
  {
    path: "/ourprojects",
    name: "Our Projects",
    icon: "pe-7s-news-paper",
    component: OurProjects
  },
  { redirect: true, path: "/", to: "/login", name: "Login" }
];

export default dashboardRoutes;


//
// ,
// { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
// { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
// {
//   path: "/notifications",
//   name: "Notifications",
//   icon: "pe-7s-bell",
//   component: Notifications
// },
// {
//   upgrade: true,
//   path: "/upgrade",
//   name: "Upgrade to PRO",
//   icon: "pe-7s-rocket",
//   component: Upgrade
// },
