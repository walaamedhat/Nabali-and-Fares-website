import Dashboard from "../views/Dashboard/Dashboard";
import UserProfile from "../views/UserProfile/UserProfile";
import MediaCenter from "../views/MediaCenter/MediaCenter";
import AddProjects from "../views/OurProjects/AddProjects";
import AddNews from "../views/MediaCenter/AddNews";
import Login from "../views/Login/Login";
import Maps from "../views/Maps/Maps";
import Notifications from "../views/Notifications/Notifications";
import Upgrade from "../views/Upgrade/Upgrade";
import OurProjects from "../views/OurProjects/OurProjects";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "لوحة التحكم",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/user",
    name: "معلومات الآدمن",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/mediacenter",
    name: "المركز الإعلامي",
    icon: "pe-7s-note2",
    component: MediaCenter
  },
  {
    path: "/addnews",
    name: "إضافة خبر جديد",
    icon: "pe-7s-news-paper",
    component: AddNews
  },
  {
    path: "/ourprojects",
    name: "عرض المشاريع",
    icon: "pe-7s-portfolio",
    component: OurProjects
  },
  {
    path: "/addprojects",
    name: "إضافة مشروع",
    icon: "pe-7s-culture",
    component: AddProjects
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
