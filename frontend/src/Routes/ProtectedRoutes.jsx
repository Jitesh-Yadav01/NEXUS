import React from "react";
import TePanel from "@/pages/Profile/Te profile/TePanel";
import FePanel from "@/pages/Profile/FE Profile/FePanel";
import SePanel from "@/pages/Profile/SE profile/SePanel";
import MyForms from "@/pages/Forms/MyForms";


export const protectedRoutes = [
  { path: "/profile/TE", element: <TePanel /> },
  { path: "/profile/SE", element: <SePanel /> },
  { path: "/profile/FE", element: <FePanel /> },
  { path: "/my-forms", element: <MyForms /> },

];
