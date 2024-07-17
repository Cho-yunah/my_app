import { ImageContents, Images, MainDesc, MainImageBox, SubDesc } from '@components/IntroContent/style';
import React, { useCallback, useState } from 'react';
import { MVP2_INFO } from 'src/constants';
import ImageItem from '../common/ImageItem';
import WaveText from '@components/common/WaveText';
import ImageModal from '../common/ImageModal';
import ProgressiveImage from '../common/ProgressiveImage';
import imageUrl from '@assets/images/chekit_result.png';


const ChekitMvp2 = () => {
  const url = 'https://www.chekit.kr/Register-and-check-the-kitresults';
  const [clickedImage, setClickedImage] = useState({ url: '', desc: '' });
  const [showContentsModal, setShowContentsModal] = useState(false);

  const onClickPageLink = useCallback(() => {
    window.open(url);
  },[url])

  const onCloseModal = useCallback(() => {
    setShowContentsModal(false);
  },[])

  return (
    <>
      <div>
        <div className="title">
          <span className="title_inner">Chekit Main Service</span>
        </div>
        <div className="description">
          <MainDesc>
            <span>
              해당 프로젝트는 현재 회사에서 제공되어지는 메인 서비스입니다. <br/>이전에 만들었던 mvp 모델을 기반으로 하여,
              사용자가 원하는 기능을 파악하고 기능을 추가했으며 동시에 고객 중심으로 UI/UX를 개선하였습니다. 이전 mvp
              에서 쌓은 데이터를 통해 개개인에 최적화된 결과를 제공하며, 사용자가 편리하게 추천된 상품을 구매까지 할 수
              있도록 비즈니스 플로우를 구성하였습니다.
            </span>
            <br />
            <p onClick={onClickPageLink} className='underline'>Web Service Link</p>
          </MainDesc>
          <SubDesc>
            <li>Vue, Tailwind, pinia</li>
            <li>Team Project</li>
          </SubDesc>
        </div>
        <MainImageBox>
          <img width='680' src={imageUrl} />
        </MainImageBox>
        <ImageContents>
          <iframe
            src="https://player.vimeo.com/video/936508704?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            title="chekit Result Demo"
            className="iframe"
          ></iframe>
          <WaveText text="Click the image below!" />
          <ImageItem 
            setClickedImage={setClickedImage}
            imageUrls={MVP2_INFO} 
            setShowContentsModal={setShowContentsModal} 
          />
        </ImageContents>
      </div>

      <ImageModal
        show={showContentsModal}
        setShowContentsModal={setShowContentsModal}
        onCloseModal={onCloseModal}
        InfoArr={clickedImage}
      /> 
    </>
  );
};

export default ChekitMvp2;
