import React, { Component } from 'react';
import divderImg from '../../resources/icons/divider.svg';

class StudyDetailBlock extends Component {
  render() {
    return (
      <div className="study-detail-block">
        <div className="attend-table">
          {
            this.props.leaderName ?
              <div>
                <div className="title">스터디 장</div>
                <img src={divderImg} alt="" />
                <div>{this.props.leaderName}</div>
              </div> : null
          }
          {
            this.props.attendNames ?
              <div>
                <div className="title">스터디 원</div>
                <img src={divderImg} alt="" />
                <div>
                  {
                      this.props.attendNames.map(name => (
                        <span>{name}</span>
                      ))
                    }
                  {
                      this.props.notAttendNames.map(name => (
                        <span className="not-attend-name">{name}</span>
                      ))
                    }
                </div>
              </div> : null
          }
          {
          this.props.guestNames ?
            <div>
              <div className="title">게스트</div>
              <img src={divderImg} alt="" />
              <div>
                {
                    this.props.guestNames.map(name => (
                      <span>{name}</span>
                    ))
                  }
              </div>
            </div> : null
        }
        </div>
        <button>출석표 보기</button>
      </div>
    );
  }
}

export default StudyDetailBlock;
