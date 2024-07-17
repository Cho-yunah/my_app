import React, { FC, useEffect, useState } from 'react';
import {  DescContainer, DescriptionText, ImageContainer, ModalContainer, ModalContent } from './styles';
import CreateModal from '@components/Modal';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

interface Props {
  show: boolean;
  onCloseModal: () => void;
  setShowContentsModal: (flag: boolean) => void;
  InfoArr: { url: string; desc: string; subDesc?: string;};
}


const ImageModal: FC<Props> = ({ show, onCloseModal ,InfoArr}) => {

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
