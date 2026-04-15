function ProductCard({ name, price }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        width: "200px",
        textAlign: "center",
      }}>
      <img
        src="{image}"
        alt="{name}"
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button
        style={{
          backgroundColor: "#E1Df66",
          boder: "none",
          padding: "5px 10px",
          borderRadius: "4px",
          cursor: "pointer",
        }}>
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;
