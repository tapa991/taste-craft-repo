import { useState } from 'react'

// importing functions from react-router-dom for page navigation
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RecipePage from './pages/Recipe'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/Login'
import SignupPage from './pages/Signup'
import ProfilePage from './pages/ProfilePage'
import UploadPage from './pages/UploadPage'
import PostPage from './pages/PostPage'
import Searched from './pages/Searched'
import EditProfilePage from './pages/EditProfile'

// define the routes in the application and store return value in router const
// pass array of javascript objects '{}', each object defines one route
  const router = createBrowserRouter([
  { path: '/', element: <HomePage/> },
  { path: '/recipe/:id', element: <RecipePage /> }, // Add :id to make this dynamic
  { path: '/searched/:query', element: <Searched /> },  // Define the search route
  { path: '/login', element: <LoginPage/>},
  { path: '/signup', element: <SignupPage/>},
  { path: '/profile', element: <ProfilePage/>},
  { path: '/upload', element: <UploadPage/>},
  { path: '/post/:id', element: <PostPage/>},
  { path: 'editprofile', element: <EditProfilePage/>}
  ]);

  function App() {
  // the router prop 'router=' is fed the router variable '{router}'
    return <RouterProvider router={router}/>
  
  
}

export default App
