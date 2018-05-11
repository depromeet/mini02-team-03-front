import React from 'react';
import onImg from '../../resources/controls/btn-atd-on.svg';
import offImg from '../../resources/controls/btn-atd-off.svg';

const AttendRadioBox = props => (
  <label
    htmlFor="AttendRadioBox"
    style={props.cusStyle}
    className="attend-radio-box"
  >
    <input
      type="checkbox"
      id={props.group}
      name={props.group}
      className="test"
    />
    <div className="box">
      <span className="text">{props.text}</span>
      <img src={onImg} className="on-img" alt="Checked circle" />
      <img src={offImg} className="off-img" alt="Uncheck circle" />
    </div>
  </label>
);

export default AttendRadioBox;
