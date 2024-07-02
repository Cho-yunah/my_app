import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ImageContents, MainDesc, MainImageBox, SubDesc } from '@components/IntroContent/style';
import { rippleEffect } from '@components/SideMenu/styles';
import WaveText from '../common/WaveText';
import ImageItem from '../ChekitMvp2/ImageItem';
import { MVP1_INFO } from '@/constants';

const ChekitMvp = () => {
  // 각 리스트 아이템에 대한 rippleStyle을 별도로 관리하기 위해 배열로 상태를 관리합니다.
  const [showContentsModal, setShowContentsModal] = useState(false);


  return (
    <div>
      {/* 타이틀 및 설명 */}
      <div className="title">
        <span className="title_inner">Chekit MVP</span>
      </div>
      <div className="description">
        <MainDesc>
          <span>
            해당 프로젝트는 이전 프로덕트인 비대면 진료 앱 서비스를 종료함과 동시에 새롭게 런칭한 웹 서비스입니다. 
            회사의 메인 프로덕트의 전환을 최대한 빠르게 가져가기 위해 구현 기능은 최소화하고, 해당 서비스가 시장에서 경쟁력이 있는지 검증한 프로젝트였습니다.
            최소한의 구현으로 시작한 해당 프로젝트가 시장에서 꽤나 호응을 얻어, 이후 버전 2를 기획하게 되었고, 현재 회사의 메인 프로덕트 입니다.
          </span>
          <br />
        </MainDesc>
        <SubDesc>
          <li>React, Styled-Component, Recoil</li>
          <li>Team Project</li>
        </SubDesc>
      </div>
      <MainImageBox>
          <img width="600" height="600" src="https://firebasestorage.googleapis.com/v0/b/yunaa-3cb91.appspot.com/o/mvp1.png?alt=media&token=1a01ea3e-bc20-4a3f-a7bd-9fcd8b9bdfce" />
        </MainImageBox>
        <ImageContents>
          {/* <iframe
            src="https://player.vimeo.com/video/936508704?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            title="chekit Result Demo"
            className="iframe"
          ></iframe> */}
          <WaveText text="Click the image below!" />
          <ImageItem imageUrls={MVP1_INFO} setShowContentsModal={setShowContentsModal} />
        </ImageContents>
      
    </div>
  );
};

// 스타일드 컴포넌트들
const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

const Ripple = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: pink;
  transform: scale(0);

  ${({ style }) => `
  top: ${style?.top};
  left: ${style?.left};
  width: ${style?.width};
  height: ${style?.height};
  `};
  animation: rippleEffect 3s linear;
  @keyframes rippleEffect {
    to {
      transform: scale(10);
      opacity: 0;
    }
  }
`;

export default ChekitMvp;
