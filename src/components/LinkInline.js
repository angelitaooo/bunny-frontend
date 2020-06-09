import React from 'react';
import { Link } from 'react-router-dom';

const LinkInline = ({ children, to }) => {
  return (
    <Link to={to} className="text-indigo-600 hover:text-indigo-900">
      {children}
    </Link>
  );
};

export default LinkInline;
