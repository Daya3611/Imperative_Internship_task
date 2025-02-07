import React from "react";
import Products, { ProductData } from "./Products";
// Adjust the path as necessary

function Filter({
  category,
  setCategory,
  priceRange,
  setPriceRange,
  sortOrder,
  setSortOrder,
}) {
  const categoryList = [
    "All",
    ...new Set(ProductData.map((item) => item.category)),
  ];
  const priceRanges = [
    {
      label: "All",
      range: [0, Infinity],
    },
    {
      label: "under 100",
      range: [0, 100],
    },
    {
      label: "100 - 300",
      range: [100, 300],
    },
    {
      label: "300 - 500",
      range: [300, 500],
    },
    {
      label: "500 - 1000",
      range: [500, 1000],
    },
    {
      label: "1000 - 2000",
      range: [1000, 5000],
    },
  ];
  return (
    <section>
      <div className="flex flex-wrap gap-5 mt-5 items-center justify-center">
        <select
          className="p-2 rounded-xl border border-neutral-300"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          {categoryList.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>

        <select
          className="border border-neutral-300 p-2 rounded-xl"
          onChange={(e) =>
            setPriceRange(
              priceRanges.find((p) => p.label === e.target.value)?.range || [
                0, 50000,
              ]
            )
          }
        >
          {priceRanges.map((p) => (
            <option key={p.label} value={p.label}>
              {p.label}
            </option>
          ))}
        </select>

        <select
          className="border border-neutral-300 p-2 rounded-xl"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
    </section>
  );
}

export default Filter;
