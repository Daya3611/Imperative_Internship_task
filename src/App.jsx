import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import { ToastContainer } from 'react-toastify'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <Header/>
      <Hero/>
      <Products/>
      <Footer/>

      <ToastContainer />
    </section>
  )
}

export default App
