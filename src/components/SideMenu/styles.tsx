import styled from '@emotion/styled';

export const CurrentBar = styled.div`
  width: 4px;
  position: absolute;
  margin-left: 0;
  height: 100%;
  background-color: #5c3ef1;
`;
export const MenuContainer = styled.ul`
  margin: 0px;
  padding: 0px 0 40px 0;
`;

export const ListItem = styled.li`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
`;
    
    export const MenuItem = styled.div`
    transition: 0.2s;
    cursor: pointer;
    color: rgba(51, 51, 51, 0.6);
    // height: 100%;
    padding: 7px 0;
    // border: 1px solid black;

  & p {
    padding: 0 38px;
    font-size: 15px;
    user-select: none;

    &.title {
      margin-bottom: 0.6em;
    }
    
    &.tag {
      margin-top: 0.6em;
        font-size: 13px;
        user-select: none;
      }
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
