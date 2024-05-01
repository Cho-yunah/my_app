import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const CurrentBar = styled.div`
  width: 3px;
  position: absolute;
  margin-left: 0;
  height: 80px;
  background-color: #5c3ef1;
`;
export const MenuContainer = styled.ul`
  margin: 0px;
  padding: 22px 0 40px 0;
`;

export const ListItem = styled.li`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  padding: 5px 0px;
  margin: 5px;
`;

export const MenuItem = styled.div`
  transition: 0.2s;
  cursor: pointer;
  color: rgba(51, 51, 51, 0.6);
  height: 74px;

  & p {
    padding: 0 38px;
    adding-top: 17px;
    font-size: 15px;
    user-select: none;
  }
  & .tag {
    font-size: 13px;
    user-select: none;
    text-transform: capitalize;
  }

  &.active {
    color: #5c3ef1;
    font-weight: 700 !important;
  }
`;

export const Ripple = styled.div`
  position: absolute;
  background-color: rgba(51, 51, 51, 0.2);
  transform: scale(0);
  animation: rippleEffect 1.5s linear;
  ${({ style }) => `
    top: ${style?.top};
    left: ${style?.left};
    width: ${style?.width};
    height: ${style?.height};
  `}
`;

export const rippleEffect = `
  @keyframes rippleEffect {
    to {
      transform: scale(100);
      opacity: 0;
    }
  }
`;
