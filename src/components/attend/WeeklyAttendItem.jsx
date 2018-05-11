import React, { Component } from 'react';
import attendIcon from '../../resources/icons/ic-chk-1-on.svg';
import lateIcon from '../../resources/icons/ic-chk-2-on.svg';
import notAttendIcon from '../../resources/icons/ic-chk-3-on.svg';

class WeeklyAttendItem extends Component {
  render() {
    return (
      <li className="weekly-attend-item">
        <span className="name">{this.props.memberName}</span>
        {this.props.isGuest ?
          <span className="guest-icon">
            게스트
          </span> : null
        }
        {this.getAttendIcon()}
      </li>
    );
  }

  getAttendIcon = () => {
    if (this.props.state === 1) {
      return <img src={attendIcon} className="attend-icon" alt="출석" />;
    } else if (this.props.state === 2) {
      return <img src={lateIcon} className="attend-icon" alt="지각" />;
    }

    return <img src={notAttendIcon} className="attend-icon" alt="결석" />;
  }
}

export default WeeklyAttendItem;
