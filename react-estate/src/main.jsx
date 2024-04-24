import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login/login.jsx';
import SignUp from './Signup/signup.jsx';
import Properties from './Properties/properties.jsx';
import NeedHelp from './NeedHelp/needhelp.jsx';
import HomeOYO from './NeedHelp/homeOYO.jsx';
import BuyingYH from './NeedHelp/buyingYH.jsx';
import BeyondC from './NeedHelp/beyondC.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "properties",
    element: <Properties />,
  },
  {
    path: "needhelp",
    element: <NeedHelp />,
  },
  {
    path: "homeOYO",
    element: <HomeOYO />,
  },
  {
    path: "buyingYH",
    element: <BuyingYH />,
  },
  {
    path: "beyondC",
    element: <BeyondC />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
