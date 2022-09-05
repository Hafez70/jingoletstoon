import { useRoutes  } from 'react-router-dom';
import { protectedRoutes } from './protected.jsx';
import { publicRoutes } from './public.jsx';
import useAuth from "../features/auth/hooks/useAuth";
import {useMemo} from "react";

export const AppRoutes = () => {
    const {getUser, user} = useAuth();

    useMemo(() => {
        getUser()
    }, []);

    const routes = user ? protectedRoutes : publicRoutes;

    const element = useRoutes([...routes]);

    return <>{element}</>;
};
