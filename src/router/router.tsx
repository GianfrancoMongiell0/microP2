import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import PrincipalPage from "../pages/PrincipalPage/PrincipalPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import HomePage from "../pages/HomePage/HomePage"
import RegisterPage from "../pages/RegisterPage/RegisterPage"

export const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [ 
        
        {path: '', element: <PrincipalPage />},
        {path: 'login', element: <LoginPage />},
        {path: 'home', element: <HomePage />},
        {path: 'register', element: <RegisterPage />}
    ]
}]
)