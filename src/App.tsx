import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Shop from './pages/Shop.tsx'
import Navbar from './components/Navbar.tsx'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />

      </Routes>
    </>
  )
}

export default App
