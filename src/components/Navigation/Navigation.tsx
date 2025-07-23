import React from 'react';
import NavigationLink from './NavigationLink';
import { HOME, LOGIN, PROFILE } from '@src/utils/consts/routes';
import { useAuth } from '@src/hooks/use-auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const { token, setToken } = useAuth();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <nav className='bg-white shadow' role='navigation'>
      <div className='container flex items-center justify-center p-6 mx-auto text-gray-600'>
        <NavigationLink
          onClick={() => navigate(HOME)}
          active={pathname === HOME}
        >
          Home
        </NavigationLink>
        {token && (
          <NavigationLink
            onClick={() => navigate(PROFILE)}
            active={pathname === PROFILE}
          >
            Profile
          </NavigationLink>
        )}
        {!token && (
          <NavigationLink
            onClick={() => navigate(LOGIN)}
            active={pathname === LOGIN}
          >
            Login
          </NavigationLink>
        )}
        {token && (
          <NavigationLink
            onClick={() => {
              navigate(LOGIN);
              setToken(undefined);
            }}
          >
            Logout
          </NavigationLink>
        )}
      </div>
    </nav>
  );
};

Navigation.displayName = 'Navigation';
export default Navigation;
