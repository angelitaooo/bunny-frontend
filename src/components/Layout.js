import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/users">
                  <span
                    className="text-3xl"
                    role="img"
                    aria-label="bunny studio logo"
                  >
                    🐰
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
