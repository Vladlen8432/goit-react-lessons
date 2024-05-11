const productData = [
  {
    id: '1',
    title: 'Tacos with cheese',
    price: 10.9,
    discount: null,
    imageURL:
      'https://www.oliveandmango.com/images/uploads/2022_02_21_cheesy_baked_tacos_1.jpg',
  },

  {
    id: '2',
    title: 'Tacos with lime',
    price: 12.6,
    discount: 1.5,
    imageURL:
      'https://michielskitchen.com/wp-content/uploads/2020/08/lime-chicken-and-coriander-tacos-recipe-michiels-kitchen-01-1.jpg',
  },

  {
    id: '3',
    title: 'Tacos with pineapple',
    price: 13.4,
    discount: 2.5,
    imageURL:
      'https://michielskitchen.com/wp-content/uploads/2020/08/lime-chicken-and-coriander-tacos-recipe-michiels-kitchen-01-1.jpg',
  },
];

export const App = () => {
  return (
    <section>
      <h1>LOGO</h1>

      {productData.map(product => {
        return (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            discount={product.discount}
            imageURL={product.imageURL}
          />
        );
      })}
    </section>
  );
};

const Product = ({ title, price, imageURL, discount }) => {
  return (
    <div>
      <img src={imageURL} alt="Tacos With Lime" width="640" />
      <h2>{title}</h2>
      {discount && <h3>Discount: {discount}$</h3>}
      <p>{price}$</p>
      <button type="button">Add to cart</button>
    </div>
  );
};
