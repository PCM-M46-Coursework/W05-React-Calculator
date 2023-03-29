import React from 'react';
import ReactDOM from 'react-dom/client';

// Site-Wide CSS
import '~/styles/reset.css';
import '~/styles/theme.css';

// App Settings
import AppSettings from './AppSettings';

// Page Imports
import { NotFound } from './navigation/_ErrorPages';

// Routing
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {AppSettings.routes.map((r, index) =>
            {
                const Page = require(`@pages/${r.page}`).default;
                return (<Route key={index} strict path={r.path} element={<Page />} />);
            })}
            <Route path="*" element={<NotFound />} />
        </Route>
    ), { basename: AppSettings[process.env.NODE_ENV || 'development'].GH_ROOT }
);

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );