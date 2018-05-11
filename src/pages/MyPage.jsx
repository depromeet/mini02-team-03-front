import React, { Component, Fragment } from 'react';
import closeImg from '../resources/icons/close.svg';
import homeImg from '../resources/icons/ic-home-mymenu.svg';
import attendIcon from '../resources/icons/ic-chk-1-on.svg';
import lateIcon from '../resources/icons/ic-chk-2-on.svg';
import notAttendIcon from '../resources/icons/ic-chk-3-on.svg';
import MyAttendanceItem from '../components/mypage/MyAttendanceItem';

class MyPage extends Component {
  render() {
    return (
      <div className="my-page">
        <div className="header">
          <img src={closeImg} className="close-button" alt="close" />
          <span className="title">내 출석 현황</span>
        </div>
        <img src={homeImg} className="home-img" alt="my study" />
        <span className="study-title">{<Fragment>English<br />Conversation</Fragment>}</span>
        <div className="check-table">
          <div>
            <img src={attendIcon} alt="출석" />
            <span>999회</span>
          </div>
          <div>
            <img src={lateIcon} alt="지각" />
            <span>999회</span>
          </div>
          <div>
            <img src={notAttendIcon} alt="결석" />
            <span>999회</span>
          </div>
        </div>
        <ol>
          <MyAttendanceItem studyName="test" studyDate="2018.05.10" state={3} />
          <MyAttendanceItem studyName="test" studyDate="2018.05.10" isGuest />
          <MyAttendanceItem studyName="test" studyDate="2018.05.10" state={1} />
          <MyAttendanceItem studyName="test" studyDate="2018.05.10" state={3} />
          <MyAttendanceItem studyName="test" studyDate="2018.05.10" state={1} />
          <MyAttendanceItem studyName="test" studyDate="2018.05.10" state={2} />
          <MyAttendanceItem studyName="test" studyDate="2018.05.10" state={1} />
          <MyAttendanceItem studyName="test" studyDate="2018.05.10" state={1} />
        </ol>
      </div>
    );
  }
}

export default MyPage;
