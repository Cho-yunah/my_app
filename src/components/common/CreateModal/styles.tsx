import { BREAK_POINTS } from '@/constants';
import styled from '@emotion/styled';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
  width: 90%;
  height: 65%;
  position: fixed;
  top: 50%;
  left: 50%;
  border: none;
  border-radius: 12px;
  background-color: #e9ecef;
  background-color: orange;
  overflow-y: auto;
  box-shadow: 1px 3px 4px 1px rgba(102,102,102,0.18);
  transform: translate(-50%, -50%) scale(${props => props.isOpen ? '0' : '1'});
  transition: transform 0.5s ease-in-out; /* transform에 대한 애니메이션 */

  &:focus {
    outline: none; /* 포커스시 테두리 제거 */
  }

  /* 모달이 열릴 때의 애니메이션 */
  &.ReactModal__Content--after-open{
    transform: translate(-50%, -50%) scale(1);
    overflow-y: hidden;
  }
  
  // 화면 크기가 768px 이하인 경우
  @media (max-width: 768px) {
    &.ReactModal__Content--after-open{
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  

  @media screen and (min-width: ${BREAK_POINTS.tablet}px) {
    width: 
  }
  `;
  
  export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 18px;
  // width: 95dvw;
  min-width: 45dvw;
  min-height: 75dvh;
  max-width: 800px;

  & img {
    // width: 80%;
  }
  
  @media screen and (max-width: ${BREAK_POINTS.mobile}px) {
    width: 95dvw;
    height: 60dvh;
  }
  `;
  
  export const ImageContainer = styled.div`
  flex: 1;
  margin-right: 16px;

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
