import React, { useState, useEffect, FC } from 'react';
import Cookies from 'universal-cookie';

export interface DisclaimerProps {
  cookieName: string;
}
export const Disclaimer: FC<DisclaimerProps> = ({ cookieName }) => {
  const cookies = new Cookies();
  const [accepted, setAccepted] = useState<boolean>(false);

  const handleCookie = () => {
    cookies.set(cookieName, 'true', { path: '/' });
    setAccepted(true);
  };

  useEffect(() => {
    const status = cookies.get(cookieName);
    if (status !== undefined) setAccepted(true);
  }, [accepted, cookieName, cookies]);

  if (accepted) return null;
  return (
    <div className="cookie-disclaimer">
      <div className="icon-container">
        <i className="bx bx-cookie"></i>
      </div>
      <p className="text-center">
        Wir verwenden Cookies! <br />
        <a
          href="https://www.cookiesandyou.com/"
          rel="noreferrer"
          target="_blank"
          className="marked-link"
        >
          Mehr Infos...
        </a>
      </p>
      <div className="icon-container">
        <button onClick={handleCookie}>
          <i className="bx bx-x"></i>
        </button>
      </div>
    </div>
  );
};
