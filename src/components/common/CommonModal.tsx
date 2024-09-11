import React, { FC } from 'react';
import {  DescContainer, DescriptionText, ImageContainer } from './styles';
import 'react-loading-skeleton/dist/skeleton.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CustomCarousel from './Carousel/Carousel';
import CreateModal from './CreateModal';
import { Carousel } from 'react-responsive-carousel';

interface Props {
  show: boolean;
  selectedImgNum: number;
  onCloseModal: () => void;
  setShowContentsModal: (flag: boolean) => void;
  InfoArr: { url: string; desc: string; subDesc?: string;};
  imageUrlArr: { url: string; desc: string; subDesc?: string;}[];
  isMobile?: string;
  isMenuOpen?: boolean;
}


const CommonModal: FC<Props> = ({ show, onCloseModal ,InfoArr, imageUrlArr, selectedImgNum, isMobile, isMenuOpen}) => {

  return (
    <CreateModal  show={show} onCloseModal={onCloseModal} >
        <ImageContainer>
          <Carousel selectedItem={selectedImgNum}>
            {imageUrlArr.map((item, index) => <img key={index} src={item.url} alt="Mobile Image" className={isMobile} />)}
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

export default CommonModal;
