import { useProfile } from '@src/hooks/use-profile';
import React from 'react';
import Skeleton from '../Skeleton';
import { GENDER_LABEL } from './Profile.data';

const IMG_SIZE_PX = 100;

const Profile: React.FC = () => {
  const { data, isLoading, error } = useProfile();

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {isLoading || !data ? (
        <Skeleton />
      ) : (
        <div className='flex flex-row'>
          <img src={data.image} height={IMG_SIZE_PX} width={IMG_SIZE_PX} />
          <div className='flex flex-col justify-center w-full'>
            <div>Username: {data.username}</div>
            <div>
              Name: {data.firstName} {data.lastName}
            </div>
            <div>Email: {data.email}</div>
            <div>Gender: {GENDER_LABEL[data.gender]}</div>
          </div>
        </div>
      )}
    </div>
  );
};

Profile.displayName = 'Profile';
export default Profile;
