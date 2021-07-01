import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

export interface NavbarLink {
  show: boolean;
  name: string;
  value: string;
  path: string;
}

export interface NavbarProps {
  links: NavbarLink[];
}

export const Navbar: FC<NavbarProps> = ({ links }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const handleClick = () => {
    var navbarToggler = document.querySelector('.navbar .navbar-toggler');
    var navbarMenu = document.querySelector('.navbar .navbar-collapse');

    navbarToggler?.classList.toggle('collapsed');
    navbarMenu?.classList.toggle('show');
    toggle();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container-fluid px-0">
        <Link className="navbar-brand fw-bold" to="/">
          DulliAG
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          {!open ? (
            <i style={{ fontSize: '1.3rem' }} className="ri-menu-line"></i>
          ) : (
            <i style={{ fontSize: '1.5rem' }} className="ri-close-line"></i>
          )}
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((link, index) => {
              if (!link.show) return;
              return (
                <li key={index} className="nav-item">
                  <Link
                    id={link.name}
                    className="link nav-link"
                    to={link.path}
                    onClick={handleClick}
                  >
                    {link.value}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
