import { Product } from './Product/Product';
import { productData } from './Product/ProductData';
import Section from './Section/Section';
import css from './App.module.css';

export const App = () => {
  return (
    <div>
      <Section>
        <h1>LOGO</h1>
      </Section>

      <Section title="Product list">
        <div className={css.productList}>
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
        </div>
      </Section>
    </div>
  );
};
