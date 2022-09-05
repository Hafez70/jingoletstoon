
import React from 'react';
import {lazyImport} from "utils/lazyImport";

const { AuthRoutes } = lazyImport(() => import('features/auth'),'AuthRoutes');
// LAZY ROUTE IMPORTS

export const publicRoutes = [
    {
        path: '/*',
        element: <AuthRoutes />,
        children: [
            // OBJ ROUTES IMPORTS
        ],
    },
];
