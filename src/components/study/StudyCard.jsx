import React, { Component, Fragment } from 'react';
import AttendCheckBox from '../controls/AttendCheckBox';
import MyStudyRadioBox from '../controls/MyStudyRadioBox';
import StudyDetailBlock from './StudyDetailBlock';
import cardBgImg from '../../resources/bg-card.svg';

class StudyCard extends Component {
  render() {
    return (
      <div className="study-card">
        <div className="content">
          <MyStudyRadioBox cusStyle={{ 'margin-top': '1rem' }} group="mystudy" />
          <img style={this.props.imgBottomMargin} src={this.props.imgSrc} alt="study-img" className="study-img" />
          <span className="title">{this.props.title}</span>
          <p className="description">{this.props.description}</p>
        </div>
        <img src={cardBgImg} alt="bg" className="card-bg-img" />
        <div className="check-block">
          <AttendCheckBox text={<Fragment>게스트<br />참석</Fragment>} group="attendance" />
        </div>
        <StudyDetailBlock
          leader={this.props.leader}
          attendMembers={this.props.attendMembers}
          notAttendMembers={this.props.notAttendMembers}
          guestMembers={this.props.guestMembers}
          history={this.props.history}
          isLeader={this.props.isLeader}
        />
      </div>
    );
  }
}

export default StudyCard;
