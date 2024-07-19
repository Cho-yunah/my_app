import React, { FC } from 'react';
import loadable from '@loadable/component';
import { Navigate, Route, Routes } from 'react-router-dom';
import ChekitMvp2 from '@/components/ChekitMvp2';

const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
  return (
    <Routes>
      <Route path="/workspace" element={<Workspace />} />
      <Route path="/*" element={<Workspace/>} />
      <Route path="/workspace/*" element={<Workspace />} />
    </Routes>
  );
};

export default App;
