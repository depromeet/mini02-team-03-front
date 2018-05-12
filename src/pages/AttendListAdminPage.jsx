import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import WeeklyAttendAdminList from '../components/attend/WeeklyAttendAdminList';
import closeImg from '../resources/icons/close.svg';

class AttendListAdminPage extends Component {
  constructor(props) {
    super(props);

    this.moveToStudyPage = this.moveToStudyPage.bind(this);
  }

  render() {
    const params = {
      slidesPerView: 1,
    };

    return (
      <div className="attend-list-page">
        <span className="title">출석표</span>
        <img src={closeImg} onClick={this.moveToStudyPage} className="close-button" alt="close" />
        <Swiper {...params}>
          <div>
            <WeeklyAttendAdminList weeklyTitle="5월 2주차" />
          </div>
          <div>
            <WeeklyAttendAdminList weeklyTitle="5월 3주차" />
          </div>
          <div>
            <WeeklyAttendAdminList weeklyTitle="5월 4주차" />
          </div>
        </Swiper>
      </div>
    );
  }

  moveToStudyPage = () => {
    this.props.history.push('/study');
  }
}

export default AttendListAdminPage;
