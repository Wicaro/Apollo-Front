import React from "react";
import { BrowserRouter, createBrowserRouter, Route } from "react-router-dom";
import App from "../../App";
import MaintenanceScreen from "../../Interface/Screens/MaintenanceScreen";
import NotFoundScreen from "../../Interface/Screens/NotFoundScreen";

// createBrowserRouter é uma função que retorna um objeto do tipo Router
// que contém as rotas da aplicação.
// É uma alternativa ao componente BrowserRouter padrão.
export const routes = createBrowserRouter([
    {
        // A rota raiz da aplicação
        path: "/",
        // O componente que será renderizado quando a rota for acessada
        element: <App></App>,
    },
    {
        path: "*",
        element: <NotFoundScreen></NotFoundScreen>
    },
    {
        path: "/maintenance",
        element: <MaintenanceScreen></MaintenanceScreen>
    }
]);