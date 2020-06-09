import React from 'react';
import { Link } from 'react-router-dom';

const baseButtonClasses =
  'inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium  transition ease-in-out duration-150 focus:outline-none focus:shadow-outline-indigo';

const primaryButtonClasses =
  'rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700  active:bg-indigo-700';

const secondaryButtonClasses =
  'rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 active:bg-indigo-200';

const LinkButton = ({ kind, children, to }) => {
  const buttonClasses = `${baseButtonClasses} ${
    kind === 'primary' ? primaryButtonClasses : secondaryButtonClasses
  }`;

  return (
    <span className="inline-flex rounded-md shadow-sm">
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    </span>
  );
};

export default LinkButton;
