import Home from '../../Pages/Home';
import Error from '../../Pages/Error';

 
export const router = [
    {path:'/',element:<Home />},
    {path:'*',element:<Error />}
]