import React, { useCallback, useEffect, useState } from 'react';
import { ImageContents, MainDesc, MainImageBox, SubDesc } from '../IntroContent/style';
import WaveText from '../common/WaveText';
import { ADMIN_INFO } from '@/constants';
import WebImageItem from '../common/WebImageItem';
import imageUrl from '/images/admin_main.png';
import ImageModal from '../common/ImageModal';

const ChekitAdmin = () => {
  const [clickedImage, setClickedImage] = useState({ url: '', desc: '' });
  const [selectedImgNum, setSelectedImgNum] = useState(0);
  const [showContentsModal, setShowContentsModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setShowContentsModal(false);
  },[])

  useEffect(() => {
    console.log('캐러셀 넘버', selectedImgNum)
  },[selectedImgNum])

  return (
    <>
    <div>
      {/* 타이틀 및 설명 */}
      <div className="title">
        <span className="title_inner">Chekit Admin Renew</span>
      </div>
      <div className="description">
        <MainDesc>
          <span>
            해당 프로젝트는 기존의 어드민(관리자) 페이지를 리뉴얼한 프로젝트입니다. <br/> 
            기존에 사용하던 어드민이 서비스 별로 분리되어 있어서 서비스 별로 데이터를 확인하기 어렵고, 관리의 효율성이 떨어지는 문제점이 있었습니다.
            이를 해결하기 위해 여러개로 나눠져있던 어드민들을 하나로 통합하고, 관리자가 원하는 정보를 빠르게 확인할 수 있도록 UI/UX를 개선하였습니다.
            또 관리자의 필요를 반영하여 원하는 정보를 빠르게 확인할 수 있도록 필터링 기능과 검색 기능, 쿠폰 발급, 고객 관리 등의 기능을 추가였습니다.
          </span>
          <br />
        </MainDesc>
        <SubDesc>
          <li>React, Styled-Component, Recoil</li>
          <li>Team Project</li>
        </SubDesc>
      </div>
      <MainImageBox >
          <img style={{boxShadow:'0 2px 5px 1px rgba(0, 0, 0, 0.12)', aspectRatio: 5/3.4}} src={imageUrl} />
        </MainImageBox>
        <ImageContents>
          <WaveText text="Click the image below!" />
          <WebImageItem 
            imageUrls={ADMIN_INFO}
            setShowContentsModal={setShowContentsModal} 
            setClickedImage={setClickedImage}
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
        imageUrlArr={ADMIN_INFO}
      /> 
    </>
  );
};

export default ChekitAdmin;
