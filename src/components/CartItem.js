import React from "react";

class CartItem extends React.Component {
  render() {
    const summary = Object.keys(this.props.state.selected).map(
      (feature, idx) => {
        const featureHash = feature + "-" + idx;
        const selectedOption = this.props.state.selected[feature];

        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {this.props.currency.format(selectedOption.cost)}
            </div>
          </div>
        );
      }
    );
    return summary;
  }
}

export default CartItem;
