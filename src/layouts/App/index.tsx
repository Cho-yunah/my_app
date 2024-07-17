import React, { FC } from 'react';
import loadable from '@loadable/component';
import { Navigate, Route, Routes } from 'react-router-dom';

const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Workspace />} />
      <Route path="/workspace/*" element={<Workspace />} />
    </Routes>
  );
};

export default App;
