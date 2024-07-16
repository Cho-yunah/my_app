// import { Images } from '@components/IntroContent/style';
import React, { FC, useCallback, useState } from 'react';
import { WebImages } from '../IntroContent/style';

type ImageItemProps ={
  imageUrls: { 
    url: string;
    name: string;
    desc?:string;
  }[];
  setClickedImage?: (flag: { url: string; desc: string }) => void;
  setShowContentsModal: (flag: boolean) => void;
}

const WebImageItem: FC<ImageItemProps> = ({ imageUrls, setShowContentsModal,setClickedImage }) => {

  const handleClick = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    console.log(target) 
    setClickedImage && setClickedImage({url: target.src, desc: target.alt })
    setShowContentsModal(true);
  },[])

  return (
    <>
    <WebImages>
      {imageUrls.map((i) => (
        <img key={i.name} src={i.url} alt={i.desc} onClick={handleClick} id={i.name}/>
        ))}
    </WebImages>
    </>
  );
};

export default WebImageItem;
