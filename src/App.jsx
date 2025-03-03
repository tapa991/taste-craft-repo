import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RecipePage from './pages/Recipe'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <RecipePage/>;
}

export default App
