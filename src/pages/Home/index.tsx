import ChekitApp from '@components/ChekitApp';
import ChekitMvp from '@components/ChekitMvp';
import IntroContent from '@components/IntroContent';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      hello!!
      <Routes>
        <Route path="/workspace/mvp" element={<ChekitMvp />} />
        <Route path="/workspace/app" element={<ChekitApp />} />
        {/* <Route path="/workspace/:workspace" element={<Home />} /> */}
        <Route path="/:workspace" element={<IntroContent />} />
      </Routes>
    </div>
  );
};

export default Home;
