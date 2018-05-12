import React, { Component } from 'react';
import WeeklyAttendAdminItem from './WeeklyAttendAdminItem';

class WeeklyAttendAdminList extends Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
  }
  render() {
    return (
      <div className="weekly-attend-list">
        <span className="weekly-title">{this.props.weeklyTitle}</span>
        <ol>
          <WeeklyAttendAdminItem memberName="김태성" weeklyTitle={this.props.weeklyTitle} />
          <WeeklyAttendAdminItem memberName="김도형" weeklyTitle={this.props.weeklyTitle} isGuest />
          <WeeklyAttendAdminItem memberName="여정승" weeklyTitle={this.props.weeklyTitle} />
          <WeeklyAttendAdminItem memberName="마현지" weeklyTitle={this.props.weeklyTitle} />
          <WeeklyAttendAdminItem memberName="양정안" weeklyTitle={this.props.weeklyTitle} />
        </ol>
        <button className="cus-button" onClick={this.onSave}>저장하기</button>
      </div>
    );
  }

  onSave = () => {
    alert('저장했습니다.');
  }
}

export default WeeklyAttendAdminList;
