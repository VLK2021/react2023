import {createBrowserRouter} from "react-router-dom";

import {MaineLayout} from "./layouts";


const router = createBrowserRouter([
    {path: '/', element: <MaineLayout/>, children: [

        ]}
]);

export {
    router
}