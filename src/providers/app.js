import * as React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {QueryClientProvider} from 'react-query';
import {Notifications} from 'components/Notifications/Notifications';
import {store} from 'store/configureStore';
import {Button, Spinner} from "@chakra-ui/react";
import {queryClient} from "lib/react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {HelmetProvider} from 'react-helmet-async';

const ErrorFallback = () => {
    return (
        <div
            className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
            role="alert"
        >
            <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
            <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
                Refresh
            </Button>
        </div>
    );
};


export const AppProvider = ({children}) => {
    return (
        <React.Suspense
            fallback={
                <div className="flex items-center justify-center w-screen h-screen">
                    <Spinner className={'text-white w-[150px] h-[150px] '} size="xl"/>
                </div>
            }
        >
            <Provider store={store}>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <HelmetProvider>
                        <QueryClientProvider client={queryClient}>
                            {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools/>}
                            <Notifications/>
                            <Router>{children}</Router>
                        </QueryClientProvider>
                    </HelmetProvider>
                </ErrorBoundary>
            </Provider>
        </React.Suspense>
    );
};
