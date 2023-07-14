import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">{useRoutes(routes)}</div>
    </>
  )
}

export default App
