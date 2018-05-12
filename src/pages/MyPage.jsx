import React, { Component, Fragment } from 'react';
import closeImg from '../resources/icons/close.svg';
import homeImg from '../resources/icons/ic-home-mymenu.svg';
import attendIcon from '../resources/icons/ic-chk-1-on.svg';
import lateIcon from '../resources/icons/ic-chk-2-on.svg';
import notAttendIcon from '../resources/icons/ic-chk-3-on.svg';
import MyAttendanceItem from '../components/mypage/MyAttendanceItem';

class MyPage extends Component {
  constructor(props) {
    super(props);

    this.moveToStudyPage = this.moveToStudyPage.bind(this);
    this.logout = this.logout.bind(this);
  }

  render() {
    return (
      <div className="my-page">
        <div className="header">
          <img src={closeImg} className="close-button" alt="close" onClick={this.moveToStudyPage} />
          <span className="title">내 출석 현황</span>
        </div>
        <img src={homeImg} className="home-img" alt="my study" />
        <span className="study-title">{<Fragment>English<br />Conversation</Fragment>}</span>
        <div className="check-table">
          <div>
            <img src={attendIcon} alt="출석" />
            <span>12회</span>
          </div>
          <div>
            <img src={lateIcon} alt="지각" />
            <span>03회</span>
          </div>
          <div>
            <img src={notAttendIcon} alt="결석" />
            <span>05회</span>
          </div>
        </div>
        <ol>
          <MyAttendanceItem studyName="Ios Study" studyDate="2018.05.10" state={3} />
          <MyAttendanceItem studyName="BlockChain Study" studyDate="2018.05.3" isGuest state={1} />
          <MyAttendanceItem studyName="Ios Study" studyDate="2018.04.25" state={1} />
          <MyAttendanceItem studyName="Ios Study" studyDate="2018.04.12" state={3} />
          <MyAttendanceItem studyName="Javascript Core Study" studyDate="2018.04.05" state={1} isGuest />
          <MyAttendanceItem studyName="Ios Study" studyDate="2018.03.29" state={2} />
          <MyAttendanceItem studyName="Ios Study" studyDate="2018.03.22" state={1} />
          <MyAttendanceItem studyName="Ios Study" studyDate="2018.03.07" state={1} />
        </ol>
        <button onClick={this.logout} className="logout-btn">로그아웃</button>
      </div>
    );
  }

  moveToStudyPage = () => {
    this.props.history.push('/study');
  }

  logout = () => {
    this.props.history.push('/');
  }
}

export default MyPage;
