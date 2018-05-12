import React, { Component } from 'react';
import divderImg from '../../resources/icons/divider.svg';

class StudyDetailBlock extends Component {
  constructor(props) {
    super(props);

    this.moveToAttendListPage = this.moveToAttendListPage.bind(this);
  }

  render() {
    return (
      <div className="study-detail-block">
        <div className="attend-table">
          {
            this.props.leader ?
              <div>
                <div className="title">스터디 장</div>
                <img src={divderImg} alt="" />
                <div>{this.props.leader}</div>
              </div> : null
          }
          {
            this.props.attendMembers ?
              <div>
                <div className="title">스터디 원</div>
                <img src={divderImg} alt="" />
                <div>
                  {
                    this.props.attendMembers ?
                      this.props.attendMembers.map(name => (
                        <span>{name}</span>
                      )) : null
                  }
                  {
                    this.props.notAttendMembers ?
                      this.props.notAttendMembers.map(name => (
                        <span className="not-attend-name">{name}</span>
                      )) : null
                  }
                </div>
              </div> : null
          }
          {
          this.props.guestMembers ?
            <div>
              <div className="title">게스트</div>
              <img src={divderImg} alt="" />
              <div>
                {
                    this.props.guestMembers.map(name => (
                      <span>{name}</span>
                    ))
                }
              </div>
            </div> : null
        }
        </div>
        <button onClick={this.moveToAttendListPage}>출석표 보기</button>
      </div>
    );
  }

  moveToAttendListPage = () => {
    if (this.props.isLeader) {
      this.props.history.push('/attendlist/admin');
    } else {
      this.props.history.push('/attendlist');
    }
  }
}

export default StudyDetailBlock;
