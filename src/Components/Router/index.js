import Home from '../../Pages/Home';
import Error from '../../Pages/Error';
import News from '../../Pages/News';
import AboutUsPage from '../../Pages/AboutUs';
 
export const router = [
    {path:'/',element:<Home />},
    {path:'*',element:<Error />},
    {path:'/News',element:<News />},
    {path:'/AboutUs',element:<AboutUsPage />}
]