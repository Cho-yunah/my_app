import React, { FC, useCallback } from 'react';
import Modal from 'react-modal';
import {  DescContainer, DescriptionText, ImageContainer, ModalContainer, ModalContent } from './styles';
import styled from '@emotion/styled';
import CreateModal from '@components/Modal';

interface Props {
  show: boolean;
  onCloseModal: () => void;
  setShowContentsModal: (flag: boolean) => void;
  imageUrls: { url: string }[];
}


const Mvp2Modal: FC<Props> = ({ show, onCloseModal ,imageUrls}) => {

  console.log(show)


  return (
    <CreateModal  show={show} onCloseModal={onCloseModal}>
        <ImageContainer>
          <img src={imageUrls[1].url} alt="Mobile Image" />
        </ImageContainer>
        <DescContainer>
          <DescriptionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            justo ac nunc lacinia tincidunt. Nulla facilisi.
          </DescriptionText>
        </DescContainer>
    </CreateModal>
  );
};

export default Mvp2Modal;
