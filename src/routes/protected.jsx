import { Suspense } from 'react';


import { MainLayout } from 'components/layout';
import {Spinner} from "@chakra-ui/react";
import {lazyImport} from "../utils/lazyImport";
import {Navigate, Outlet} from "react-router";
const { Dashboard } = lazyImport(() => import('features/misc'), 'Dashboard');
// LAZY ROUTE IMPORTS

const App = () => {
    return (
        <MainLayout>
            <Suspense
                fallback={
                    <div className="h-full w-full flex items-center justify-center">
                        <Spinner size="xl" />
                    </div>
                }>
                <Outlet />
            </Suspense>
        </MainLayout>
    );
};

export const protectedRoutes = [
    {
        path: '/',
        element: <App/>,
        children: [
            { index: true, element: <Dashboard /> },
            { path: '/sample', element: <></> },
            { path: '*', element: <Navigate to="." /> },
            // OBJ ROUTES IMPORTS
        ],
    },
];
