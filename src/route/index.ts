import { useRoutes } from "react-router-dom";
import LayoutClient from "../layouts/LayoutClient";
import HomePage from "../page/website/HomePage";
import LayoutAdmin from "../layouts/LayoutAdmin";
import Notfound from "../page/website/404/Notfound";
import pageAdmin from "../page/admin/page";
import Add from "../page/admin/Add";
import Edit from "../page/admin/Edit";



function Router  ()  {
  const router = useRoutes([
    {
      path: "/",
      Component: LayoutClient,
      children: [
        { path: "/", Component: HomePage },
        
      ],
    },

    {
      path: "/admin",
      Component: LayoutAdmin,
      children: [
      {path:"/admin",Component:pageAdmin},
      {path:"add",Component:Add},
      {path:"edit/:id",Component:Edit}
      ],
    },
    {path:'*',Component:Notfound}
  ]);
  return router;
 
};

export default Router;
