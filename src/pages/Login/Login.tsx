import React from 'react';
import Navigation from '@src/components/Navigation/Navigation';
import LoginSection from '@src/components/LoginSection';

const Login: React.FC = () => {
  return (
    <div className='h-screen'>
      <Navigation />
      <LoginSection />
    </div>
  );
};

export default Login;
