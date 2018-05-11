import React, { Component } from 'react';
import AttendRadioBox from '../controls/AttendRadioBox';
import cardBgImg from '../../resources/bg-card.svg';
import homeIcon from '../../resources/icons/ic-home-on.svg';
import studyImg from '../../resources/img-1.svg';


class StudyCard extends Component {
  render() {
    return (
      <div className="study-card">
        <div className="content">
          <img src={homeIcon} alt="home" className="home-icon" />
          <img src={studyImg} alt="study-img" className="study-img" />
          <span className="title">{this.props.title}</span>
          <p className="description">{this.props.description}</p>
        </div>
        <div className="check-block">
          <AttendRadioBox text="참석" group="attendance" />
          <AttendRadioBox text="불참" group="attendance" cusStyle={{ 'margin-left': '1.7rem' }} />
        </div>
        <img src={cardBgImg} alt="bg" className="card-bg-img" />
      </div>
    );
  }
}

export default StudyCard;
