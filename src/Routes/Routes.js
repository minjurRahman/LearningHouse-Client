import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import CourseDetails from "../Pages/CourseDetails";
import Categories from "../Pages/Categories";
import ErrorPage from "../Pages/ErrorPage";
import Courses from "../Pages/Courses";
import Faq from "../Pages/Faq";
import Blog from "../Pages/Blog";

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
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
            },
            {
                path:'/courses-details/:id', //news/:id
                element: <CourseDetails></CourseDetails>
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