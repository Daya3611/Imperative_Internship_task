import React from "react";
import { Link } from "react-scroll";
import { toast } from "react-toastify";

function Hero() {
  const notify = () => toast.info("Wow so easy!");
  return (
    <section className="flex flex-col md:flex-row justify-between items-center p-4">
      <div className="flex flex-col justify-center items-center text-center md:text-start md:items-start">
        <h2 className="text-4xl md:text-5xl px-3 font-bold">
        Shop Smart, <span className="text-orange-600">Live Better!</span>
        </h2>
        <p className="text-md px-3 italic">Discover top deals, latest trends, and unbeatable prices—all in one place.</p>
        <Link to="products" smooth={true} duration={500}>
        <button
          className="bg-orange-600 text-white px-5 md:ml-3 py-2 rounded-full mt-4 hover:bg-orange-700"
          // onClick={notify}
          
        >
          Shop Now
        </button>
        </Link>
      </div>
      <div className="mt-6 md:mt-0">
        <img
          src="/images/hero.png"
          alt="Online Shopping"
          className="w-full max-w-md md:max-w-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
