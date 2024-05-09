import React, { FC, useCallback } from 'react';
import Modal from 'react-modal';
import {  DescContainer, DescriptionText, ImageContainer, ModalContainer, ModalContent, modalCustomStyles } from './styles';
import { CloseModalButton } from '@components/Modal/styles';
import styled from '@emotion/styled';

interface Props {
  show: boolean;
  onCloseModal: () => void;
  setShowContentsModal: (flag: boolean) => void;
  imageUrls: { url: string }[];
}

const StyledModal = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-30%, -50%);
  border: none;
  background-color: #f9f9f9;
  padding: 10px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  border-radius: 12px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.16);
  
  
  // 화면 크기가 768px 이하인 경우
  @media (max-width: 768px) {
    min-width: 550px;
    max-width: 80%;
    max-height: 80%;
    transform: translate(-50%, -50%);
  }
`;


const Mvp2Modal: FC<Props> = ({ show, onCloseModal ,imageUrls}) => {

  console.log(show)


  return (
    <StyledModal isOpen={show} onRequestClose={onCloseModal} >
      <ModalContainer>
      <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
        <ModalContent>
          <ImageContainer>
            <img src={imageUrls[1].url} alt="Mobile Image" />
          </ImageContainer>
          <DescContainer>
            <DescriptionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              justo ac nunc lacinia tincidunt. Nulla facilisi.
            </DescriptionText>
          </DescContainer>
        </ModalContent>
    </ModalContainer>
    </StyledModal>
  );
};

export default Mvp2Modal;
