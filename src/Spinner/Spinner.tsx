import React, { FC } from 'react';

export type SpinnerSize = 'small' | 'large';

export interface SpinnerProps {
  size?: SpinnerSize;
}

export const Spinner: FC<SpinnerProps> = ({ size = 'small' }) => {
  return (
    <div
      className={
        size === 'small'
          ? 'spinner spinner-border'
          : 'spinner large spinner-border'
      }
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
