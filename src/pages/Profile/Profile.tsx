import Header from '@src/components/Header/Header';
import Navigation from '@src/components/Navigation';
import { default as ProfileComponent } from '@src/components/Profile';

import React from 'react';

const Profile: React.FC = () => {
  return (
    <div>
      <Navigation />
      <section className='px-6 py-10' role='main'>
        <div className='w-full'>
          <Header>Profile Page</Header>
          <ProfileComponent />
        </div>
      </section>
    </div>
  );
};

export default Profile;
