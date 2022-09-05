import { HomeIcon, MenuIcon } from '@heroicons/react/outline';
import * as React from 'react';

export const useNavigationMenu = () => {
    return [
        { name: 'Dashboard', to: '.', icon: HomeIcon },
        { name: 'Sample', to: './Sample', icon: MenuIcon},
        // IMPORT MENU ITEMS
    ].filter(Boolean);
};
