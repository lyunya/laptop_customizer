import React from "react";
import Feature from "./Feature.js";

class Customize extends React.Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Feature
          features={this.props.features}
          state={this.props.state}
          currency={this.props.currency}
          updateFeature={this.props.updateFeature}
        />
      </form>
    );
  }
}

export default Customize;
