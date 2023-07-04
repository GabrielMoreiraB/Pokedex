import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import PokemonPage from './pages/PokemonPage'
import SearchPage from './pages/SearchPage'
import { PokemonProvider } from './context/PokemonContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/pokemon/:id',
        element: <PokemonPage/>
      },
      {
        path: '/search',
        element: <SearchPage/>
      }
    ]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <PokemonProvider>
        <RouterProvider router={router} />
      </PokemonProvider>
  </React.StrictMode>,
)
