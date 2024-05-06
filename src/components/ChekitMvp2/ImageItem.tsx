import { Images } from '@components/IntroContent/style';
import React, { FC } from 'react';

type ImageItemProps ={
  imageUrls: { url: string; }[];
}

const ImageItem: FC<ImageItemProps> = ({ imageUrls }) => {

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    window.open(target.src);
  }
  return (
    <Images>
      {imageUrls.map((imageUrl, index) => (
        <img key={index} src={imageUrl.url} alt={`Image ${index}`} onClick={handleClick}/>
      ))}
    </Images>
  );
};

export default ImageItem;
