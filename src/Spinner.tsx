import React, { FC } from 'react';

export interface SpinnerProps {
  large?: boolean;
  small?: boolean;
}

export const Spinner: FC<SpinnerProps> = ({ large, small }) => {
  let smallSpinner = true;

  if (large !== undefined) smallSpinner = large;
  if (small !== undefined) smallSpinner = small;

  return (
    <div
      className={
        smallSpinner ? 'spinner spinner-border' : 'spinner large spinner-border'
      }
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
