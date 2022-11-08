import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';

const NavigationRouter = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  );
};

export default NavigationRouter;
