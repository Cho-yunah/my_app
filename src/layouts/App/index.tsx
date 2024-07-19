import React, { FC, useEffect, useState } from 'react';
import loadable from '@loadable/component';
import {Route, Routes } from 'react-router-dom';
import { Article, Aside, Container, Content, ContentsHeader, Overlay, SideHeader, SideList } from '../Workspace/style';
import ScrollToTop from '@/utils/ScrollToTop';
import Scrollbars from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import SideMenu from '@/components/SideMenu';
import MenuHamburger from '@/assets/svg/MenuHamburger';
import ArrowRight from '@/assets/svg/ArrowRight';
import ChekitMvp2 from '@/components/ChekitMvp2';
import ChekitMvp from '@/components/ChekitMvp';
import ChekitAdmin from '@/components/ChekitAdmin';
import ChekitPartners from '@/components/ChekitPartners';
import ChekitApp from '@/components/ChekitApp';
import IntroContent from '@/components/IntroContent';

const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
  const workCount = 5;
  const [isMobileSize, setIsMobileSize] = useState(window.innerWidth < 800);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (!isMobileSize) return;
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClick = () => {
    closeMenu();
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
      <ScrollToTop />
      <Aside id="aside" className={isMenuOpen ? 'open' : ''}>
      <Scrollbars autoHide  style={{ width:310, height: '100%' }}>
        <Link to="/">
          <SideHeader onClick={handleClick}>
            <div className="name">Yuna Cho</div>
            <div className="desc">Frontend Engineer</div>
            <div className="workCount">
              <span>{workCount}</span> works
            </div>
          </SideHeader>
        </Link>
        <SideList>
          <SideMenu isMobileSize={isMobileSize} closeMenu={closeMenu} />
        </SideList>
      </Scrollbars>
      </Aside>
      <Overlay className={isMenuOpen ? 'open' : ''} onClick={closeMenu} />

      <Content id="content" >
        <ContentsHeader>
          <div onClick={toggleMenu}>{isMobileSize ? <MenuHamburger /> : <ArrowRight />}</div>
        </ContentsHeader>
        <Article>
          <Routes>
            <Route path="/mvp2" element={<ChekitMvp2 />} />
            <Route path="/mvp" element={<ChekitMvp/>} />
            <Route path="/admin" element={<ChekitAdmin />} />
            <Route path="/partners" element={<ChekitPartners />} />
            <Route path="/app" element={<ChekitApp />} />
            <Route path="/" element={<IntroContent />} />
          </Routes>
        </Article>
        {/* <FloatingArrow /> */}

      </Content>
    </Container>
  );
};

export default App;
