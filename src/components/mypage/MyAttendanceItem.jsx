import React, { Component } from 'react';

import attendIcon from '../../resources/icons/ic-chk-1-on.svg';
import lateIcon from '../../resources/icons/ic-chk-2-on.svg';
import notAttendIcon from '../../resources/icons/ic-chk-3-on.svg';

class MyAttendanceItem extends Component {
  render() {
    return (
      <li className="my-attendance-item">
        <div className="content">
          <div>
            <span className="title">{this.props.studyName}</span>
            {
              this.props.isGuest ?
                <span className="guest-icon">
                  게스트
                </span> : null
            }
          </div>
          <span className="date">{this.props.studyDate}</span>
        </div>
        {this.getAttendIcon()}
      </li>
    );
  }

  getAttendIcon = () => {
    if (this.props.state === 1) {
      return <img src={attendIcon} className="image" alt="출석" />;
    } else if (this.props.state === 2) {
      return <img src={lateIcon} className="image" alt="지각" />;
    }

    return <img src={notAttendIcon} className="image" alt="결석" />;
  }
}

export default MyAttendanceItem;
