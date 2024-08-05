import { breakPoints } from '@/assets/styles/palette';
import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  position: relative;
  `;
  
  export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  min-width: 45dvw;
  min-height: 75dvh; 
  max-width: 710px; 
  max-height: 700px;
  
  & img {
    // width: 80%;
  }
  
  @media screen and (max-width: ${breakPoints.mobile}px) {
    width: 95dvw;
    height: 60dvh;
  }
  `;
  
  export const ImageContainer = styled.div`
  flex: 1;
  margin-right: 16px;
  // background-color: skyblue;

  & img {
    width: 60%;
    height: auto;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
  }
`;

export const DescContainer = styled.div`
  flex: 1;
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  color: #333;
`;

export const CloseModalButton = styled.button`
  position: absolute;
  right: 1px;
  top: 2px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
  z-index: 100;
  padding: 10px 15px;
`;
