import React from "react";
import "./Featured.css";

const Featured = () => {
  const products = [
    { id: 1, name: "Leather Bag", price: "$49", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3" },
    { id: 2, name: "Sneakers", price: "$59", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
    { id: 3, name: "Wrist Watch", price: "$79", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
  ];

  return (
    <section className="featured">
      <h2>Featured Products</h2>
      <div className="featured-grid">
        {products.map((product) => (
          <div className="featured-card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Shop Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
