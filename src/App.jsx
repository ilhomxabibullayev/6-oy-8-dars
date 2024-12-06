import './App.css'
import { NavLink } from 'react-router'
import Footer from './components/Footer'
import Navbar from './components/Navabr'
import Home from './pages/Home'
import Router from './router'

function App() {

  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  )
}

export default App
