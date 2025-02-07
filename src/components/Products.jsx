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
    <section id="products">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold">
          Our <span className="text-orange-600">Products</span>
        </h1>
        <img
          src="/images/underline-black.svg"
          alt="underline-img"
          className="w-[200px]"
        />
        <p className="text-neutral-700 text-sm px-4">
          Explore our range of premium products designed for your needs.
        </p>
      </div>

      <div className="flex items-center justify-center">
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
        <div>
          <p className="text-center text-gray-500 mt-5">No products found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-5 transition-all duration-500 px-5 md:px-0">
          {displayProduct.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-300 p-5 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full md:h-[200px] h-[250px] rounded-3xl object-fill transition-transform duration-300 hover:scale-110 hover:rotate-2"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col gap-3 items-center mt-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {product.name}
                </h2>

                <div className="flex items-center gap-2">
                  <p className="text-2xl text-green-600 font-extrabold">
                    ₹{product.price}.00
                  </p>
                  <p className="text-md text-red-500 font-bold line-through">
                    ₹{product.price + 25}
                  </p>
                </div>

                <div className="flex">{Star(product.rating)}</div>

                <button
                  className="mt-3 bg-orange-500 text-white py-2 px-5 rounded-full font-semibold shadow-md hover:bg-orange-600 hover:scale-105 transition-all duration-300"
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
        <div className="flex gap-5 items-center justify-center mt-5">
          <button
            className="bg-neutral-200 hover:bg-orange-600 rounded-full h-[40px] w-[40px] flex items-center justify-center text-black hover:text-white hover:scale-105 transition-all duration-300"
            onClick={prev}
            disabled={currentPage === 0}
          >
            <FaAngleLeft className="hover:scale-110 transition-all duration-300 h-7 w-7" />
          </button>
          <button
            className="bg-neutral-200 hover:bg-orange-600 rounded-full h-[40px] w-[40px] flex items-center justify-center text-black hover:text-white hover:scale-105 transition-all duration-300"
            onClick={next}
            disabled={currentPage === totalPages - 1}
          >
            <FaAngleRight className="hover:scale-110 transition-all duration-300 h-7 w-7" />
          </button>
        </div>
      )}
    </section>
  );
}

export default Products;
