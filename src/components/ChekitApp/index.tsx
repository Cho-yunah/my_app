import { ImageContents, Images, MainDesc, MainImageBox, SubDesc } from '@components/IntroContent/style';
import React, { useCallback, useState } from 'react';
import { APP_INFO, MVP2_INFO } from 'src/constants';
import ImageItem from '../common/ImageItem';
import WaveText from '@components/common/WaveText';
import ImageModal from '../common/ImageModal';

const ChekitApp = () => {
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
              해당 프로젝트는 비대면 진료 어플리케이션으로 현재는 운영을 중단했습니다. <br/>
              일반적인 비대면 진료를 포함해 규제 샌드박스를 통해 비대면 성병 검사 및 진료 서비스를 제공하였습니다.


            </span>
            <br />
            {/* <p onClick={onClickPageLink} className='underline'>Web Service Link</p> */}
          </MainDesc>
          <SubDesc>
            <li>Vue, Tailwind, pinia</li>
            <li>Team Project</li>
            <li className='text-bold'>Frontend Solo</li>

          </SubDesc>
        </div>
        <MainImageBox className='appImageBox'>
          <img width="100%" src="https://firebasestorage.googleapis.com/v0/b/yunaa-3cb91.appspot.com/o/app_main1.png?alt=media&token=ebbe9f59-2559-4cd2-884b-12b80e2900b0" />
          <img width="100%" src="https://firebasestorage.googleapis.com/v0/b/yunaa-3cb91.appspot.com/o/app_info.jpg?alt=media&token=8d14096e-c2a8-4586-accf-0fce4a3c3ab5" />
        </MainImageBox>
        <ImageContents>
          <WaveText text="Click the image below!" />
          <ImageItem 
            setClickedImage={setClickedImage}
            imageUrls={APP_INFO} 
            setShowContentsModal={setShowContentsModal} 
            isApp={true}
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

export default ChekitApp;
