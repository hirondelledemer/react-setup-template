import Header from '@src/components/Header/Header';
import Navigation from '@src/components/Navigation/Navigation';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <Navigation />
      <section className='px-6 py-10' role='main'>
        <div className='w-full'>
          <Header>Home page</Header>
          <div>this is a public home page</div>
        </div>
      </section>
    </div>
  );
};

Home.displayName = 'Home';
export default Home;
