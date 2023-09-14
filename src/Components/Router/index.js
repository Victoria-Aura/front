import HomePage from '../../Pages/HomePage';
import ErrorPage from '../../Pages/ErrorPage';
import NewsPage from '../../Pages/NewsPage';
import AboutUsPage from '../../Pages/AboutUsPage';
 
export const router = [
    {path:'/',element:<HomePage />},
    {path:'*',element:<ErrorPage />},
    {path:'/News',element:<NewsPage />},
    {path:'/AboutUs',element:<AboutUsPage />},
]