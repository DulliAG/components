import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbProps {
  defaultPathName: string;
}
const Breadcrumb: FC<BreadcrumbProps> = ({ defaultPathName }) => {
  const [path, setPath] = useState<string[]>([]);

  useEffect(() => {
    let list: string[] = [];
    let pathname = window.location.pathname,
      splitted = pathname.split('/');

    if (pathname === '/' && splitted.length === 2) {
      setPath([defaultPathName]);
    } else {
      splitted.forEach(slug => {
        var slugname = slug === '' ? defaultPathName : slug;
        list.push(slugname);
        setPath(list);
      });
    }
  }, [history, defaultPathName]);

  return (
    <nav>
      <ol className="breadcrumb rounded-0">
        {path.map((site, index) => {
          return (
            <li
              key={index}
              className={
                index !== path.length - 1
                  ? 'breadcrumb-item'
                  : 'breadcrumb-item active'
              }
            >
              <Link
                className="breadcrumb-link"
                to={site !== defaultPathName ? '../' + site : '/'}
              >
                {site}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
