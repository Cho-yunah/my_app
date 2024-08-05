import React, { FC, useCallback } from 'react';
import { WebImages } from '../IntroContent/style';

type ImageItemProps ={
  imageUrls: { 
    url: string;
    name: string;
    desc?:string;
  }[];
  setClickedImage?: (flag: { url: string; desc: string }) => void;
  setShowContentsModal: (flag: boolean) => void;
  setSelectedImgNum: (num: number) => void;
  isPartner?: boolean;
}

const WebImageItem: FC<ImageItemProps> = ({ imageUrls, setShowContentsModal,setClickedImage, setSelectedImgNum, isPartner }) => {

  const handleClick = useCallback((e: React.MouseEvent<HTMLImageElement>, index:number) => {
    const target = e.target as HTMLImageElement;
    // console.log(target) 
    setSelectedImgNum(index);
    setClickedImage && setClickedImage({url: target.src, desc: target.alt })
    setShowContentsModal(true);
  },[])

  return (
    <>
    <WebImages className={isPartner ? 'partners' : undefined}>
        {imageUrls.map((i,index) => (
          <img key={i.name} src={i.url} alt={i.desc} onClick={(e) => handleClick(e, index)} id={i.name}/>
        ))}
    </WebImages>
    </>
  );
};

export default WebImageItem;
