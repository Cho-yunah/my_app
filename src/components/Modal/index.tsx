import React, { FC, useCallback } from 'react';
import { CloseModalButton, ModalContainer, ModalContent } from './styles';
import styled from '@emotion/styled';
import Modal from 'react-modal';
import { Scrollbars } from 'react-custom-scrollbars';


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
  // background-color: #f9f9f9;
  // background: linear-gradient(360deg, rgba(2,0,36,1) 0%, rgba(212,205,247,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(232,228,255,0.8) 100%);
  background: linear-gradient(360deg, rgba(249,249,249,1) 0%, rgba(249,249,249,1) 0%, rgba(249,249,249,1) 65%, rgba(237,234,255,1) 87%, rgba(217,211,250,0.8) 100%);
  min-width: 500px;
  min-height: 400px;
  max-height: 700px;
  overflow-y: auto;
  border-radius: 12px;
  box-shadow: 1px 3px 4px 1px rgba(102,102,102,0.18);
  transform: translate(-30%, -50%) scale(${props => props.isOpen ? '0' : '1'});
  transition: transform 0.5s ease-in-out; /* transform에 대한 애니메이션 */

  &:focus {
    outline: none; /* 포커스시 테두리 제거 */
  }

  /* 모달이 열릴 때의 애니메이션 */
  &.ReactModal__Content--after-open{
    transform: translate(-30%, -50%) scale(1);
    overflow-y: hidden;
  }

  /* 모달이 닫힐 때의 애니메이션 */
  &.ReactModal__Content--before-close {
    transform: translate(-30%, -50%) scale(0);
  }
  
  // 화면 크기가 768px 이하인 경우
  @media (max-width: 768px) {
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
          <CloseModalButton onClick={onCloseModal} style={{color: '#8c7af9'}}>&times;</CloseModalButton>
            <ModalContent >
            <Scrollbars autoHide style={{  height: 'auto'}}>
              {children}
            </Scrollbars>
            </ModalContent>
          </ModalContainer>
      </StyledModal>
    )
};

export default CreateModal;
