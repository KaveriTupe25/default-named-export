import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './View/Home/Home';
import About from './View/About/About';
import Contact from './View/Contact/Contact';

const router = createBrowserRouter([{
        path: '/',
        element: < Home / >
    },
    {
        path: '/about',
        element: < About / >
    },
    {
        path: '/contact',
        element: < Contact / >
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( <
    >
    <
    RouterProvider router = { router }
    /> < /
    >
);