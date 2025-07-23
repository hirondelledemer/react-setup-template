import React, { ReactNode } from 'react';

const Header: React.FC<{ children: ReactNode }> = ({ children }) => {
  if (!children) {
    return null;
  }

  return (
    <h1 className='mt-4 mb-4 text-2xl font-medium text-gray-800'>{children}</h1>
  );
};

Header.displayName = 'Header';
export default Header;
