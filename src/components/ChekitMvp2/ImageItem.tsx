import { Images } from '@components/IntroContent/style';
import Modal from '@components/Modal';
import React, { FC, useCallback, useState } from 'react';
import Mvp2Modal from './Mvp2Modal';

type ImageItemProps ={
  imageUrls: { 
    url: string;
    name: string;
  }[];
  // modalShow: boolean;
  // setShowContentsModal: (flag: boolean) => void;
}

const ImageItem: FC<ImageItemProps> = ({ imageUrls}) => {

  const [showContentsModal, setShowContentsModal] = useState(false);

  const onCloseModal = () => {
    setShowContentsModal(false);
  };

  const handleClick = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    console.log(target)
    setShowContentsModal(true);
    // window.open(target.src);
  },[])

  return (
    <>
    <Images>
      {imageUrls.map((i) => (
        <img key={i.name} src={i.url} alt={i.name} onClick={handleClick}/>
        ))}
    </Images>
    <Mvp2Modal
        show={showContentsModal}
        setShowContentsModal={setShowContentsModal}
        onCloseModal={onCloseModal}
        imageUrls={imageUrls}
      />
    </>
  );
};

export default ImageItem;
