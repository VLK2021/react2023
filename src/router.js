import {createBrowserRouter, Navigate} from "react-router-dom";

import {AuthLayout, MaineLayout, PublicLayout} from "./layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";


const router = createBrowserRouter([
    {path:'', element:<MaineLayout/>, children: [
            {index:true, element:<Navigate to={'login'}/>},
            {
                element: <PublicLayout/>, children: [
                    {path: 'login', element: <LoginPage/>},
                    {path: 'register', element: <RegisterPage/>}
                ]
            },

            {
                element: <AuthLayout/>, children: [
                    {path: 'cars', element: <CarsPage/>}
                ]
            }
        ]}
]);

export {
    router
}