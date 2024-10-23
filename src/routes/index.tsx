import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ChekitMvp2 from '@/components/ChekitMvp2';
import ChekitMvp from '@/components/ChekitMvp';
import ChekitAdmin from '@/components/ChekitAdmin';
import ChekitPartners from '@/components/ChekitPartners';
import ChekitApp from '@/components/ChekitApp';
import IntroContent from '@/components/IntroContent';
import Scrollbars from 'react-custom-scrollbars';

const AppRoutes = () => {
  const scrollbarRef = useRef<Scrollbars>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    scrollbarRef.current?.scrollToTop();
  }, [pathname]);

  return (
    <Scrollbars autoHide ref={scrollbarRef} style={{ width: 'auto', height: window.innerHeight }}>
      <Routes>
        <Route path="/mvp2" element={<ChekitMvp2 />} />
        <Route path="/mvp" element={<ChekitMvp />} />
        <Route path="/admin" element={<ChekitAdmin />} />
        <Route path="/partners" element={<ChekitPartners />} />
        <Route path="/app" element={<ChekitApp />} />
        <Route path="/" element={<IntroContent />} />
      </Routes>
    </Scrollbars>
  );
};

export default AppRoutes;
