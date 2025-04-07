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

// define the routes in the application and store return value in router const
// pass array of javascript objects '{}', each object defines one route
  const router = createBrowserRouter([
  { path: '/', element: <HomePage/> },
  { path: '/recipe', element: <RecipePage/>},
  { path: '/searched/:query', element: <Searched /> },  // Define the search route
  { path: '/login', element: <LoginPage/>},
  { path: '/signup', element: <SignupPage/>},
  { path: '/profile', element: <ProfilePage/>},
  { path: '/upload', element: <UploadPage/>},
  { path: '/post/:id', element: <PostPage/>}
  ]);
  function Layout() {
    return (
      <>
        <header>
          <h1 style={{ textAlign: 'center', margin: '1rem 0', color: '#fff' }}>TasteCraft</h1>
          <SearchBar />
        </header>
        <main>
          <Outlet /> {/* this renders the page-specific component */}
        </main>
      </>
    );
  }
function App() {
  // the router prop 'router=' is fed the router variable '{router}'
  return <RouterProvider router={router}/>
  
  
}

export default App
// import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import React from 'react';
// import './App.css';

// import RecipePage from './pages/Recipe';
// import HomePage from './pages/HomePage';
// import LoginPage from './pages/Login';
// import SignupPage from './pages/Signup';
// import ProfilePage from './pages/ProfilePage';
// import UploadPage from './pages/UploadPage';
// import PostPage from './pages/PostPage';
// import Searched from './pages/Searched';

// import SearchBar from './components/SearchBar'; // Make sure this exists

// // ✅ Layout shown on all pages
// function Layout() {
//   return (
//     <>
//       <header>
//         <h1 style={{ textAlign: 'center', margin: '1rem 0', color: '#fff' }}>TasteCraft</h1>
//         <SearchBar />
//       </header>
//       <main>
//         <Outlet />
//       </main>
//     </>
//   );
// }

// // ✅ Define routes using Layout as the root
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />, // This wraps all pages below
//     children: [
//       { index: true, element: <HomePage /> },
//       { path: 'recipe', element: <RecipePage /> },
//       { path: 'searched/:query', element: <Searched /> },
//       { path: 'login', element: <LoginPage /> },
//       { path: 'signup', element: <SignupPage /> },
//       { path: 'profile', element: <ProfilePage /> },
//       { path: 'upload', element: <UploadPage /> },
//       { path: 'post/:id', element: <PostPage /> }
//     ]
//   }
// ]);

// // ✅ App renders RouterProvider
// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
