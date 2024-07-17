import React, { FC } from 'react';
import {  DescContainer, DescriptionText, ImageContainer, ModalContainer, ModalContent } from './styles';
import CreateModal from '@components/Modal';

interface Props {
  show: boolean;
  onCloseModal: () => void;
  setShowContentsModal: (flag: boolean) => void;
  InfoArr: { url: string; desc: string; subDesc?: string;};
}


const ImageModal: FC<Props> = ({ show, onCloseModal ,InfoArr}) => {

  console.log(InfoArr)
  return (
    <CreateModal  show={show} onCloseModal={onCloseModal}>
        <ImageContainer>
          <img src={InfoArr.url} alt="Mobile Image" />
        </ImageContainer>
        {InfoArr.subDesc && (
          <DescContainer>
            <DescriptionText>
              {InfoArr.desc}
            </DescriptionText>
          </DescContainer>
        )}
    </CreateModal>
  );
};

export default ImageModal;
