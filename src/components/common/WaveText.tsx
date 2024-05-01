import React, { DOMElement, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type'
import { WaveH2 } from './styles';


interface WaveTextProps {
  text: string;
}

const WaveText: React.FC<WaveTextProps> = ({ text }) => {

  // const textItem = useRef<HTMLSpanElement>(null);
  const split = new SplitType('.textItem', { types: 'chars' });

  const chars = split.chars;
  console.log(chars);

  // gsap.fromTo(
  //   chars,
  //   { 
  //     y: 10,
  //     opacity: 0
  //   },
  //   {
  //     y: 0,
  //     opacity: 1,
  //     stagger: 0.05,
  //     duration: 2,
  //     ease: 'power4.out',
  //   }
  // )

  useEffect(() => {
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
  }, []);

  //     // let split =new SplitText("span", {type:"chars"});
      
  //     gsap.from(split.chars, { // <- selector text, scoped to this component!
  //       opacity: 0,
  //       y: 100,
  //       ease: "back",
  //       duration: 1,
  //       stagger: 0.1
  //     });
      
  

  return (
        <WaveH2  className='textItem'>
          {text}
        </WaveH2>
  );
};

export default WaveText;
