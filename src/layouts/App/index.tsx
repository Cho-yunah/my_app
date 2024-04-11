import React from 'react';
import loadable from '@loadable/component';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = loadable(() => import('@pages/Home'));
const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate replace to="/workspace" />} />
      <Route path="/workspace" element={<Workspace />} />
    </Routes>
  );
};

export default App;
