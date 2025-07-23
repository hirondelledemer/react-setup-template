import React from 'react';

import LoginForm from '../LoginForm';

const LoginSection: React.FC = () => {
  return (
    <section className='px-6 py-10' role='main'>
      <div className='w-full'>
        <h1 className='mt-4 text-2xl font-medium text-gray-800'>
          Login To Your Account
        </h1>
        <LoginForm />
      </div>
    </section>
  );
};

LoginSection.displayName = 'LoginSection';
export default LoginSection;
