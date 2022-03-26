import React, {
  FC,
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react';

export interface Toast {
  type?: string;
  text: string;
  close?: string;
  action?: Function;
}

export type ToastList = Array<Toast>;

export const ToastContext = createContext<any>(() => {});

export function useToastContext() {
  return useContext(ToastContext);
}

export const ToastContextProvider: FC<{ children: any }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastList>([]);

  useEffect(() => {
    if (toasts.length <= 0) return;
    const timer = setTimeout(() => setToasts(toasts => toasts.slice(1)), 2000);
    return () => clearTimeout(timer);
  }, [toasts]);

  const addToast = useCallback(
    function(toast) {
      setToasts(toasts => [...toasts, toast]);
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div className="toast-wrapper">
        {toasts.map((toast, index) => {
          var classes = 'toast',
            icon = 'toast-icon';

          switch (toast.type) {
            case 'ERROR':
            case 'Error':
            case 'error':
              classes += ' toast-error';
              icon += ' ri-error-warning-line';
              break;

            case 'INFO':
            case 'Info':
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
              {toast.close !== undefined && (
                <div className="button-container">
                  <button className="dismiss" onClick={() => toast.action}>
                    {toast.close}
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
