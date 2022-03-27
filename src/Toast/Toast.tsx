import React, { FC, createContext, useState, useMemo, useEffect } from 'react';

export interface IToast {
  type?: 'success' | 'info' | 'error';
  text: string;
  close?: { text: string; action: () => void };
}

interface IToastContext {
  toasts: IToast[];
  setToasts: React.Dispatch<React.SetStateAction<IToast[]>>;
  addToast: (toast: IToast) => void;
}

export const ToastContext = createContext<IToastContext>({} as IToastContext);

export const ToastContextProvider: FC = ({ children }) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const addToast = (toast: IToast) => setToasts(list => [...list, toast]);

  useEffect(() => {
    if (toasts.length <= 0) return;
    const timer = setTimeout(() => setToasts(toasts => toasts.slice(1)), 2000);
    return () => clearTimeout(timer);
  }, [toasts]);

  return (
    <ToastContext.Provider
      value={useMemo(() => ({ toasts, setToasts, addToast }), [
        toasts,
        setToasts,
        addToast,
      ])}
    >
      {children}
      <div className="toast-wrapper">
        {toasts.map((toast, index) => {
          let classes = 'toast',
            icon = 'toast-icon';

          switch (toast.type) {
            case 'error':
              classes += ' toast-error';
              icon += ' ri-error-warning-line';
              break;

            case 'info':
              classes += ' toast-info';
              icon += ' ri-information-line';
              break;

            default:
              classes += ' toast-success';
              icon += ' ri-checkbox-circle-line';
              break;
          }

          return (
            <div key={index} className={classes}>
              <i className={icon} />
              <p className="toast-text">{toast.text}</p>
              {toast.close && (
                <div className="button-container">
                  <button className="dismiss" onClick={toast.close.action}>
                    {toast.close.text}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};
