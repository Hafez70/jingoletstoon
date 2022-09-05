import * as React from 'react';

export const LandingBackground = ({ children ,className}) => {

    return (
        <div className={"twc-bg-landing " + className }>
                {children}
        </div>
    );
};
