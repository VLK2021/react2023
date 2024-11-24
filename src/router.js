import {createBrowserRouter, Navigate} from "react-router-dom";

import {MaineLayout} from "./layouts";
import {MainePage} from "./pages";


const router = createBrowserRouter([
    {
        path: '/', element: <MaineLayout/>, children: [
            {index: true, element: <Navigate to={'/maine'}/>},
            {path: '/maine', element: <MainePage/>},
        ]
    },
]);

export {
    router
}