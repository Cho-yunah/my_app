import React, { FC, useEffect, useState } from 'react';
import { Article, Aside, Container, Content, ContentsHeader, SideHeader, SideList } from './style';
import ArrowRight from '@assets/svg/ArrowRight';
import MenuHamburger from '@assets/svg/MenuHamburger';
import { Route, Routes } from 'react-router-dom';
import IntroContent from '@components/IntroContent';
import ChekitApp from '@components/ChekitApp';

const Workspace = () => {
  const workCount = 5;
  const [isMobileSize, setIsMobileSize] = useState(window.innerWidth < 800);
  const onLogout = () => {
    console.log('hhh');
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSize(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <Aside>
        <SideHeader>
          <div className="name">Yuna Cho</div>
          <div className="desc">Frontend Engineer</div>
          <div className="workCount">
            <span>{workCount}</span> works
          </div>
        </SideHeader>
        <SideList></SideList>
      </Aside>

      <Content id="content">
        <ContentsHeader>
          <div>{isMobileSize ? <MenuHamburger /> : <ArrowRight />}</div>
        </ContentsHeader>
        <Article>
          <Routes>
            <Route path="intro" element={<IntroContent />} />
            <Route path="chekitApp" element={<ChekitApp />} />
          </Routes>
        </Article>
      </Content>
    </Container>
  );
};

export default Workspace;
