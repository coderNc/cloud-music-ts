import { useState, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
// import './App.css'
import AppHeader from './components/app-header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </>
  )
}

export default App
