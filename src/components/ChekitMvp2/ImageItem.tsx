import { Images } from '@components/IntroContent/style';
import Modal from '@components/Modal';
import React, { FC, useCallback, useState } from 'react';
import Mvp2Modal from './Mvp2Modal';

type ImageItemProps ={
  imageUrls: { 
    url: string;
    name: string;
  }[];
  setShowContentsModal: (flag: boolean) => void;
}

const ImageItem: FC<ImageItemProps> = ({ imageUrls, setShowContentsModal }) => {

  // const [showContentsModal, setShowContentsModal] = useState(false);

  const handleClick = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
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
    </>
  );
};

export default ImageItem;
