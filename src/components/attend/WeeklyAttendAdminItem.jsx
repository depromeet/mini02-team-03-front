import React, { Component } from 'react';
import ImgRadioBox from '../controls/ImgRadioBox';

import attendIcon from '../../resources/icons/ic-chk-1-on.svg';
import lateIcon from '../../resources/icons/ic-chk-2-on.svg';
import notAttendIcon from '../../resources/icons/ic-chk-3-on.svg';
import attendOffIcon from '../../resources/icons/ic-chk-1-off.svg';
import lateOffIcon from '../../resources/icons/ic-chk-2-off.svg';
import notAttendOffIcon from '../../resources/icons/ic-chk-3-off.svg';

class WeeklyAttendItem extends Component {
  render() {
    const groupName = this.props.memberName + this.props.weeklyTitle;
    const radioStyle = {
      'margin-left': '2rem',
      float: 'right',
    };

    return (
      <li className="weekly-attend-item">
        <span className="name">{this.props.memberName}</span>
        {this.props.isGuest ?
          <span className="guest-icon">
            게스트
          </span> : null
          }
        <div>
          <ImgRadioBox
            cusStyle={radioStyle}
            onImg={notAttendIcon}
            offImg={notAttendOffIcon}
            group={groupName}
          />
          <ImgRadioBox
            cusStyle={radioStyle}
            onImg={lateIcon}
            offImg={lateOffIcon}
            group={groupName}
          />
          <ImgRadioBox
            cusStyle={radioStyle}
            onImg={attendIcon}
            offImg={attendOffIcon}
            group={groupName}
          />
        </div>
      </li>
    );
  }
}

export default WeeklyAttendItem;
