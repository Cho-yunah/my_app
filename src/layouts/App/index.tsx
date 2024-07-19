import React, { FC } from 'react';
import loadable from '@loadable/component';
import { Navigate, Route, Routes } from 'react-router-dom';

const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
  return (
    <Routes>
      <Route path="/workspace" element={<Workspace />} />
      <Route path="/workspace/*" element={<Workspace />} />
      <Route path="/*" element={<Workspace/>} />
    </Routes>
  );
};

export default App;
