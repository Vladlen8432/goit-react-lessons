import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Product } from './Product/Product';
import { productData } from './Product/ProductData';
import Section from './Section/Section';
import ProductForm from './ProductForm/ProductForm';
import css from './App.module.css';

export class App extends Component {
  state = {
    products: productData,
  };

  handleDeleteProduct = productId => {
    this.setState({
      products: this.state.products.filter(product => product.id !== productId),
    });
  };

  handleAddProduct = productData => {
    console.log('productData:', productData);

    const hasDuplicates = this.state.products.some(
      product => product.title === productData.title
    );

    if (hasDuplicates) {
      alert(`Oops, product with title '${productData.title}' already exist`);
      return;
    }

    const finalProduct = {
      ...productData,
      id: nanoid(),
    };

    this.setState(prevState => ({
      products: [...prevState.products, finalProduct],
    }));
  };

  render() {
    const sortedProducts = [...this.state.products].sort(
      (a, b) => b.discount - a.discount
    );

    return (
      <div>
        <Section>
          <h1>LOGO</h1>
        </Section>

        <Section title="Add product form">
          <ProductForm handleAddProduct={this.handleAddProduct} />
        </Section>

        <Section title="Product list">
          <div className={css.productList}>
            {sortedProducts.map(product => {
              return (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  discount={product.discount}
                  imageURL={product.imageURL}
                  handleDeleteProduct={this.handleDeleteProduct}
                />
              );
            })}
          </div>
        </Section>
      </div>
    );
  }
}
