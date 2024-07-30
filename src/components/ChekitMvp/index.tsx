import React, { useCallback, useState } from 'react';
import { ImageContents, MainDesc, MainImageBox, SubDesc } from '@components/IntroContent/style';
import WaveText from '../common/WaveText';
import ImageItem from '../common/ImageItem';
import { MVP1_INFO } from '@/constants';
import imageUrl from '../../../public/images/mvp1_main.png';
import ImageModal from '../common/ImageModal';

const ChekitMvp = () => {
  const [clickedImage, setClickedImage] = useState({ url: '', desc: '' });
  const [selectedImgNum, setSelectedImgNum] = useState(0);
  const [showContentsModal, setShowContentsModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setShowContentsModal(false);
  },[])

  return (
    <>
    <div>
      {/* 타이틀 및 설명 */}
      <div className="title">
        <span className="title_inner">Chekit MVP</span>
      </div>
      <div className="description">
        <MainDesc>
          <span>
            해당 프로젝트는 이전 프로덕트인 비대면 진료 앱 서비스를 종료함과 동시에 새롭게 런칭한 웹 서비스입니다. <br/>
            회사의 메인 프로덕트의 전환을 최대한 빠르게 가져가기 위해 구현 기능은 최소화하고, 해당 서비스가 시장에서 경쟁력이 있는지 검증한 프로젝트였습니다.
            최소한의 구현으로 시작한 해당 프로젝트가 시장에서 꽤나 호응을 얻어, 이후 버전 2를 기획하게 되었고, 현재 회사의 메인 프로덕트 입니다.
          </span>
          <br />
        </MainDesc>
        <SubDesc>
          <li>React, Styled-Component, Recoil</li>
          <li>Team Project</li>
          {/* <li>Frontend Solo</li> */}
          <li className='text-bold'>Frontend Solo</li>

        </SubDesc>
      </div>
      <MainImageBox>
          <img width="600" height="600" src={imageUrl} />
        </MainImageBox>
        <ImageContents>
          <WaveText text="Click the image below!" />
            <ImageItem 
              imageUrls={MVP1_INFO} 
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
        imageUrlArr={MVP1_INFO}
        isMobile='mobile'
      /> 
    </>
  );
};

export default ChekitMvp;
