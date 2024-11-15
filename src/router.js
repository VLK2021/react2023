import {createBrowserRouter, Navigate} from "react-router-dom";
import {MaineLayout, PublicLayout} from "./layouts";
import {Home, Posts, Users} from "./components";


const router = createBrowserRouter([
    {path: '/', element: <MaineLayout/>, children: [
            {index: true, element: <Navigate to={'/home'}/>},
            {
                element: <PublicLayout/>, children: [
                    {path: '/home', element: <Home/>},
                    {path: '/users', element: <Users/>},
                    {path: '/posts', element: <Posts/>},
                ]
            }
        ]}
]);

export {
    router
}