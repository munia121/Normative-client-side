import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import HomePage from "../Pages/HomePage/HomePage";
import AboutePage from "../Pages/aboute/AboutePage";
import OurProjects from "../Pages/OurProjects/OurProjects";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/LoggedIn/Login";
import SignUp from "../Pages/SingUp/SignUp";
import Dashboard from "../MainLayOut/Dashboard";
import DashboardHome from "../Pages/DashboardPages/DashboardHome";
import AllUser from "../Pages/DashboardPages/AdminPage/AllUser";
import AddBanner from "../Pages/DashboardPages/AdminPage/AddBanner";
import AllBanners from "../Pages/DashboardPages/AdminPage/AllBanners";
import MyProfile from "../Pages/DashboardPages/UserPage/MyProfile";
import PrivateRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: 'about',
        element: <AboutePage></AboutePage>
      },
      {
        path: 'projects',
        element: <PrivateRoute><OurProjects></OurProjects></PrivateRoute>
      },
      {
        path: 'contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    errorElement: '',
    children: [
      {
        path: '/dashboard',
        element: <DashboardHome></DashboardHome>
      },
      {
        path: 'alluser',
        element: <AllUser></AllUser>
      },
      {
        path: 'addbanner',
        element: <AddBanner></AddBanner>
      },
      {
        path: 'allbanner',
        element: <AllBanners></AllBanners>
      },
      {
        path: 'myprofile',
        element: <MyProfile></MyProfile>
      }

    ]
  }
]);