import React, { Component, Fragment } from 'react';
import Swiper from 'react-id-swiper';
import StudyCard from '../components/study/StudyCard';

class StudyListPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const params = {
      // centeredSlides: true,
      //spaceBetween: -90,
      //slidesPerView: 1.005,
      slidesPerView: 1,
    };

    return (
      <div className="study-page">
        <span className="weekly-title">5월 2주차</span>
        <Swiper {...params}>
          <div><StudyCard
            title={(<Fragment>English<br />Conversation</Fragment>)}
            description="정해진 문장으로 원어민 친구들과 10분 이상 대화 나누기"
          />
          </div>
          <div><StudyCard
            title={(<Fragment>English<br />Conversation</Fragment>)}
            description="정해진 문장으로 원어민 친구들과 10분 이상 대화 나누기"
          />
          </div>
          <div><StudyCard
            title={(<Fragment>English<br />Conversation</Fragment>)}
            description="정해진 문장으로 원어민 친구들과 10분 이상 대화 나누기"
          />
          </div>
          <div><StudyCard
            title={(<Fragment>English<br />Conversation</Fragment>)}
            description="정해진 문장으로 원어민 친구들과 10분 이상 대화 나누기"
          />
          </div>
          <div><StudyCard
            title={(<Fragment>English<br />Conversation</Fragment>)}
            description="정해진 문장으로 원어민 친구들과 10분 이상 대화 나누기"
          />
          </div>
        </Swiper>
      </div>
    );
  }
}

export default StudyListPage;
