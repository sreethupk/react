import React from "react";
import "./Category.css";

const Category = () => {
  const categories = [
    { id: 1, name: "Bags", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3" },
    { id: 2, name: "Shoes", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
    { id: 2, name: "Shoes", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },

  ];

  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <img src={cat.img} alt={cat.name} />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
