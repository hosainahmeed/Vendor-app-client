import { createBrowserRouter } from 'react-router-dom'
import MainLayOut from '../layout/MainLayOut'
import Home from '../pages/LandingPage/Home'


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])
export default router