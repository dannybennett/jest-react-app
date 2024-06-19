import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Images from './Images.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    }, {
        path: "/images",
        element: <Images />
    }
]);

// removed strict mode tags to prevent double api calling
ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
