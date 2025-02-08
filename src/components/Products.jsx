import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { toast } from "react-toastify";
import Filter from "./Filter";

function Products() {
  const Star = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-500"}
        >
          <IoIosStar />
        </span>
      );
    }
    return stars;
  };

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = window.innerWidth < 750 ? 1 : 5;
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("/data/ProductData.json")
      .then((response) => {
        if (!response.ok) {
          toast.error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => toast.error("Error loading products:", error));
  }, []);

  let filteredProducts = products.filter((product) => {
    return (
      (category === "All" || product.category === category) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    );
  });

  if (sortOrder === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const displayProduct = filteredProducts.slice(
    currentPage * productsPerPage,
    currentPage * productsPerPage + productsPerPage
  );

  const next = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const detailsbtn = () =>
    toast.info("This function has not been developed yet.");

  return (
    <section id="products" className="py-12 bg-white">
      <div className="text-center mb-3">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Our <span className="text-orange-600">Products</span>
        </h1>
        <img
          src="/images/underline-black.svg"
          alt="underline-img"
          className="w-[200px] mx-auto mt-2"
        />
        <p className="text-neutral-600 text-md mt-3 max-w-2xl mx-auto">
          Discover our exclusive range of premium products tailored to your
          needs.
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <Filter
          productData={products}
          category={category}
          setCategory={setCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-5">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-6">
          {displayProduct.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 py-4 px-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 "
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full md:h-[200px] h-[250px] rounded-2xl object-fill transition-transform duration-300 hover:scale-110 hover:rotate-3"
                  loading="lazy"
                />
              </div>

              <div className="text-center mt-4">
                <h2 className="text-xl font-bold text-gray-900">
                  {product.name}
                </h2>

                <div className="flex justify-center items-center gap-2 mt-2">
                  <p className="text-2xl text-green-600 font-extrabold">
                    ₹{product.price}.00
                  </p>
                  <p className="text-md text-red-500 font-bold line-through">
                    ₹{product.price + 25}
                  </p>
                </div>

                <div className="flex justify-center mt-2">
                  {Star(product.rating)}
                </div>

                <button
                  className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-orange-600 hover:scale-105 transition-all duration-300"
                  onClick={detailsbtn}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex gap-5 items-center justify-center mt-8">
          <button
            className="bg-neutral-200 hover:bg-orange-600 rounded-full h-[45px] w-[45px] flex items-center justify-center text-black hover:text-white hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={prev}
            disabled={currentPage === 0}
          >
            <FaAngleLeft className="h-6 w-6" />
          </button>
          <span className="text-lg font-semibold text-gray-700">
            {currentPage + 1} of {totalPages}
          </span>
          <button
            className="bg-neutral-200 hover:bg-orange-600 rounded-full h-[45px] w-[45px] flex items-center justify-center text-black hover:text-white hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={next}
            disabled={currentPage === totalPages - 1}
          >
            <FaAngleRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}

export default Products;
