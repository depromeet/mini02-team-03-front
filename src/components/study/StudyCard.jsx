import React, { Component, Fragment } from 'react';
import AttendCheckBox from '../controls/AttendCheckBox';
import MyStudyRadioBox from '../controls/MyStudyRadioBox';
import StudyDetailBlock from './StudyDetailBlock';
import cardBgImg from '../../resources/bg-card.svg';
import studyImg from '../../resources/img-1.svg';

class StudyCard extends Component {
  render() {
    return (
      <div className="study-card">
        <div className="content">
          <MyStudyRadioBox cusStyle={{ 'margin-top': '1rem' }}group="mystudy" />
          <img src={studyImg} alt="study-img" className="study-img" />
          <span className="title">{this.props.title}</span>
          <p className="description">{this.props.description}</p>
        </div>
        <img src={cardBgImg} alt="bg" className="card-bg-img" />
        <div className="check-block">
          <AttendCheckBox text={<Fragment>게스트<br />참석</Fragment>} group="attendance" />
        </div>
        <StudyDetailBlock
          leaderName="장선혁"
          attendNames={['오기환', '조영은', '오기환', '조영은', '오기환', '조영은', '오기환', '조영은', '오기환', '조영은']}
          notAttendNames={['마현지']}
          guestNames={['김태성']}
        />
      </div>
    );
  }
}

export default StudyCard;
