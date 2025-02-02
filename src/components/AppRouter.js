import React from 'react';
import {Routes, Route} from "react-router-dom"
import {publicRoutes} from "../routes";
import Shop from "../pages/Shop";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>

            )}
            <Route
                path="*"
                element={<Shop/>}/>
        </Routes>
    );
};

export default AppRouter;