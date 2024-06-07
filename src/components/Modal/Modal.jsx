import { Component } from 'react';
import { StyledModal } from './Styled';

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal has succesfully been mounted');
  }

  render() {
    return (
      <StyledModal>
        <div className="modal">
          <button onClick={this.props.closeModal} className="closeBtn">
            &times;
          </button>
          <h2>Product details</h2>
          <div>
            <h3>Title: {this.props.modalData.title}</h3>
            <p>Price: {this.props.modalData.price}$</p>
            <p>Discount: {this.props.modalData.discount}$</p>
          </div>
        </div>
      </StyledModal>
    );
  }
}
