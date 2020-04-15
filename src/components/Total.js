import React from 'react'

class Total extends React.Component {
 render() {
        const total = Object.keys(this.props.state.selected).reduce(
  (acc, index) => acc + this.props.state.selected[index].cost, 0);
  
  const finalTotal = this.props.currency.format(total)
        return (
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {finalTotal}
              </div>
            </div>
        )
    }
}

export default Total;