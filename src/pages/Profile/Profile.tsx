import Header from '@src/components/Navigation';
import { default as ProfileComponent } from '@src/components/Profile';

import React from 'react';

const Profile: React.FC = () => {
  return (
    <div>
      <Header />
      <section className='px-6 py-10' role='main'>
        <div className='w-full'>
          {/* todo: export header */}
          <h1 className='mt-4 mb-6 text-2xl font-medium text-gray-800'>
            Profile Page
          </h1>
          <ProfileComponent />
        </div>
      </section>
    </div>
  );
};

export default Profile;
