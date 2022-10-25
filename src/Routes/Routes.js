import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import CourseDetails from "../Pages/CourseDetails";
import Categories from "../Pages/Categories";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/category/:id',
                element: <Categories></Categories>
            },
            {
                path:'/courses/:id', //news/:id
                element: <CourseDetails></CourseDetails>
            }
        ]
    }
]) 