import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/Routes';
import Home from './Pages/Home/Home';
import Flight from './Pages/flight/Flight';
import FlightSearch from './Pages/flight/FlightSearch';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    children:[
      {
        path: "/",
        element: <Home />
      },{
        path: "/flight",
        element: <Flight /> , 
        children:[
          {
            path: "search",
            element: <FlightSearch />
          }
        ]
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
