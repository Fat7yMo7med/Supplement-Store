import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import Layout from './components/Layout/Layout'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Coaches from './components/Coaches/Coaches'
import Equipments from './components/Equipments/Equipments'
import Store from './components/Store/Store'
import EquipmentsDetails from './components/EquipmentsDetails/EquipmentsDetails'
import ProductDetails from './components/ProductDetails/ProductDetails'
import CoachDetails from './components/CoachDetails/CoachDetails'
import UserContextProvider from './Context/UserContext'

function App() {

  const router = createBrowserRouter([
    {
      path: '', 
      element: <Layout />, 
      children: [
        { index: true, element: <Home/> },
        { path: 'login', element: <Login/> },
        { path: 'register', element: <Register/> },
        { path: 'aboutUs', element: <AboutUs/> },
        { path: 'coaches', element: <Coaches/> },
        { path: 'coach/:id', element: <CoachDetails/> },
        { path: 'equipments', element: <Equipments/> },
        { path: 'store', element: <Store /> },
        { path: 'equipmentsDetails', element: <EquipmentsDetails/> },
        { path: 'productDetails', element: <ProductDetails/> },
        { path: '*', element: <NotFound/> },
      ]
    }
  ])

  return (
    <>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
      
    </>
  )
}

export default App