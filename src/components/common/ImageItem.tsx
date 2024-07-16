import { Images } from '@components/IntroContent/style';
import React, { FC, useCallback, useState } from 'react';

type ImageItemProps ={
  imageUrls: { 
    url: string;
    name: string;
    desc?:string;
  }[];
  setClickedImage?: (flag: { url: string; desc: string }) => void;
  setShowContentsModal: (flag: boolean) => void;
  isApp?: boolean;
}

const ImageItem: FC<ImageItemProps> = ({ imageUrls, setShowContentsModal,setClickedImage, isApp }) => {

  const handleClick = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    console.log(target) 
    setClickedImage && setClickedImage({url: target.src, desc: target.alt })
    setShowContentsModal(true);
  },[])

  return (
    <>
    <Images>
      {imageUrls.map((i) => (
        <img className={isApp? 'app': ''} key={i.name} src={i.url} alt={i.desc} onClick={handleClick} id={i.name}/>
        ))}
    </Images>
    </>
  );
};

export default ImageItem;
