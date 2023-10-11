import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../HomePage/Home/Home";
import WeddingCardDetails from "../HomePage/WeddingCardDetails/WeddingCardDetails";
import Login from "../HomePage/Login/Login";
import Register from "../HomePage/Register/Register";
import OurServices from "../Components/OurServices/OurServices";
import Beauty from "../Components/OurServices/Beauty/Beauty";
import WeddingFlower from "../Components/OurServices/WeddingFlower/WeddingFlower";
import WeddingCake from "../Components/OurServices/WeddingCake/WeddingCake";
import BlogPage from "../Components/BlogPage/BlogPage";
import ErrorPage from "../Components/ErrorPage/ErrorPage";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/weddingPlanner/:id',
                element: <WeddingCardDetails></WeddingCardDetails>,
                loader: () => fetch("../WeddingData.json")
            },
            {
                path:'/ourServices',
                element: <OurServices></OurServices>
            },
            {
                path: '/blogPage',
                element: <BlogPage></BlogPage>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/makeUp',
                element: <Beauty></Beauty>
            },
            {
                path: '/weddingFlower',
                element: <WeddingFlower></WeddingFlower>
            },
            {
                path: '/weddingCake',
                element: <WeddingCake></WeddingCake>
            }
        ]
    }
])

export default Router;