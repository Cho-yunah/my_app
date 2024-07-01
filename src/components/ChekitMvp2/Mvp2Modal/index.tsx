import React, { FC } from 'react';
import {  DescContainer, DescriptionText, ImageContainer, ModalContainer, ModalContent } from './styles';
import CreateModal from '@components/Modal';

interface Props {
  show: boolean;
  onCloseModal: () => void;
  setShowContentsModal: (flag: boolean) => void;
  mvp2Info: { url: string; desc: string; subDesc: string;}[];
}


const Mvp2Modal: FC<Props> = ({ show, onCloseModal ,mvp2Info}) => {

  return (
    <CreateModal  show={show} onCloseModal={onCloseModal}>
        <ImageContainer>
          <img src={mvp2Info[1].url} alt="Mobile Image" />
        </ImageContainer>
        {mvp2Info[1].subDesc && (
          <DescContainer>
            <DescriptionText>
              {mvp2Info[1].subDesc}
            </DescriptionText>
          </DescContainer>
        )}
    </CreateModal>
  );
};

export default Mvp2Modal;
