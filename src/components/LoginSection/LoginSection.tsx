import React from 'react';

import LoginForm from '../LoginForm';
import Header from '../Header/Header';

const LoginSection: React.FC = () => {
  return (
    <section className='px-6 py-10' role='main'>
      <div className='w-full'>
        <Header>Login To Your Account</Header>
        <LoginForm />
      </div>
    </section>
  );
};

LoginSection.displayName = 'LoginSection';
export default LoginSection;
