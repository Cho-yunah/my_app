import styled from '@emotion/styled';

export const CurrentBar = styled.div`
  width: 3px;
  position: absolute;
  margin-left: 0;
  height: 72px;
  background-color: #5c3ef1;
`;
export const MenuContainer = styled.ul`
  margin: 0px;
  padding: 22px 0 40px 0;
`;

export const MenuItem = styled.li`
  transition: 0.2s;
  position: relative;
  cursor: pointer;
  color: rgba(51, 51, 51, 0.6);
  height: 74px;
  -webkit-user-select: none;

  & div {
    padding: 0 38px;
    adding-top: 17px;
    font-size: 15px;
    user-select: none;
    font-weight: 500;
  }
  & .tag {
    font-size: 13px;
    user-select: none;
    text-transform: capitalize;
  }

  & .active {
    color: #5c3ef1;
  }
`;
