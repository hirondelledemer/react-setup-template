import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { ProtectedRoutes } from './ProtectedRoutes';
import Profile from '@src/pages/Profile';
import { HOME, LOGIN, PROFILE } from '@src/utils/consts/routes';
import '../index.css';
import NotFound from '@src/pages/NotFound';
import { PublicRoutes } from './PublicRoutes';

const Application: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route element={<PublicRoutes />}>
        <Route path={LOGIN} element={<Login />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path={PROFILE} element={<Profile />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Application;
