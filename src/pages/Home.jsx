import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import { FiTruck, FiAward, FiShield } from "react-icons/fi";

import { allProducts } from "../data/productsDetails";

import ProductCard from "../components/ProductCard";
import ServiceCard from "../components/ServiceCard";
import CategoryCard from "../components/CategoryCard";

import HomeDecor from "../assets/home-decor.jpg";
import Accessories from "../assets/accessories.jpg";
import Art from "../assets/art.jpg";

function Home() {
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

  // categories
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

  // const randomProducts = useMemo(() => {
  //   return [...allProducts].sort(() => 0.5 - Math.random()).slice(0, 4);
  // }, []);

  const randomProducts = allProducts.slice(0, 4);

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

          <Link to="/all-products" className="hero__btn" data-aos="fade-up">
            View All Products
          </Link>
        </div>
      </section>

      {/* best sellers section */}
      <section className="best-sellers" data-aos="fade-up">
        <h2 className="section-title">Best Sellers</h2>

        <div className="product-grid">
          {/* {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              artist={product.artist}
              price={product.price}
            />
          ))} */}

          {randomProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              artist={product.artist}
              price={product.price}
            />
          ))}
        </div>

        {/* <button type="button" className="all-products">
          All Products
        </button> */}

        <Link className="all-products-btn" to="/all-products">
          View All Products
        </Link>
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
            <img src="src/assets/artists.jpg" alt="Featured Artist" />
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
