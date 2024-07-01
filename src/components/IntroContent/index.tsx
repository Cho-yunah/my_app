import React from 'react';
import { MainDesc } from './style';
// import { useParams } from 'react-router-dom';

const IntroContent = () => {
  // const { workspace } = useParams();

  return (
    <div>
      <div className="title">
        <span className="title_inner rise_up">Hello</span>
      </div>
      <MainDesc>
        <p className='rise_up'>
        프론트엔드 개발자 조윤아 입니다. 팀원들과 협력하여 문제를 해결하여 제품을 만들고 고객 만족도에 초점을 맞춘다.
        프로젝트 기획과 실행에 적극적으로 참여하며, 항상 사용자 경험을 향상시키기 위해 노력한다.
        지속적인 성장을 추구하면서 피드백을 환영하고 회사의 목표에 의미 있게 기여할 수 있는 기회를 찾는다.
        </p>
        <br />
        <p className='En rise_up'>
        Yuna&apos;s expertise is focused on front-end development. She Work with team members to solve problems to create products and focus on customer satisfaction.
        She is actively involved in project planning and execution and always strives to improve the user experience. 
        As she pursues continued growth, she welcomes feedback and looks for opportunities to meaningfully contribute to the company's goals.
        </p>
        <br />
        <ul className="links">
          <li className="mail">
            <a href="mailto:favoryun12@gmail.com">favoryun12@gmail.com</a>
          </li>
        </ul>
        You can use left and right arrow key to navigate the page of works.{' ← →'}
      </MainDesc>
    </div>
  );
};

export default IntroContent;
