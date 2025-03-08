import { useState } from 'react'

// importing functions from react-router-dom for page navigation
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RecipePage from './pages/Recipe'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/Login'
import RecipeSearchPage from './pages/Search'
import SignupPage from './pages/Signup'

// define the routes in the application and store return value in router const
// pass array of javascript objects '{}', each object defines one route
const router = createBrowserRouter([
 { path: '/', element: <HomePage/> },
 { path: '/recipe', element: <RecipePage/>},
 { path: '/search', element: <RecipeSearchPage/>},
 { path: '/login', element: <LoginPage/>},
 { path: '/signup', element: <SignupPage/>}
]);

function App() {
  // the router prop 'router=' is fed the router variable '{router}'
  return <RouterProvider router={router}/>
}

export default App
