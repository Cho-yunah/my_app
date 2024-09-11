import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { CloseModalButton, StyledModal } from './styles';
import { ModalContainer, ModalContent } from '../styles';

interface ModalProps {
  show: boolean;
  onCloseModal: () => void;
  children: React.ReactNode;
  imageUrls?: string[]; // 이미지 배열 prop 추가
  isMenuOpen?: boolean;
}

const CreateModal: React.FC<ModalProps> = ({ show, children, onCloseModal, imageUrls, isMenuOpen }) => {
  if (!show) return null;

  return (
    <StyledModal isOpen={show} className={isMenuOpen? 'menuOpen': ''}>
      {/* <button onClick={onCloseModal}>Close Modal</button> */}
        <ModalContainer>
          <CloseModalButton onClick={onCloseModal} style={{color: '#8c7af9'}}>&times;</CloseModalButton>
            <ModalContent>
            <Scrollbars autoHide style={{height: 'auto'}}>
                {children}
            </Scrollbars>
            </ModalContent>
          </ModalContainer>
    </StyledModal>
  );
};

export default CreateModal;
