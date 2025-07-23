import React, { forwardRef } from 'react';
import clsx from 'clsx';

type Ref = HTMLButtonElement;

interface NavigationLinkOptions {
  active?: boolean;
}

export type NavigationLinkProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLElement>,
  HTMLButtonElement
> &
  NavigationLinkOptions;

const NavigationLink = forwardRef<Ref, NavigationLinkProps>((props, ref) => {
  const { className, active, children, ...rest } = props;

  const merged = clsx(
    'mx-1.5 sm:mx-6',
    active
      ? 'text-gray-800 border-b-2 border-blue-500 '
      : 'border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500',

    className,
  );

  return (
    <button ref={ref} className={merged} {...rest}>
      {children}
    </button>
  );
});

NavigationLink.displayName = 'NavigationLink';
export default NavigationLink;
