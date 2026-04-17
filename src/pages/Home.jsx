import React from "react";

import ProductCard from "../components/ProductCard";
import ServiceCard from "../components/ServiceCard";
import CategoryCard from "../components/CategoryCard";

import { FiTruck, FiAward, FiShield } from "react-icons/fi";

import Image1 from "../assets/dreamcatchers.jpg";
import Image2 from "../assets/clay-pot.jpg";
import Image3 from "../assets/key-tags.jpg";
import Image4 from "../assets/bags.jpg";

import HomeDecor from "../assets/home-decor.jpg";
import Accessories from "../assets/accessories.jpg";
import Art from "../assets/art.jpg";

function Home() {
  // best Sellers array
  const bestSellers = [
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
      artist: "Nimali Apsara",
      image: Image2,
    },
    {
      id: 3,
      name: "Wooden Keytag",
      price: "450",
      artist: "Nimali Apsara",
      image: Image3,
    },
    {
      id: 4,
      name: "Hand-painted Tote Bag",
      price: "2,000",
      artist: "Nimali Apsara",
      image: Image4,
    },
  ];

  // services
  const services = [
    {
      icon: <FiTruck />,
      title: "Free Shipping",
      description: "On all orders over LKR 5,000/=",
    },
    {
      icon: <FiAward />,
      title: "100% Authentic",
      description: "Directly from local Sri Lankan artists.",
    },
    {
      icon: <FiShield />,
      title: "Secure Payments",
      description: "Safe transactions & Cash on Delivery.",
    },
  ];

  const categories = [
    {
      id: 1,
      title: "Home Decor",
      image: HomeDecor,
    },
    {
      id: 2,
      title: "Accessories",
      image: Accessories,
    },
    {
      id: 3,
      title: "Traditional Art",
      image: Art,
    },
  ];

  return (
    <div className="home">
      {/* home section */}
      <section className="hero">
        <div className="hero__content">
          <h1 data-aos="fade-left">Handmade with Love, Just for You</h1>
          <p data-aos="fade-up">
            Support local artist & find beautiful, unique crafts for your home &
            lifestyle. Simple. Authentic. Sri Lanka.
          </p>
          <button type="button" className="hero__btn" data-aos="fade-up">
            View All Crafts
          </button>
        </div>
      </section>

      {/* best sellers section */}
      <section className="best-sellers" data-aos="fade-up">
        <h2 className="section-title">Best Sellers</h2>

        <div className="product-grid">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              artist={product.artist}
              price={product.price}
            />
          ))}
        </div>

        <button type="button">All Products</button>
      </section>

      {/* services section */}
      <section className="services" data-aos="fade-up">
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      <section className="categories" data-aos="fade-up">
        <h2 className="section-title">Browse by Catergory</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              image={category.image}
              title={category.title}
            />
          ))}
        </div>
      </section>

      <section className="artist-spolight" data-aos="fade-up">
        <div className="artist-spolight__container">
          <div className="artist-spolight__image">
            <img src="src/assets/artist.jpg" alt="Featured Artist" />
          </div>
          <div className="artist-spolight__info">
            <span className="badge">Featured Artist</span>
            <h2>Meet Piyal Karunarathne</h2>

            <p>
              I have been carving wood for over 30 years. Each piece tellsa
              story of our heritage & the natural beauty of Sri Lanka.
            </p>
            <button className="artist-btn">View His Story</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
