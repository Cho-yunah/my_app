import Compressor from "compressorjs";
import React from 'react';
import { ImgHTMLAttributes, useEffect, useState } from "react";
// import imageUrl from '../../assets/images/chekit_result.png';
 
interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string,
}
 

const ProgressiveImage = ({src}: IImageProps) => {
  const [imageSrc, setImageSrc] = useState('');
console.log(src)
  useEffect(() => {
    handleImageUpload(src);
  }, [src]);

  const handleImageUpload = (src: any) => {
    // const file = event.target.files[0];
    const blob = new Blob([src], { type: 'image/jpeg' });
    const blobURL = URL.createObjectURL(blob);

    if (src) {
      new Compressor(blob, {
        quality: 0.8,
        convertSize: Infinity,
        success(result) {
          new Compressor(result, {
            quality: 0.8,
            mimeType: 'image/jpeg',
            convertSize: Infinity,
            success(result) {
              const url = URL.createObjectURL(result);
              console.log(url)
              setImageSrc(url);
            },
            error(err) {
              console.error('Conversion error:', err);
            },
          });
        },
        error(err) {
          console.error('Compression error:', err);
        },
      });
    }
  };
 
  return (
    <div>
      {/* <input type="file" onChange={handleImageUpload} /> */}
      {imageSrc && <img src={imageSrc} alt="Progressive JPEG" />}
    </div>
  );
};
 
export default ProgressiveImage;
