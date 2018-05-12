import React, { Component } from 'react';
import bg from '../resources/login_bg.svg';
import HttpHelper from '../network/HttpHelper';
import StorageManager from '../data/StorageManager';
import logoImg from '../resources/img-logo.svg';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  async componentWillMount() {
    const token = StorageManager.getToken();

    // if (token) {
    //   this.props.history.push('/study');
    // }
  }

  render() {
    return (
      <div className="login">
        <img src={bg} className="background" alt="background" />
        <div className="container">
          <img src={logoImg} alt="로고" />
          <input ref={(username) => { this.username = username; }} placeholder="전화번호를 입력하세요." />
          <button onClick={this.login}>로그인</button>
          <p>Copyright © STUD of Depromeet</p>
        </div>
      </div>
    );
  }

  login = async () => {
    const res = await HttpHelper.login({ username: this.username.value });

    if (res) {
      this.props.history.push('/study');
    } else {
      alert('로그인에 실패 했습니다.');
    }
  }
}

export default LoginPage;
