import React from "react";
import slugify from "slugify";
import Options from "./Option.js";

class Feature extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = this.props.features[feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));
        return (
          <Options
            currItem={item}
            currency={this.props.currency}
            itemHash={itemHash}
            name={slugify(feature)}
            checked={item.name === this.props.state.selected[feature].name}
            onChange={(e) => this.props.updateFeature(feature, item)}
          />
        );
      });
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });
    return features;
  }
}

export default Feature;
