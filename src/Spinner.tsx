import React, { FC } from 'react';

export const Spinner: FC = () => {
  return (
    <div className="spinner large spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
