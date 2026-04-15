//

import { FaCopyright } from "react-icons/fa6";
import { FiTwitter, FiFacebook, FiHeart } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__logo">
            <p>
              Authentic Sri Lanka craftmanship, delivered to your doorstep. We
              connect local artisnas with the world, celebrating heritage &
              handmade artistry.
            </p>

            <div className="footer__socail">
              {/* <a href="#">{/* <FaInstagram /> </a> */}
              <a href="#">
                <FiFacebook />
              </a>
              <a href="#">
                <FiTwitter />
              </a>
            </div>
          </div>
          <div className="footer__customer">
            <a href="#">Track Your Order</a>
            <a href="#">Shipping & Returns</a>
            <a href="#">FAQs</a>
            <a href="#">Contact us</a>
          </div>

          <div className="footer__company">
            <a href="#">About Zestara</a>
            <a href="#">Our Artists</a>
            <a href="#">Shop Collection</a>
            <a href="#">Terms & Conditions</a>
          </div>

          <div className="footer-newsletter">
            <p>Subscribe to get updates on new arrivals & artist stories.</p>
            <form action="#" method="post">
              <input type="email" name="letter" id="letter" />
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
