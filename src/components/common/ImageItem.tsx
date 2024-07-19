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
  isApp?: boolean;
}

const ImageItem: FC<ImageItemProps> = ({ imageUrls, setShowContentsModal,setClickedImage, isApp }) => {
  const [isOnLoad, setIsOnLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOnLoad(true);
    }, 1000);
  },[])

  const handleClick = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    console.log(target) 
    setClickedImage && setClickedImage({url: target.src, desc: target.alt })
    setShowContentsModal(true);
  },[])

  return (
    <Images>


      {imageUrls.map((i, index) => (
           <LazyLoadImage
           key={i.name+index}
            useIntersectionObserver={true}	
            src={i.url} // use normal <img> attributes as props
            effect="blur"      
            wrapperProps={{
              style: {transitionDelay: "0.3s"},
            }}   
            alt={i.desc}
            width={194} 
            height={356}
            onClick={handleClick}
          />
        ))}
    </Images>
  );
};

export default ImageItem;
