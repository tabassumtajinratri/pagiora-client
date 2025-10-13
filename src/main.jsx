import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProviders from './Components/Providers/AuthProviders';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
  </React.StrictMode>,
)
