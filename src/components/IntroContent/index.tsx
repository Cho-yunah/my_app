import React from 'react';
import { Intro, MainDesc } from './style';

const IntroContent = () => {
  return (
    <div>
      <div className="title">
        <Intro>
          <span className="title_inner riseUp">Hello</span>
        </Intro>
      </div>
      <MainDesc>
        <Intro>
          <p className="riseUp">
            프론트엔드 개발자 조윤아 입니다.
            <br />
            프로젝트의 기획부터 실행까지 적극적으로 참여 하며, 팀원들과 원활한 커뮤니케이션을 통해 목표 달성을 위해
            협력합니다. 특히, 팀 전체가 One Team 이 되어 문제를 해결하고 제품을 만들어 나가는 것을 선호하며, 그에
            집중합니다.
            <br />
            사용자 경험을 향상시키기 위해 기술적으로 노력하여 개선을 이루고, 최상의 결과물을 이끌어냅니다. 지속적인
            성장을 추구하며 피드백을 환영하고, 회사의 목표에 의미 있게 기여할 수 있는 개발자가 되고자 합니다.
          </p>
          <br />
          <p className="En riseUp">
            Yuna&apos;s expertise is focused on front-end development. She Work with team members to solve problems to
            create products and focus on customer satisfaction. She is actively involved in project planning and
            execution and always strives to improve the user experience. As she pursues continued growth, she welcomes
            feedback and looks for opportunities to meaningfully contribute to the company's goals.
          </p>
          <br />
          <ul className="links">
            <li className="mail">
              <a href="mailto:favoryun12@gmail.com">favoryun12@gmail.com</a>
            </li>
            <li className="mail">PDF Download -</li>
          </ul>
        </Intro>
      </MainDesc>
    </div>
  );
};

export default IntroContent;
