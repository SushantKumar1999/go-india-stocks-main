import Link from 'next/link';
import React from 'react';

const SidebarLink = ({ href, className = '', children }) => {
  return (
    <Link
      key={href}
      href='#'
      className={`block text-white/80 p-3 px-4 hover:text-white hover:bg-accent-hover transition-all duration-200 ${className}`}
    >
      {children}
    </Link>
  );
};

export default SidebarLink;
