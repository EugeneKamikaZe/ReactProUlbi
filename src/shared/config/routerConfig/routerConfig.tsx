// const AppRoutes = {
//     MAIN: 'main',
//     ABOUT: 'about'
// } as const;

import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/Main";
import {AboutPage} from "pages/About";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />
    },
}
