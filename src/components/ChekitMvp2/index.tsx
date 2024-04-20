import { ImageContents, Images, MainDesc, MainImage, MainImageBox, SubDesc } from '@components/IntroContent/style';
import React from 'react';

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
            빠르게 만든 version 1 의 프로젝트가 시장 반응이 좋아지면서, 이전 데이터를 기반으로 한 version 2 까지
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
        <Images>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/yunaa-3cb91.appspot.com/o/chekit_cover.png?alt=media&token=a7abb798-a9da-43d1-9f13-d350eabd4614"
            alt="체킷 커버"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/yunaa-3cb91.appspot.com/o/chekit_main.png?alt=media&token=a4c7410f-dc66-4b48-80a9-54815d78d288"
            alt="체킷 커버"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/yunaa-3cb91.appspot.com/o/std_main.png?alt=media&token=8976427e-fef5-445a-90a0-0e4c5f74be97"
            alt="체킷 커버"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/yunaa-3cb91.appspot.com/o/lacto_list.png?alt=media&token=ec810256-54a9-4807-a6f0-ddfbe3539565"
            alt="체킷 커버"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/yunaa-3cb91.appspot.com/o/chekit_signup.png?alt=media&token=c872f8f4-eab4-4165-bbbb-b9c10218b5f1"
            alt="체킷 커버"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/yunaa-3cb91.appspot.com/o/chekit_survey1.png?alt=media&token=8b0df760-1b98-4653-ba68-d5a97cfc8192"
            alt="체킷 커버"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/yunaa-3cb91.appspot.com/o/chekit_coupon1.png?alt=media&token=f9db4fc0-c2c5-4e97-a161-001397cb8208"
            alt="체킷 커버"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/yunaa-3cb91.appspot.com/o/result_%20synthesis.png?alt=media&token=ca86477f-a12e-4511-98b8-d2b816ef8a65"
            alt="체킷 커버"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/yunaa-3cb91.appspot.com/o/result_map.png?alt=media&token=b3b26cd1-f4a0-4eef-8108-58304d7729b1"
            alt="체킷 커버"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/yunaa-3cb91.appspot.com/o/result_strain.png?alt=media&token=103e0b24-6278-4d6f-acde-4fbb27116f14"
            alt="체킷 커버"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/yunaa-3cb91.appspot.com/o/result_strain2.png?alt=media&token=e02c96a4-282f-4d9d-8d30-45d8c88d0a6d"
            alt="체킷 커버"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/yunaa-3cb91.appspot.com/o/survey_cover.png?alt=media&token=4b638d24-9d8f-483c-a716-6c45e1bfc9cc"
            alt="체킷 커버"
          />
        </Images>
      </ImageContents>
    </div>
  );
};

export default ChekitMvp2;
