import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from './Profile';
import * as useProfileHook from '@src/hooks/use-profile';
import { UseQueryResult } from '@tanstack/react-query';
import { PROFILE } from './Profile.mocks';
import { Profile as ProfileType } from '@src/utils/types/data';

describe('Profile', () => {
  it('should show profile information', () => {
    jest.spyOn(useProfileHook, 'useProfile').mockImplementation(
      () =>
        ({
          data: PROFILE,
          isLoading: false,
          error: undefined,
        } as unknown as UseQueryResult<ProfileType, Error>),
    );
    render(<Profile />);

    expect(
      screen.getByText(`Username: ${PROFILE.username}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Name: ${PROFILE.firstName} ${PROFILE.lastName}`),
    ).toBeInTheDocument();
    expect(screen.getByText(`Email: ${PROFILE.email}`)).toBeInTheDocument();
    expect(screen.getByText(`Gender: Female`)).toBeInTheDocument();
  });
});
