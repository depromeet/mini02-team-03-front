import React, { Component, Fragment } from 'react';
import Swiper from 'react-id-swiper';
import StudyCard from '../components/study/StudyCard';
import HttpHelper from '../network/HttpHelper';
import mypageImg from '../resources/icons/ic-mypage.svg';

import Img01 from '../resources/img-1.svg';
import Img02 from '../resources/img-2.svg';
import Img03 from '../resources/img-3.svg';
import Img04 from '../resources/img-4.svg';
import Img05 from '../resources/img-5.svg';
import Img06 from '../resources/img.svg';


class StudyListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.moveToMyPage = this.moveToMyPage.bind(this);
  }

  async componentWillMount() {
    const data = await HttpHelper.getStudies({ year: 2018, month: 5, week: 1 });
    const isLeader = await HttpHelper.getLeader({ year: 2018, month: 5, week: 1 });
    this.setState({
      data,
      isLeader,
    });
  }

  render() {
    const params = {
      slidesPerView: 1,
    };

    return (
      <div className="study-page">
        <span className="weekly-title">5월 2주차</span>
        <img src={mypageImg} onClick={this.moveToMyPage} className="my-page-icon" alt="내정보" />
        <Swiper {...params}>
          {/* { this.state.data.map(detail => ( */}
          {/* <div> */}
          {/* <StudyCard */}
          {/* title={(<Fragment>{detail.name}</Fragment>)} */}
          {/* description={detail.description} */}
          {/* leader={detail.leader} */}
          {/* attendMembers={detail.attendMembers} */}
          {/* notAttendMembers={detail.notAttendMembers} */}
          {/* guestMembers={detail.guestMembers} */}
          {/* history={this.props.history} */}
          {/* /> */}
          {/* </div>)) */}
          {/* } */}
          <div>
            <StudyCard
              title={(<Fragment>English<br />Conversation</Fragment>)}
              imgSrc={Img01}
              description="정해진 문장으로 원어민과 10분 이상 대화를 나눕니다"
              leader="최병규"
              attendMembers={['한영수', '김민호', '여정승', '정현아']}
              notAttendMembers={['이상철']}
              guestMembers={['김태성']}
              history={this.props.history}
              isLeader={this.state.isLeader}
            />
          </div>
          <div>
            <StudyCard
              title={(<Fragment>Design<br />Study</Fragment>)}
              imgSrc={Img02}
              description="디자인 스터디는 공유와 참여를 기본으로 네트워킹을 진행하고 있습니다."
              leader="마현지"
              attendMembers={['김동현', '양정안', '임철규', '김지연', '최연지']}
              notAttendMembers={['김하람', '이슬']}
              guestMembers={['박태준', '김도형']}
              history={this.props.history}
              isLeader={this.state.isLeader}
            />
          </div>
          <div>
            <StudyCard
              title={(<Fragment>Javascript Core<br />Study</Fragment>)}
              imgSrc={Img03}
              description="자바스크립트의 기초부터, 깊이 있는 부분까지 다룹니다."
              leader="장선혁"
              attendMembers={['오기환', '조영은', '권재원', '권태형', '강진구']}
              notAttendMembers={['최병규', '이광용']}
              history={this.props.history}
              isLeader={this.state.isLeader}
            />
          </div>
          <div>
            <StudyCard
              title={(<Fragment>BlockChain<br />Study</Fragment>)}
              imgSrc={Img04}
              description="블록체인 기초부터 이더리움 기반의 DApp을 만들어봅니다."
              leader="전해성"
              attendMembers={['김관호']}
              notAttendMembers={['조서완', '김소연']}
              guestMembers={['박예기']}
              history={this.props.history}
              isLeader={this.state.isLeader}
            />
          </div>
          <div>
            <StudyCard
              title={(<Fragment>React django<br />Web App Study</Fragment>)}
              imgSrc={Img05}
              description="자바스크립트의 기초부터, 깊이 있는 부분까지 다룹니다."
              leader="김경만"
              attendMembers={['허원철', '박진현', '권장호', '최인호']}
              notAttendMembers={['조성빈', '김태성']}
              guestMembers={['이호연']}
              history={this.props.history}
              isLeader={this.state.isLeader}
            />
          </div>
          <div>
            <StudyCard
              title={(<Fragment>iOS<br />Study</Fragment>)}
              imgSrc={Img06}
              description="iOS로 여러 프로젝트 및 오픈소스를 만들어서 배포하는 것을 목표로 합니다."
              leader="여정승"
              attendMembers={['이광용']}
              history={this.props.history}
              isLeader={this.state.isLeader}
            />
          </div>
        </Swiper>
      </div>
    );
  }

  moveToMyPage = () => {
    this.props.history.push('/mypage');
  }
}

export default StudyListPage;
