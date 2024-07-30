import React, { FC } from 'react';
import {  DescContainer, DescriptionText, ImageContainer } from './styles';
import CreateModal from '@components/Modal';
import 'react-loading-skeleton/dist/skeleton.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

interface Props {
  show: boolean;
  selectedImgNum: number;
  onCloseModal: () => void;
  setShowContentsModal: (flag: boolean) => void;
  InfoArr: { url: string; desc: string; subDesc?: string;};
  imageUrlArr: { url: string; desc: string; subDesc?: string;}[];
  isMobile?: string;
}


const ImageModal: FC<Props> = ({ show, onCloseModal ,InfoArr, imageUrlArr, selectedImgNum, isMobile}) => {

  return (
    <CreateModal  show={show} onCloseModal={onCloseModal}>
        <ImageContainer>
          <Carousel selectedItem={selectedImgNum}>
            {imageUrlArr.map((item, index) => <img key={index} src={item.url} alt="Mobile Image" className={isMobile} />)}
            {/* <img src={InfoArr.url} alt="Mobile Image" /> */}
          </Carousel>
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
