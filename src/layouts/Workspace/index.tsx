import React, { FC, useEffect, useState } from 'react';
import { Article, Aside, Container, Content, ContentsHeader, SideHeader, SideList } from './style';
import ArrowRight from '@assets/svg/ArrowRight';
import MenuHamburger from '@assets/svg/MenuHamburger';
import { Route, Routes } from 'react-router-dom';
import SideMenu from '@components/SideMenu';

import ChekitApp from '@components/ChekitApp';
import ChekitMvp from '@components/ChekitMvp';
import { Link } from 'react-router-dom';
import IntroContent from '@components/IntroContent';
import ChekitAdmin from '@components/ChekitAdmin';
import ChekitPartners from '@components/ChekitPartners';
import ChekitMvp2 from '@components/ChekitMvp2';
import { MVP2_URLS } from 'src/constants';

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
    <Container id="workspace">
      <Aside>
        <Link to="/workspace/intro">
          <SideHeader>
            <div className="name">Yuna Cho</div>
            <div className="desc">Frontend Engineer</div>
            <div className="workCount">
              <span>{workCount}</span> works
            </div>
          </SideHeader>
        </Link>
        <SideList>
          <SideMenu />
        </SideList>
      </Aside>

      <Content id="content">
        <ContentsHeader>
          <div>{isMobileSize ? <MenuHamburger /> : <ArrowRight />}</div>
        </ContentsHeader>
        <Article>
          <Routes>
            <Route path="/mvp2" element={<ChekitMvp2 />} />
            <Route path="/mvp" element={<ChekitMvp />} />
            <Route path="/admin" element={<ChekitAdmin />} />
            <Route path="/partners" element={<ChekitPartners />} />
            <Route path="/app" element={<ChekitApp />} />
            <Route path="/intro" element={<IntroContent />} />
          </Routes>
        </Article>
      </Content>
    </Container>
  );
};

export default Workspace;
