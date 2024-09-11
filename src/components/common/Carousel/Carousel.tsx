import React from 'react';
// import CarouselItem from '';
import { CarouselContainer } from './styles';
// import ArrowButton from './ArrowButton';
// import NavigationDots from './NavigationDots';
// import { useCarousel } from './useCarousel';

type CarouselProps = {
  slideArr: { url: string; desc: string; subDesc?: string;}[];
};

const Carousel: React.FC<CarouselProps> = ({slideArr}) => {
//   const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarousel();

  const slides = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

  return (
    <CarouselContainer>
        <p>하이하이</p>
        <div >
            {slideArr.map((slide, index) => (
                <div key={index}>
                    <img src={slide.url} alt={`slide ${index}`} />
                </div>
            ))}
        </div>
    </CarouselContainer>
  );
};

export default Carousel;
