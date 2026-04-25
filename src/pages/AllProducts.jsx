import React from "react";
import ProductCard from "../components/ProductCard";

import Image1 from "../assets/dreamcatchers.jpg";
import Image2 from "../assets/clay-pot.jpg";
import Image3 from "../assets/key-tags.jpg";
import Image4 from "../assets/bags.jpg";

function AllProducts() {
  const products = [
    {
      id: 1,
      name: "Handmade Dreamcatcher",
      price: "2,500",
      artist: "Nimali Apsara",
      image: Image1,
    },
    {
      id: 2,
      name: "Clay Flower Vase",
      price: "1,800",
      artist: "Saman Kumara",
      image: Image2,
    },
    {
      id: 3,
      name: "Wooden Keytag",
      price: "450",
      artist: "Nethmi Pabasara",
      image: Image3,
    },
    {
      id: 4,
      name: "Hand-painted Tote Bag",
      price: "2,000",
      artist: "Sadun Ekanayake",
      image: Image4,
    },
    {
      id: 5,
      name: "Traditional Mask",
      price: "4,500",
      artist: "Gunapala",
      //   image: "https://placeholder.com",
    },
    {
      id: 5,
      name: "Clay Pot Set",
      price: "2,200",
      artist: "Soma",
      //   image: "https://placeholder.com",
    },
    {
      id: 6,
      name: "Handmade Necklace",
      price: "1,500",
      artist: "Nimali",
      //   image: "https://placeholder.com",
    },
    {
      id: 6,
      name: "Woven Basket",
      price: "3,000",
      artist: "Kamal",
      //   image: "https://placeholder.com",
    },
  ];

  return (
    <div className="all-products best-sellers">
      <h2 className="section-title">All Products</h2>

      <div className="all-products__container">
        <div className="product-grid">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              artist={item.artist}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
