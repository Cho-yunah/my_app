import React, { useCallback, useState } from 'react';
import { ImageContents, MainDesc, MainImageBox, SubDesc } from '../IntroContent/style';
import WaveText from '../common/WaveText';
import { PARTNERS_INFO } from '@/constants';
import WebImageItem from '../common/WebImageItem';
import ImageModal from '../common/ImageModal';
import imageUrl from '@assets/images/partners_main.png';

const ChekitPartners = () => {
  const [clickedImage, setClickedImage] = useState({ url: '', desc: '' });
  const [selectedImgNum, setSelectedImgNum] = useState(0);
  const [showContentsModal, setShowContentsModal] = useState(false);

  // const onClickPageLink = useCallback(() => {
  //   window.open(url);
  // },[url])

  const onCloseModal = useCallback(() => {
    setShowContentsModal(false);
  },[])

  return (
    <div>
      {/* 타이틀 및 설명 */}
      <div className="title">
        <span className="title_inner">Chekit Partners</span>
      </div>
      <div className="description">
        <MainDesc>
          <span>
            해당 프로젝트는 체킷 파트너스 프로젝트입니다. <br/> 
            체킷의 제품을 사용한 후, 자신의 닉네임 코드를 만들어 체킷의 서비스를 SNS에 홍보 및 추천하면, 이를 통해 수익을 창출할 수 있는 프로그램입니다. 
            3주간의 짧은 기간에 해야했던 프로젝트였는데, 소비자가 보는 사이트와 더불어 해당 웹을 관리하는 어드민 페이지까지 완성도 있게 만들어졌고, 모바일 화면까지 반응형으로 만들어졌습니다.
            약 200명의 파트너스 회원들이 활동을 하고 있고, 이를 통해 체킷 서비스의 마케팅 효과를 높이고 있습니다.
          </span>
          <br />
        </MainDesc>
        <SubDesc>
          <li>Vue, Styled-Component, Pinia</li>
          <li>Team Project</li>
        </SubDesc>
      </div>
      <MainImageBox >
          <img style={{boxShadow:'0 2px 5px 1px rgba(0, 0, 0, 0.12)', aspectRatio: 5/3}} src={imageUrl} alt='파트너스 이미지' /> 
      </MainImageBox>
        <ImageContents>
          <WaveText text="Click the image below!" />
          {/* <h3>고객 서비스 화면</h3> */}
          <WebImageItem 
            imageUrls={PARTNERS_INFO} 
            setClickedImage={setClickedImage}
            setShowContentsModal={setShowContentsModal} 
            setSelectedImgNum={setSelectedImgNum}
            isPartner={true}
          />
        </ImageContents>
        <ImageModal
        show={showContentsModal}
        selectedImgNum={selectedImgNum}
        setShowContentsModal={setShowContentsModal}
        onCloseModal={onCloseModal}
        InfoArr={clickedImage}
        imageUrlArr={PARTNERS_INFO}
      /> 
    </div>
  );
};

export default ChekitPartners;
