import { MainDesc, SubDesc } from '@components/IntroContent/style';
import React from 'react';

const ChekitMvp = () => {
  return (
    <div>
      <div className="title">
        <span className="title_inner">Chekit MVP 1</span>
      </div>
      <div className="description">
        <MainDesc>
          <span>
            해당 프로젝트는 이전 회사의 주 서비스를 피봇하게 되는 과정에서 진행한 프로젝트입니다. 기능을 최소화하고
            빠르게 만든 version 1 의 프로젝트가 시장 반응이 좋아지면서, 이전 데이터를 기반으로 한 version 2 까지
            진행하게 되었습니다.
          </span>
          <br />
        </MainDesc>
        <SubDesc>
          <li>Vue, Tailwind, pinia</li>
          <li>Team Project</li>
        </SubDesc>
      </div>
    </div>
  );
};

export default ChekitMvp;
