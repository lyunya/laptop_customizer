import React from "react";


const Options = (props) => {
  return(
  <div key={props.itemHash} className="feature__item">
    <input
      type="radio"
      id={props.itemHash}
      className="feature__option"
      name={props.name}
      checked={props.checked}
      onChange={props.onChange}
    />
    <label htmlFor={props.itemHash} className="feature__label">
      {props.currItem.name} (
      {props.currency.format(props.currItem.cost)})
    </label>
  </div>
  )
}

export default Options;