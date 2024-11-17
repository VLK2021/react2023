import {createBrowserRouter, Navigate} from "react-router-dom";

import {MaineLayout} from "./layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";


const router = createBrowserRouter([
    {path: '/', element: <MaineLayout/>, children: [
            {index: true, element: <Navigate to={'cars'}/>},
            {path: 'cars', element: <CarsPage/>},
            {path: 'login', element: <LoginPage/>},
            {path: 'register', element: <RegisterPage/>}
        ]}
]);

export {
    router
}