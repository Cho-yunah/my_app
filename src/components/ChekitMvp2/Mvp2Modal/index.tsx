import React, { FC } from 'react';
import {  DescContainer, DescriptionText, ImageContainer, ModalContainer, ModalContent } from './styles';
import CreateModal from '@components/Modal';

interface Props {
  show: boolean;
  onCloseModal: () => void;
  setShowContentsModal: (flag: boolean) => void;
  InfoArr: { url: string; desc: string; subDesc: string;}[];
}


const Mvp2Modal: FC<Props> = ({ show, onCloseModal ,InfoArr}) => {


  return (
    // <CreateModal  show={show} onCloseModal={onCloseModal}>
    //     {/* <ImageContainer>
    //       <img src={InfoArr[5].url} alt="Mobile Image" />
    //     </ImageContainer>
    //     {InfoArr[5].subDesc && (
    //       <DescContainer>
    //         <DescriptionText>
    //           {InfoArr[1].subDesc}
    //         </DescriptionText>
    //       </DescContainer>
    //     )} */}
    // </CreateModal>
    <div></div>
  );
};

export default Mvp2Modal;
