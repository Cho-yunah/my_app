import { BREAK_POINTS } from '@/constants';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColorPrimary};
  transition: background-color 0.3s ease, color 0.3s ease;
  height: 100vh;
`;

export const Aside = styled.aside`
  color: ${(props) => props.theme.textColorPrimary};
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  z-index: 1000;
  width: 310px;
  min-width: 310px;
  height: 100vh;
  position: fixed;
  top: 0; /* 위쪽에 고정 */
  left: 0; /* 왼쪽에 고정 */
  bottom: 0; /* 아래쪽에 고정 */
  overflow-y: auto; /* 세로 스크롤을 허용하여 내용이 넘칠 때 스크롤 표시 */

  &.open {
    z-index: 1000;  
    transform: translateX(0);
    transition: transform 0.2s ease-in-out;
    // box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5); // 약간의 그림자
  }
  &.none {
    transform: translateX(-100%);
    transition: transform 0.5s ease-in-out;
  }

  @media screen and (max-width: ${BREAK_POINTS.mobile}px) {
    transform: translateX(-100%);
    transition: transform 0.5s ease-in-out;
  }
  
  a {
    text-decoration: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: ${(props) => props.theme.textColorPrimary};
  z-index: 999;
  display: none;
  transition: background 0.3s ease-in-out;

  &.open {
    display: block;
  }
`;
export const SideHeader = styled.section`
  transition: 0.2s;
  padding: 38px;
  border-bottom: 1.5px solid ${(props) => props.theme.borderColorPrimary};
  border-right: 1.5px solid ${(props) => props.theme.borderColorPrimary};
  line-height: 22px;
  height: 240px;
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.textColorPrimary};

  & .name {
    font-size: 17px;
    font-weight: 500;
  }

  & .desc {
    color: ${(props) => props.theme.textColorGrey};
    font-size: 13px;
  }

  & .workCount {
    position: absolute;
    bottom: 38px;
    font-size: 13px;
    font-weight: 400;
    color: ${(props) => props.theme.textColorGrey};


    & span {
      font-weight: 500;
      font-size: 15px;
      color: ${(props) => props.theme.textColorSecondary};
    }
  }
`;

export const SideList = styled.section`
  height: calc(100% - 244px);
  border-right: 1.5px solid ${(props) => props.theme.borderColorPrimary};
  box-sizing: border-box;
  color: ${(props) => props.theme.textColorPrimary};
`;

type ContentsHeaderProps = {
  isMenuOpen: boolean;
  isMobileSize: boolean;
};

export const Content = styled.div<ContentsHeaderProps>`
  height: 100%;
  overflow-y: auto;
  flex: 1;
  flex-direction: column;
  padding: 0px;
  margin-left: ${(props) => props.isMenuOpen ? (props.isMobileSize? '0px' : '310px' ): '0px'};
  -webkit-font-smoothing: antialiased;
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  color: ${(props) => props.theme.textColorPrimary};
  transition: background-color 0.3s ease, color 0.3s ease;


  @media screen and (max-width: ${BREAK_POINTS.mobile}px) {
    margin-left: 0px;
    padding-top: 0px;
  }
`;

export const ContentsHeader = styled.header<ContentsHeaderProps>`
  position: fixed;
  width: 90dvw;
  max-width: ${(props) => props.isMenuOpen ? 'calc(100% - 315px)' : '100%'};
  z-index: 900;
  color: ${(props) => props.theme.textColorPrimary};  
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  .iconBox {
    background-color: ${(props) => props.theme.iconBoxColor};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    // transition: transform 0.2s ease-in-out;
  }

  #back_svg {
    // transform: rotate(180deg);
    margin: 10px;
    fill: ${(props) => props.theme.textColorPrimary};

  }
  #gnb_svg {
    transform: rotate(180deg);
    margin: 5px;
    fill: ${(props) => props.theme.textColorPrimary};
  }

`;

const slideUpTitle = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const slideUp = keyframes`
  from {
    transform: translateY(13px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Article = styled.article`
  display: block;
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
  overflow-x: hidden;


  & .title {
    margin: 80px 30px 30px;
    padding: 20px 5px;
    font-size: 40px;
    font-weight: 300;
    color: ${(props) => props.theme.textColorPrimary};
    animation: ${slideUpTitle} 0.5s ease-out;

    @media screen and (max-width: ${BREAK_POINTS.mobile}px) {
      margin: 80px 30px 50px;
    }
  }

  & .description {
    display: flex;
    // margin: 10px 35px;
    width: auto;
    animation: ${slideUp} 0.5s ease-out;

    @media screen and (max-width: 900px) {
      flex-direction: column-reverse;
    }
  }

  & .underline {
    text-decoration: underline 0.7px;
    cursor: pointer;
  }
`;
