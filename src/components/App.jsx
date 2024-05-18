import { Product } from './Product';
import { productData } from './ProductData';

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
