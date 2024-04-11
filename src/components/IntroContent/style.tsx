import { breakPoints } from '@assets/styles/palette';
import styled from '@emotion/styled';

export const MainDesc = styled.div`
  color: rgba(0, 0, 0, 0.6);
  width: 72%;
  float: left;
  margin-right: 10%;
  display: block;

  @media screen and (max-width: ${breakPoints.mobile}px) {
    width: 90%;
  }

  & ul {
    list-style-type: none;
    padding: 5px;

    @media screen and (max-width: ${breakPoints.mobile}px) {
      margin-top: 60px;
    }
  }

  & li {
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;

    & a {
      font-size: 15px;
      color: #222;
    }
  }
`;
