import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Article, Aside, Container, Content, ContentsHeader, Overlay, SideHeader, SideList } from './style';
import MenuHamburger from '@/assets/svg/MenuHamburger';
import ArrowRight from '@/assets/svg/ArrowRight';

import SideMenu from '@/components/SideMenu';
import AppRoutes from '@/routes';
import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from '@/styles/theme';
import { MdLightMode, MdModeNight } from 'react-icons/md';

const App = () => {
  const workCount = 5;
  const [isMobileSize, setIsMobileSize] = useState(window.innerWidth < 800);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
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

  useEffect(() => {
    isMobileSize ? setIsMenuOpen(false) : setIsMenuOpen(true);
  }, [isMobileSize]);

  useEffect(() => {
    // 다크 모드 체크
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Aside className={isMenuOpen ? 'open' : 'none'}>
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
        </Aside>

        <Content isMenuOpen={isMenuOpen} isMobileSize={isMobileSize}>
          <ContentsHeader isMenuOpen={isMenuOpen} isMobileSize={isMobileSize}>
            <div onClick={toggleMenu}>{!isMenuOpen ? <MenuHamburger /> : <ArrowRight />}</div>
            <div className="iconBox" onClick={toggleDarkMode}>
              {isDarkMode ? <MdLightMode size={20} /> : <MdModeNight size={20} />}
            </div>
          </ContentsHeader>

          <Article isMenuOpen={isMenuOpen}>
            <AppRoutes />
          </Article>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default App;
