import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoutes } from './ProtectedRoutes';
import { HOME, LOGIN, PROFILE } from '@src/utils/consts/routes';
import '../index.css';
import { PublicRoutes } from './PublicRoutes';

const Home = lazy(() => import('@src/pages/Home'));
const Login = lazy(() => import('@src/pages/Login'));
const Profile = lazy(() => import('@src/pages/Profile'));
const NotFound = lazy(() => import('@src/pages/NotFound'));

const LoadingSpinner: React.FC = () => (
  <div className='flex items-center justify-center min-h-screen'>
    <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
  </div>
);

const Application: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<LoadingSpinner />}>
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
    </Suspense>
  </BrowserRouter>
);

export default Application;
