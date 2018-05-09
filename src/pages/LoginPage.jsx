import React, { Component } from 'react';
import bg from '../resources/login_bg.svg';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  render() {
    return (
      <div className="login">
        <img src={bg} className="background" alt="background" />
        <div className="container">
          <input placeholder="전화번호를 입력하세요." />
          <button onClick={this.login}>로그인</button>
          <p>Copyright © STUD of Depromeet</p>
        </div>
      </div>
    );
  }

  login = () => {
    alert('test');
  }
}

export default LoginPage;
