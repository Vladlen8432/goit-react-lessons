import { Component } from 'react';
import { Product } from './Product/Product';
import { productData } from './Product/ProductData';
import Section from './Section/Section';
import css from './App.module.css';

export class App extends Component {
  state = {
    counterValue: 0,
    products: productData,
    showMessage: false,
    currentPage: 1,
  };

  handleIncrement = () => {
    this.setState({ counterValue: this.state.counterValue + 1 });
  };

  handleDecrement = () => {
    if (this.state.counterValue === 0) {
      alert('Please, stop!');
      return;
    }

    this.setState({ counterValue: this.state.counterValue - 1 });
  };

  handleDeleteProduct = productId => {
    this.setState({
      products: this.state.products.filter(product => product.id !== productId),
    });
  };

  render() {
    const sortedProducts = [...this.state.products].sort(
      (a, b) => b.discount - a.discount
    );

    return (
      <div>
        <Section>
          <h1>LOGO</h1>
          <button onClick={this.handleDecrement}>Decrement</button>
          <b>Couner value: {this.state.counterValue}</b>
          <button onClick={this.handleIncrement}>Increment</button>

          {this.state.counterValue > 5 && (
            <div>Congrats! You won discount 20%</div>
          )}
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
