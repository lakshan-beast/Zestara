import React from "react";
import ProductCard from "../components/ProductCard";
import Image1 from "../assets/";

function Home() {
  // best Sellers array
  const bestSellers = [
    {
      id: 1,
      name: "Handmade Dreamcatcher",
      price: "2,500",
      artist: "Nimali Apsara",
      image: "Image1",
    },
    {
      id: 2,
      name: "Clay Flower Vase",
      price: "1,800",
      artist: "Nimali Apsara",
      image: "Image1",
    },
    {
      id: 3,
      name: "Wooden Keytag",
      price: "450",
      artist: "Nimali Apsara",
      image: "Image1",
    },
    {
      id: 4,
      name: "Hand-painted Tote Bag",
      price: "2,000",
      artist: "Nimali Apsara",
      image: "Image1",
    },
  ];

  return (
    // home section
    <div className="home">
      <section className="hero">
        <div className="hero__content">
          <h1>Handmade with Love, Just for You</h1>
          <p>
            Support local artist & find beautiful, unique crafts for your home &
            lifestyle. Simple. Authentic. Sri Lanka.
          </p>
          <button type="button" className="hero__btn">
            View All Crafts
          </button>
        </div>
      </section>

      {/* best sellers section */}
      <section className="best-sellers">
        <h2>Best Sellers</h2>

        <div className="product-grid">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              artist={product.artist}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
