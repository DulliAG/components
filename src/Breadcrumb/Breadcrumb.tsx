import React, { useState, useEffect, FC } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

export interface BreadcrumbProps extends RouteComponentProps<any> {
  defaultPathName: string;
}
const Breadcrumb: FC<BreadcrumbProps> = ({ history, defaultPathName }) => {
  type PathList = Array<String>;
  const [path, setPath] = useState<PathList>([]);

  useEffect(() => {
    let list: PathList = [];
    let pathname = history.location.pathname,
      splitted = pathname.split('/');

    if (pathname === '/' && splitted.length === 2) {
      list.push(defaultPathName);
      setPath(list);
    } else {
      splitted.forEach(slug => {
        var slugname = slug === '' ? defaultPathName : slug;
        list.push(slugname);
        setPath(list);
      });
    }

    history.listen(location => {
      list = [];
      let newPathname = location.pathname,
        splitted = newPathname.split('/');
      if (newPathname === '/' && splitted.length === 2) {
        list.push(defaultPathName);
        setPath(list);
      } else {
        splitted.forEach(slug => {
          var slugname = slug === '' ? defaultPathName : slug;
          list.push(slugname);
          setPath(list);
        });
      }
    });
  }, []);

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

export default withRouter(Breadcrumb);
