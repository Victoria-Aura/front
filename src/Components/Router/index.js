import Home from '../../Pages/Home';
import Error from '../../Pages/Error';
import News from '../../Pages/News';
 
export const router = [
    {path:'/',element:<Home />},
    {path:'*',element:<Error />},
    {path:'/News',element:<News />}
]