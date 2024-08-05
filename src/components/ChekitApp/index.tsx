import { ImageContents, Images, MainDesc, MainImageBox, SubDesc } from '@components/IntroContent/style';
import React, { useCallback, useState } from 'react';
import { APP_INFO } from 'src/constants';
import ImageItem from '../common/ImageItem';
import WaveText from '@components/common/WaveText';
import ImageModal from '../common/ImageModal';
import imageUrl from '/images/app_main.png';

const ChekitApp = () => {
  const url = 'https://www.chekit.kr/Register-and-check-the-kitresults';
  const [clickedImage, setClickedImage] = useState({ url: '', desc: '' });
  const [showContentsModal, setShowContentsModal] = useState(false);
  const [selectedImgNum, setSelectedImgNum] = useState(0);

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
              키트와 앱을 통해 성매개 감염병 검사를 진행을 받으며, 원하는 의사의 진료를 받고, 약 처방전 전송 및 다운로드, 약 배송까지 받을 수 있어서 사용자들에게 편의를 증진시켰습니다.
              진행 상황을 앱 내에서 화면으로 확인할 수 있어서 사용자들이 진행 상황을 쉽게 파악할 수 있도록 하였습니다.
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
          <img style={{ aspectRatio: 5/3 }} src={imageUrl}/>
          <img style={{ aspectRatio: 5/3 }} src="https://firebasestorage.googleapis.com/v0/b/yunaa-3cb91.appspot.com/o/app_info.jpg?alt=media&token=8d14096e-c2a8-4586-accf-0fce4a3c3ab5" />
        </MainImageBox>
        <ImageContents>
          <WaveText text="Click the image below!" />
          <ImageItem 
            imageUrls={APP_INFO} 
            setClickedImage={setClickedImage}
            setShowContentsModal={setShowContentsModal} 
            setSelectedImgNum={setSelectedImgNum}
          />
        </ImageContents>
      </div>

      <ImageModal
        show={showContentsModal}
        selectedImgNum={selectedImgNum}
        setShowContentsModal={setShowContentsModal}
        onCloseModal={onCloseModal}
        InfoArr={clickedImage}
        imageUrlArr={APP_INFO}
        isMobile='mobile'
      /> 
    </>
  );
};

export default ChekitApp;
