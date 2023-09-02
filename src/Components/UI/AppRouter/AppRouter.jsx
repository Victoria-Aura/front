import React from 'react';

import { Route,Routes } from 'react-router-dom';

import { router } from '../../Router';


const AppRouter = () => {
    return (
        <Routes>
            {router.map(route => 
                <Route element={route.element} path={route.path} />
            )}
        </Routes>
    );
};

export default AppRouter;