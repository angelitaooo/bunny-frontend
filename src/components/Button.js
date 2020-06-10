import React from 'react';

const dangerButtonClasses =
  'inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5';

const baseButtonClasses =
  'inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium  transition ease-in-out duration-150 focus:outline-none focus:shadow-outline-indigo';

const primaryButtonClasses = `${baseButtonClasses} rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700  active:bg-indigo-700`;

const secondaryButtonClasses = `${baseButtonClasses} rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:border-indigo-300 active:bg-indigo-200`;

const Button = ({ kind, type = 'button', children, onClick = () => {} }) => {
  const buttonClasses = {
    primary: primaryButtonClasses,
    secondary: secondaryButtonClasses,
    danger: dangerButtonClasses,
  }[kind];

  return (
    <span className="inline-flex rounded-md shadow-sm">
      <button type={type} className={buttonClasses} onClick={onClick}>
        {children}
      </button>
    </span>
  );
};

export default Button;
