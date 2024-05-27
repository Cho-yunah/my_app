import { ImageContents, Images, MainDesc, MainImageBox, SubDesc } from '@components/IntroContent/style';
import React, { useState } from 'react';
import { MVP2_URLS } from 'src/constants';
import ImageItem from './ImageItem';
import WaveText from '@components/common/WaveText';
import Mvp2Modal from './Mvp2Modal';

const ChekitMvp2 = () => {
  const url = 'https://mvp.chekit.link/v/intro';

  const onClickPageLink = () => {
    window.open(url);
  };

  const [showContentsModal, setShowContentsModal] = useState(false);

  const onCloseModal = () => {
    setShowContentsModal(false);
  };

  return (
    <>
      <div>
        <div className="title">
          <span className="title_inner">Chekit MVP 2</span>
        </div>
        <div className="description">
          <MainDesc>
            <span>
              해당 프로젝트는 현재 회사에서 제공되어지는 메인 서비스입니다. 이전에 만들었던 mvp 모델을 기반으로 하여,
              사용자가 원하는 기능을 파악하고 기능을 추가했으며 동시에 고객 중심으로 UI/UX를 개선하였습니다. 이전 mvp
              에서 쌓은 데이터를 통해 개개인에 최적화된 결과를 제공하며, 사용자가 편리하게 추천된 상품을 구매까지 할 수
              있도록 비즈니스 플로우를 구성하였습니다.
            </span>
            <br />
            <p onClick={onClickPageLink}>Web Service Link</p>
          </MainDesc>
          <SubDesc>
            <li>Vue, Tailwind, pinia</li>
            <li>Team Project</li>
          </SubDesc>
        </div>
        <MainImageBox>
          <img src="https://firebasestorage.googleapis.com/v0/b/yunaa-3cb91.appspot.com/o/chekit_result.png?alt=media&token=353ba764-41ac-4ddf-8520-94ca36b0a9fa" />
        </MainImageBox>
        <ImageContents>
          <iframe
            src="https://player.vimeo.com/video/936508704?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            title="chekit Result Demo"
            className="iframe"
          ></iframe>
          {/* 글자 효과 넣어주기 */}
          <WaveText text="Click the image below!" />
          <ImageItem imageUrls={MVP2_URLS} />
        </ImageContents>
      </div>
      <Mvp2Modal
        show={showContentsModal}
        setShowContentsModal={setShowContentsModal}
        onCloseModal={onCloseModal}
        imageUrls={MVP2_URLS}
      />
    </>
  );
};

export default ChekitMvp2;
