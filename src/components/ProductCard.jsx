// function ProductCard({ name, price }) {
//   return (
//     <div
//       style={{
//         border: "1px solid #ddd",
//         borderRadius: "8px",
//         padding: "20px",
//         width: "200px",
//         textAlign: "center",
//       }}>
//       <img
//         src="{image}"
//         alt="{name}"
//         style={{ width: "100%", borderRadius: "8px" }}
//       />
//       <h3>{name}</h3>
//       <p>Price: ${price}</p>
//       <button
//         style={{
//           backgroundColor: "#E1Df66",
//           boder: "none",
//           padding: "5px 10px",
//           borderRadius: "4px",
//           cursor: "pointer",
//         }}>
//         Buy Now
//       </button>
//     </div>
//   );
// }

import React from "react";
import { BiCartAlt } from "react-icons/bi";

function ProductCard({ image, name, price, artist }) {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p className="artist">by {artist}</p>

        <div className="product-card__footer">
          <span className="price">LKR {price}</span>
          <button type="button" className="add-to-cart">
            <BiCartAlt />
          </button>
          <button type="button" className="customize-product">
            Customize Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
