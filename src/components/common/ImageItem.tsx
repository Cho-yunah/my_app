import { Images } from '@components/IntroContent/style';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


type ImageItemProps ={
  imageUrls: { 
    url: string;
    name: string;
    desc?:string;
  }[];
  setClickedImage?: (flag: { url: string; desc: string }) => void;
  setShowContentsModal: (flag: boolean) => void;
  setSelectedImgNum: (num: number) => void;
  isApp?: boolean;
  contentsName?: string;
}

const ImageItem: FC<ImageItemProps> = ({ imageUrls, setShowContentsModal,setClickedImage, setSelectedImgNum, isApp, contentsName }) => {
  const [isOnLoad, setIsOnLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOnLoad(true);
    }, 1000);
  },[])

  const handleClick = useCallback((e: React.MouseEvent<HTMLImageElement>, index:number) => {
    const target = e.target as HTMLImageElement;
    setSelectedImgNum(index);
    setClickedImage && setClickedImage({url: target.src, desc: target.alt })
    setShowContentsModal(true);
  },[])

  return (
    <Images>
      {imageUrls.map((i, index) => (
          <LazyLoadImage
            key={i.name+index}
            useIntersectionObserver={true}	
            src={i.url} 
            effect="blur"      
            wrapperProps={{
              style: {transitionDelay: "0.3s"},
            }}   
            alt={i.desc}
            width={194} 
            height={contentsName=='mvp1'? 354 : 374}
            onClick={(e) => handleClick(e, index)}          />
        ))}
    </Images>
  );
};

export default ImageItem;
