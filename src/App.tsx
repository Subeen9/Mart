import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Shop from './pages/Shop.tsx'
import Navbar from './components/Navbar.tsx'
import { useContext } from 'react'
import { ThemeContext } from './context/context.tsx'
function App() {
  const themeContext = useContext(ThemeContext)
  if (!themeContext) {
    return <div>Theme context not available</div>
  }
  const { theme, toggleTheme } = themeContext

  return (
    <>
    <div className={theme === 'light' ? 'bg-light text-dark min-vh-100': 'bg-dark text-light min-vh-100'}>
<div>
  <button onClick={toggleTheme} className='btn btn-primary'>Toggle</button>
</div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />

      </Routes>
      </div>
    </>
  )
}

export default App
