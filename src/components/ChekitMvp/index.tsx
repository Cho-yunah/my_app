import React, { useState } from 'react';
import styled from '@emotion/styled';
import { MainDesc, SubDesc } from '@components/IntroContent/style';
import { rippleEffect } from '@components/SideMenu/styles';

const ChekitMvp = () => {
  // 각 리스트 아이템에 대한 rippleStyle을 별도로 관리하기 위해 배열로 상태를 관리합니다.
  const [rippleStyles, setRippleStyles] = useState(Array(3).fill({}));

  // 클릭 이벤트 핸들러
  const handleClick = (index, e) => {
    const rect = e.target.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;

    const size = Math.max(rect.width, rect.height);
    const newRippleStyles = [...rippleStyles];
    newRippleStyles[index] = {
      top: yPos - size / 2 + 'px',
      left: xPos - size / 2 + 'px',
      width: size + 'px',
      height: size + 'px',
      transform: 'scale(10)',
      opacity: '0',
      transition: 'transform 0.5s, opacity 0.5s',
    };

    setRippleStyles(newRippleStyles);

    // 클릭 이벤트 처리
    setTimeout(() => {
      const resetRippleStyles = [...rippleStyles];
      resetRippleStyles[index] = {};
      setRippleStyles(resetRippleStyles);
    }, 2000); // 애니메이션 지속 시간
  };

  return (
    <div>
      {/* 타이틀 및 설명 */}
      <div className="title">
        <span className="title_inner">Chekit MVP 1</span>
      </div>
      <div className="description">
        <MainDesc>
          <span>
            해당 프로젝트는 이전 회사의 주 서비스를 피봇하게 되는 과정에서 진행한 프로젝트입니다. 기능을 최소화하고
            빠르게 만든 version 1 의 프로젝트가 시장 반응이 좋아지면서, 이전 데이터를 기반으로 한 version 2 까지
            진행하게 되었습니다.gkgk
          </span>
          <br />
        </MainDesc>
        <SubDesc>
          <li>Vue, Tailwind, pinia</li>
          <li>Team Project</li>
        </SubDesc>
      </div>

      {/* 리스트 아이템들 */}
      <StyledList>
        {[1, 2, 3].map((item, index) => (
          <StyledListItem key={index} onClick={(e) => handleClick(index, e)}>
            Item {item}
            <Ripple style={rippleStyles[index]}></Ripple>
          </StyledListItem>
        ))}
      </StyledList>
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
