import React from 'react'
import ReactDOM from 'react-dom/client'
import Inicio from './pages/PrincipalPage/PrincipalPage.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'
//import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Inicio />
  </React.StrictMode>,
)

