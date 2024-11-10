import {createBrowserRouter, Navigate} from "react-router-dom";

import {MaineLayout, PublicLayout} from "./layouts";
import HomePageContainer from "./pages/HomePageContainer/HomePageContainer";


const router = createBrowserRouter([
    {path: '/', element: <MaineLayout/>, children: [
            {index: true, element: <Navigate to={'/home'}/>},
            {
                element: <PublicLayout/>, children: [
                    {path: '/home', element: <HomePageContainer/>}

                ]
            }

        ]}
]);

export {
    router
}