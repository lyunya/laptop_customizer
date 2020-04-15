import React from "react";
import CartItem from "./CartItem";
import Total from "./Total";

class Cart extends React.Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <CartItem state={this.props.state} currency={this.props.currency} />
        <Total total={this.props.total} />
      </section>
    );
  }
}

export default Cart;
