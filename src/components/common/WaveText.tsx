import React, { DOMElement, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type'
import { WaveH2 } from './styles';


interface WaveTextProps {
  text: string;
}

const WaveText: React.FC<WaveTextProps> = ({ text }) => {

  const waveRef = useRef<HTMLSpanElement>(null);
  
  
  useEffect(() => {
    if (waveRef.current) {
      const split = new SplitType('#textItem', { types: 'chars' });
      const chars = split.chars;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    tl.fromTo(
      chars,
      { y: 0 },
      { duration: 1, y: -10, ease: 'power1.inOut', stagger: 0.1 }
    ).to(
      chars,
      { duration: 1, y: 0, ease: 'power1.inOut', stagger: 0.1 },
      '-=0.5' // 애니메이션 간격을 조절하기 위해 추가된 값
    );
    return () => tl.kill();
    }
  }, []);
  

  return (
        <WaveH2  id='textItem' ref={waveRef} style={{margin: '35px 0px 5px'}}>
          {text}
        </WaveH2>
  );
};

export default WaveText;
