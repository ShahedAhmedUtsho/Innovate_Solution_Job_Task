import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/Routes';
import Home from './Pages/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    children:[
      {
        path: "/",
        element: <Home />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
