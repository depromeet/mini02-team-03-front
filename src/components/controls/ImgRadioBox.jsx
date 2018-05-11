import React from 'react';

const ImgRadioBox = props => (
  <label
    htmlFor="ImgRadioBox"
    style={props.cusStyle}
    className="img-radio-box"
  >
    <input
      type="radio"
      id={props.group}
      name={props.group}
    />
    <div className="box">
      <img src={props.onImg} className="on-img" alt="Checked circle" />
      <img src={props.offImg} className="off-img" alt="Uncheck circle" />
    </div>
  </label>
);

export default ImgRadioBox;
