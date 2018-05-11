import React, { Component } from 'react';
import WeeklyAttendAdminItem from './WeeklyAttendAdminItem';

class WeeklyAttendAdminList extends Component {
  render() {
    return (
      <div className="weekly-attend-list">
        <span className="weekly-title">{this.props.weeklyTitle}</span>
        <ol>
          <WeeklyAttendAdminItem memberName="김태성" weeklyTitle={this.props.weeklyTitle} />
          <WeeklyAttendAdminItem memberName="김태성" weeklyTitle={this.props.weeklyTitle} isGuest />
          <WeeklyAttendAdminItem memberName="김태성" weeklyTitle={this.props.weeklyTitle} />
          <WeeklyAttendAdminItem memberName="김태성" weeklyTitle={this.props.weeklyTitle} />
          <WeeklyAttendAdminItem memberName="김태성" weeklyTitle={this.props.weeklyTitle} />
        </ol>
        <button className="cus-button">저장하기</button>
      </div>
    );
  }
}

export default WeeklyAttendAdminList;
