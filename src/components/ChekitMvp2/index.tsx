import { ImageContents, Images, MainDesc, MainImageBox, SubDesc } from '@components/IntroContent/style';
import React from 'react';
import { MVP2_URLS } from 'src/constants';
import ImageItem from './ImageItem';
import WaveText from '@components/common/WaveText';

const ChekitMvp2 = () => {
  const url = 'https://mvp.chekit.link/v/intro';
  const onClickPageLink = () => {
    window.open(url);
  };
  return (
    <div>
      <div className="title">
        <span className="title_inner">Chekit MVP 2</span>
      </div>
      <div className="description">
        <MainDesc>
          <span>
            해당 프로젝트는 이전 회사의 주 서비스를 피봇하게 되는 과정에서 진행한 프로젝트입니다. 기능을 최소화하고
            빠르게 만든 version 1 의 프로젝j트가 시장 반응이 좋아지면서, 이전 데이터를 기반으로 한 version 2 까지
            진행하게 되었습니다. 바른생각, 분당서울대학교 병원
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
  );
};

export default ChekitMvp2;
