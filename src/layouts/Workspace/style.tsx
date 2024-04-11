import { breakPoints } from '@assets/styles/palette';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
`;

export const Aside = styled.aside`
  background-color: white;
  z-index: 10;
  width: 340px;
  min-width: 320px;
  height: 100vh;
  transform: matrix(1, 0, 0, 1, 0, 0);

  @media screen and (max-width: ${breakPoints.mobile}px) {
    background-color: pink;
    display: none;
  }
`;
export const SideHeader = styled.section`
  transition: 0.2s;
  padding: 38px;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.08);
  border-right: 1.5px solid rgba(0, 0, 0, 0.08);
  line-height: 22px;
  height: 240px;
  position: relative;
  cursor: pointer;

  & .name {
    font-size: 17px;
    font-weight: 500;
    color: #333;
  }

  & .desc {
    font-size: 13px;
  }

  & .workCount {
    position: absolute;
    bottom: 38px;
    font-size: 13px;
    font-weight: 400;
    color: rgba(102, 102, 102, 0.45);

    & span {
      font-weight: 500;
      font-size: 15px;
      color: rgba(51, 51, 51, 0.8);
    }
  }
`;
export const SideList = styled.section`
  height: calc(100% - 244px);
  border-right: 1.5px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
  color: #5e5e5e;
  width: 100%;
  max-width: 1150px;
  padding: 38px 52px 60px 52px;
  -webkit-font-smoothing: antialiased;
  // background-color: pink;
`;

export const ContentsHeader = styled.header`
  & #back_svg {
    transform: rotate(180deg);
  }
`;

export const Article = styled.article`
  display: block;
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);

  & .title {
    margin: 80px 0;
    padding: 20px 5px;
    font-size: 40px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);

    @media screen and (max-width: ${breakPoints.mobile}px) {
      margin-bottom: 60px;
    }
  }
`;
