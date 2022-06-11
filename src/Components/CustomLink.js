import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li className={`${match ? 'text-black' : ''} hover:text-black`}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default CustomLink;
