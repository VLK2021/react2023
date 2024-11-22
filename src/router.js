import {createBrowserRouter, Navigate} from "react-router-dom";

import {MaineLayout} from "./layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";
import {RequiredAuth} from "./hoc";


const router = createBrowserRouter([
    {path: '/', element: <MaineLayout/>, children: [
            {index: true, element: <Navigate to={'cars'}/>},
            {path: 'cars', element: <RequiredAuth><CarsPage/></RequiredAuth>},
            {path: 'login', element: <LoginPage/>},
            {path: 'register', element: <RegisterPage/>}
        ]}
]);

export {
    router
}