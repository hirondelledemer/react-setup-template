import Header from '@src/components/Header/Header';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <section className='px-6 py-10' role='main'>
        <div className='w-full'>
          <h1 className='mt-4 text-2xl font-medium text-gray-800'>Home page</h1>
          <div>this is a public home page</div>
        </div>
      </section>
    </div>
  );
};

Home.displayName = 'Home';
export default Home;
