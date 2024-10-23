import { BREAK_POINTS } from '@/constants';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden; /* 가로 스크롤 방지 */
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColorPrimary};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`;

type LayoutProps = {
  isMenuOpen?: boolean;
  isMobileSize?: boolean;
};

export const Aside = styled.aside<LayoutProps>`
  width: 310px;
  min-width: 310px;
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  height: 100vh;
  overflow-y: auto; /* 세로 스크롤 허용 */
  transition: transform 0.4s ease-in-out;
  z-index: 1000;
  position: relative; /* Fixed 대신 Relative 사용 */

  // &.none {
  //   transform: translateX(-100%);
  // width: 0; /* 너비를 0으로 */
  // min-width: 0;
  //   overflow: hidden; /* 메뉴가 사라진 후 내용 숨기기 */
  // }

  &.none {
    transform: translateX(-100%);
    width: 0; /* 메뉴가 공간은 그대로 메뉴 항목만 사라짐 */
    min-width: 0;
    overflow: hidden; /* 메뉴가 사라진 후 내용 숨기기 */
  }

  &.open {
    transform: translateX(0);
  }

  @media screen and (max-width: ${BREAK_POINTS.mobile}px) {
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(${(props) => (props.className === 'open' ? '0' : '-100%')});
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

export const Content = styled.div<LayoutProps>`
  height: 100%;
  overflow-y: auto;
  flex: 1;
  flex-direction: column;
  padding: 10px;
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  color: ${(props) => props.theme.textColorPrimary};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  @media screen and (min-width: ${BREAK_POINTS.tablet}px) {
    max-width: 1360px;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: ${BREAK_POINTS.mobile}px) {
    margin-left: 0px;
    padding-top: 0px;
  }
`;

export const ContentsHeader = styled.header<LayoutProps>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isMenuOpen ? '310px' : '0')}; /* 메뉴에 따라 위치 조정 */
  width: ${(props) => (props.isMenuOpen ? 'calc(100% - 310px)' : '100%')}; /* 메뉴 열림 상태에 맞게 너비 조정 */
  z-index: 900;
  display: flex;
  justify-content: space-between;
  align-items: center; /* 세로 중앙 정렬 */
  padding: 10px 20px; /* 상하 좌우 여백 */
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  color: ${(props) => props.theme.textColorPrimary};
  transition:
    left 0.3s ease-in-out,
    width 0.3s ease-in-out; /* 부드러운 전환 효과 */

  .iconBox {
    background-color: ${(props) => props.theme.iconBoxColor};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 5px; /* 좌우 여백 */
  }

  #back_svg,
  #gnb_svg {
    fill: ${(props) => props.theme.textColorPrimary};
    margin: 5px;
  }

  #gnb_svg {
    transform: rotate(180deg);
  }

  @media screen and (max-width: ${BREAK_POINTS.mobile}px) {
    left: 0; /* 모바일에서는 메뉴에 상관없이 헤더는 전체 화면에 붙음 */
    width: 100%; /* 모바일에서는 항상 전체 너비 사용 */
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

type ArticleProps = {
  isMenuOpen: boolean;
  isMobileSize?: boolean;
  isFullSize?: boolean;
};

export const Article = styled.article<LayoutProps>`
  flex: 1; /* Aside가 차지하지 않는 나머지 공간 사용 */
  overflow: auto; /* 세로 스크롤 허용 */
  transition: margin-left 0.3s ease-in-out;

  & .title {
    margin: 80px 30px 10px;
    font-size: 40px;
    font-weight: 300;
    animation: ${slideUpTitle} 0.5s ease-out;
  }

  & .description {
    display: flex;
    // max-width: 800px;
    animation: ${slideUp} 0.5s ease-out;

    @media screen and (max-width: 900px) {
      flex-direction: column-reverse;
    }
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
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s;

  &.open {
    opacity: 1;
    visibility: visible;
  }
`;
