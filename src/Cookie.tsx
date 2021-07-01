import React, { useState, useEffect, FC } from 'react';
import Cookies from 'universal-cookie';

export const Disclaimer: FC = () => {
  const cookies = new Cookies();
  const [accepted, setAccepted] = useState<boolean>(false);

  const handleCookie = () => {
    cookies.set('cookies', 'true', { path: '/' });
    setAccepted(true);
  };

  useEffect(() => {
    var status = cookies.get('cookies');
    if (status !== undefined) setAccepted(true);
  }, [accepted]);

  if (accepted) return null;
  return (
    <div className="cookie-disclaimer shadow rounded">
      <div className="top text-center">
        <p>Wir verwenden Cookies!</p>
        <a
          className="marked-link"
          href="https://www.cookiesandyou.com/"
          target="_blank"
        >
          Mehr Infos...
        </a>
      </div>
      <div className="bottom text-center">
        <button className="rounded" onClick={handleCookie}>
          Akzeptieren
        </button>
      </div>
    </div>
  );
};
