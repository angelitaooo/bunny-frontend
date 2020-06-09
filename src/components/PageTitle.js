import React from 'react';

const PageTitle = ({ title, children }) => {
  return (
    <header className="bg-white shadow">
      <div className="flex items-center justify-between flex-wrap sm:flex-no-wrap max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          {title}
        </h1>
        <div className="mt-1 sm:mt-0 flex-shrink-0">{children}</div>
      </div>
    </header>
  );
};

export default PageTitle;
