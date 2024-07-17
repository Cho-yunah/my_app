import React, { FC, useCallback } from 'react';
import { CloseModalButton, ModalContainer, ModalContent } from './styles';
import styled from '@emotion/styled';
import Modal from 'react-modal';

interface ModalProps {
  show: boolean;
  onCloseModal: () => void;
  children: React.ReactNode;
}

const StyledModal = styled(Modal)`
  position: fixed;
  top: 52%;
  left: 50%;
  border: none;
  background-color: #f9f9f9;
  padding: 10px;
  max-width: 80dvw;
  max-height: 85dvh;
  overflow-y: auto;
  border-radius: 12px;
  box-shadow: 1px 3px 6px 1px rgba(0, 0, 0, 0.18);
  transform: translate(-30%, -50%) scale(${props => props.isOpen ? '0' : '1'});
  transition: transform 0.5s ease-in-out; /* transform에 대한 애니메이션 */

  &:focus {
    outline: none; /* 포커스시 테두리 제거 */
  }

  /* 모달이 열릴 때의 애니메이션 */
  &.ReactModal__Content--after-open{
    transform: translate(-30%, -50%) scale(1);
  }

  /* 모달이 닫힐 때의 애니메이션 */
  &.ReactModal__Content--before-close {
    transform: translate(-30%, -50%) scale(0);
  }
  
  // 화면 크기가 768px 이하인 경우
  @media (max-width: 768px) {
    min-width: 550px;
    &.ReactModal__Content--after-open{
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const CreateModal:FC<ModalProps> = ({show, children, onCloseModal}) => {

    const stopPropagation = useCallback((e)=> {
      e.stopPropagation();
    },[])

    if(!show) {
      document.body.style.overflow = 'auto';
      return null;
    }

    return (
      <StyledModal isOpen={show} onRequestClose={onCloseModal} >
        <ModalContainer>
        <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
          <ModalContent>
            {children}
          </ModalContent>
        </ModalContainer>
      </StyledModal>
    )
};

export default CreateModal;
