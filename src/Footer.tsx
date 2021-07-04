import React, { FC } from 'react';

export interface FooterLink {
  name: string;
  redirect_url: string;
}

export interface FooterAd {
  image_url: string;
  alt_text: string;
  redirect_url: string;
}

export interface FooterAuthor {
  name: string;
  redirect_url: string;
}

export interface FooterProps {
  links?: FooterLink[];
  partner?: FooterLink[];
  other?: FooterLink[];
  ad: FooterAd;
  author: FooterAuthor;
  version: string;
}

export const Footer: FC<FooterProps> = ({
  links,
  partner,
  other,
  ad,
  author,
  version,
}) => {
  return (
    <footer className="footer">
      <div className="links py-5">
        <div className="row mx-0">
          <div className="link-container col-md-2 col-6 mb-3 mb-md-0 ps-0 ps-md-3">
            <h5 className="mb-1">Allgemeines</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="footer-link" href="https://dulliag.de/Impressum">
                  Impressum
                </a>
              </li>
              <li>
                <a
                  className="footer-link"
                  href="https://dulliag.de/Datenschutz"
                >
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>

          <div className="link-container col-md-2 col-6 mb-3 mb-md-0 pe-0 pe-md-3">
            <h5 className="mb-1">Links</h5>
            <ul className="list-unstyled text-small">
              {links?.map((link, index) => {
                return (
                  <li key={index}>
                    <a className="footer-link" href={link.redirect_url}>
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="link-container col-md-2 col-6 mb-3 mb-md-0 ps-0 ps-md-3">
            <h5 className="mb-1">Partner</h5>
            <ul className="list-unstyled text-small">
              {partner?.map((link, index) => {
                return (
                  <li key={index}>
                    <a className="footer-link" href={link.redirect_url}>
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="link-container col-md-2 col-6 mb-3 mb-md-0 pe-0 pe-md-3">
            <h5 className="mb-1">Sonstiges</h5>
            <ul className="list-unstyled text-small">
              {other?.map((link, index) => {
                return (
                  <li key={index}>
                    <a className="footer-link" href={link.redirect_url}>
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="link-container col-md-4 col-12 px-0">
            <a className="footer-link" href={ad.redirect_url}>
              <img
                className="w-100 rounded"
                src={ad.image_url}
                alt={ad.alt_text}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="credits">
        <p className="text text-center py-4">
          © 2019 - {new Date().getFullYear()} v{version} by{' '}
          <a className="footer-link" href={author.redirect_url}>
            {author.name}
          </a>
        </p>
      </div>
    </footer>
  );
};
