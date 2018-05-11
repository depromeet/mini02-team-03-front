import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import WeeklyAttendList from '../components/attend/WeeklyAttendList';
import closeImg from '../resources/icons/close.svg';

class AttendListPage extends Component {
  render() {
    const params = {
      slidesPerView: 1,
    };

    return (
      <div className="attend-list-page">
        <span className="title">출석표</span>
        <img src={closeImg} className="close-button" alt="close" />
        <Swiper {...params}>
          <div>
            <WeeklyAttendList weeklyTitle="5월 2주차" />
          </div>
          <div>
            <WeeklyAttendList weeklyTitle="5월 3주차" />
          </div>
          <div>
            <WeeklyAttendList weeklyTitle="5월 4주차" />
          </div>
        </Swiper>
      </div>
    );
  }
}

export default AttendListPage;
