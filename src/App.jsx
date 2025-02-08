import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { ToastContainer } from "react-toastify";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <Header />
      <div className="px-5 lg:px-[70px] mt-[75px]">
        <Hero />
        <Products />
        <Footer />
      </div>

      <ToastContainer />
    </section>
  );
}

export default App;
