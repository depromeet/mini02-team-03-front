import React, { Component } from 'react';
import WeeklyAttendItem from './WeeklyAttendItem';

class WeeklyAttendList extends Component {
  render() {
    return (
      <div className="weekly-attend-list">
        <span className="weekly-title">{this.props.weeklyTitle}</span>
        <ol>
          <WeeklyAttendItem memberName="김태성" state={0} />
          <WeeklyAttendItem memberName="김태성" state={2} isGuest />
          <WeeklyAttendItem memberName="김태성" state={1} />
          <WeeklyAttendItem memberName="김태성" state={1} />
          <WeeklyAttendItem memberName="김태성" state={2} />
        </ol>
      </div>
    );
  }
}

export default WeeklyAttendList;
