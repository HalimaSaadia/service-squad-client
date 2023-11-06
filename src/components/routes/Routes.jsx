import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddService from "../pages/AddService/AddService";
import Services from "../pages/Services/Services";
import ServiceDetails from "../pages/ServiceDeatls/ServiceDetails/ServiceDetails";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
import ManageServices from "../pages/MangeServices/ManageServices";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/service-details/:id",
                element: <ServiceDetails />,
                loader:  ({params}) => axios.get(`http://localhost:5000/api/v1/service/${params.id}`, {withCredentials: true})
            },
            {
                path: "/add-service",
                element: <AddService />
            },
            {
                path: "/my-services",
                element: <ManageServices />,
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path:"/register",
                element: <Register />
            }
        ]
    }
    
])
export default router