import Button, { Variant } from '@src/components/Button';
import { HOME } from '@src/utils/consts/routes';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../components/Text';
import Header from '@src/components/Header/Header';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className='bg-white'>
      <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
        <div>
          <Header>We can&apos;t find that page</Header>
          <Text>
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </Text>

          <div className='flex items-center mt-6 gap-x-3'>
            <Button onClick={() => navigate(HOME)}>Take me home</Button>
            <Button onClick={() => navigate(-1)} variant={Variant.secondary}>
              Go back
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

NotFound.displayName = 'NotFound';
export default NotFound;
