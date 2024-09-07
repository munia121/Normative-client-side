import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import HomePage from "../Pages/HomePage/HomePage";
import AboutePage from "../Pages/aboute/AboutePage";
import OurProjects from "../Pages/OurProjects/OurProjects";
import ContactUs from "../Pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children: [
        {
            path:'/',
            element:<HomePage></HomePage>
        },
        {
          path:'about',
          element:<AboutePage></AboutePage>
        },
        {
          path:'projects',
          element:<OurProjects></OurProjects>
        },
        {
          path:'contact',
          element:<ContactUs></ContactUs>
        }
      ]
    }
  ]);