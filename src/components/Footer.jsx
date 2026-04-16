//

import { FaCopyright, FaGem } from "react-icons/fa6";
import { FiInstagram, FiTwitter, FiFacebook, FiHeart } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__logo footer__card">
            <h1>
              <FaGem className="logo-icon" />
              Zestara<span>.</span>
            </h1>
            <p>
              Authentic Sri Lanka craftmanship, delivered to your doorstep. We
              connect local artisnas with the world, celebrating heritage &
              handmade artistry.
            </p>

            <div className="footer__socail ">
              <a href="#">
                <FiInstagram />
              </a>
              <a href="#">
                <FiFacebook />
              </a>
              <a href="#">
                <FiTwitter />
              </a>
            </div>
          </div>

          <div className="footer__customer footer__card">
            <h3>Customer Care</h3>
            <a href="#">Track Your Order</a>
            <a href="#">Shipping & Returns</a>
            <a href="#">FAQs</a>
            <a href="#">Contact us</a>
          </div>

          <div className="footer__company footer__card">
            <h3>Company</h3>
            <a href="#">About Zestara</a>
            <a href="#">Our Artists</a>
            <a href="#">Shop Collection</a>
            <a href="#">Terms & Conditions</a>
          </div>

          <div className="footer__newsletter footer__card">
            <h3>Newsletter</h3>
            <p>Subscribe to get updates on new arrivals & artist stories.</p>
            <form action="#" method="post">
              <input
                type="email"
                name="letter"
                id="letter"
                placeholder="Subscribe..."
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            <FaCopyright /> 2026 Zestara. All rights reserved. Created with{" "}
            <FiHeart /> for Sri Lankan Artisans.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
