import React from 'react';
import onImg from '../../resources/icons/ic-home-on.svg';
import offImg from '../../resources/icons/ic-home-off.svg';

const MyStudyRadioBox = props => (
  <label
    htmlFor="MyStudyRadioBox"
    style={props.cusStyle}
    className="my-study-radio-box"
  >
    <input
      type="radio"
      id={props.group}
      name={props.group}
    />
    <div className="box">
      <img src={onImg} className="on-img" alt="Checked circle" />
      <img src={offImg} className="off-img" alt="Uncheck circle" />
    </div>
  </label>
);

export default MyStudyRadioBox;
