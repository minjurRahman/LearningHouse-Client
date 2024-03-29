import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import CourseDetails from "../Pages/CourseDetails";
import Categories from "../Pages/Categories";
import ErrorPage from "../Pages/ErrorPage";
import Courses from "../Pages/Courses";
import Faq from "../Pages/Faq";
import Blog from "../Pages/Blog";
import Register from "../Login/Register";
import Login from "../Login/Login";
import PrivateRoute from "./PrivateRoute";
import TermsAndCondition from "../Pages/TermsAndCondition";
import Profile from "../Pages/Profile";
// import Profile from "../Pages/Profile";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
  
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/courses-category',
                element: <Categories></Categories>,
               
            },
            {
                path: '/category/:id',
                element: <Courses></Courses>,
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-minjurrahman.vercel.app/category/${params.id}`),
            },
            {
                path:'/courses-details/:id', //news/:id
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-minjurrahman.vercel.app/course/${params.id}`)
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path:'/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
]) 