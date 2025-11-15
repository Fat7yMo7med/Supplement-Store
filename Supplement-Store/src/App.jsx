import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'

function App() {

  let Paths = createBrowserRouter([
    {path: '', element: <Layout />, children: [
      {index: true, element: <Home /> },
      {path: 'login', element: <Login /> },
      {path: 'register', element: <Register /> },
      { path: '*', element: <NotFound /> },
      ]
    }])

  return (
    <>
      <RouterProvider router={Paths}></RouterProvider>
    </>
  )
}

export default App
