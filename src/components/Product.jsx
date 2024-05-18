import './Product.css';

export const Product = ({ title, price, imageURL, discount }) => {
  const productBg = discount ? '#00b300' : '#d9d9d9';

  const productStyles = {
    backgroundColor: productBg,
  };

  return (
    <div className="product" style={productStyles}>
      <img
        className="productImg"
        src={imageURL}
        alt="Tacos With Lime"
        width="640"
      />
      <h2>{title}</h2>
      {discount && <h3>Discount: {discount}$</h3>}
      <p>{price}$</p>
      <button type="button">Add to cart</button>
    </div>
  );
};
