import React, { Component } from 'react';
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
        <img src={cardBgImg} alt="bg" className="card-bg-img" />
      </div>
    );
  }
}

export default StudyCard;
