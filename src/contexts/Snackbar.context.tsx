import { Snackbar } from '@mui/material';
import * as React from 'react';

export interface ShowSnackbarProps {
  message: string;
  action?: React.ReactNode;
}

export interface SnackbarProps extends ShowSnackbarProps {
  key: number;
}

export interface SnackbarContext {
  showSnackbar: (props: ShowSnackbarProps) => void;
}

export const SnackbarContext = React.createContext({} as SnackbarContext);

export const SnackbarProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [snackPack, setSnackPack] = React.useState<readonly SnackbarProps[]>([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState<SnackbarProps | undefined>(undefined);

  const handler = {
    show: (props: ShowSnackbarProps) => {
      setSnackPack((prev) => [
        ...prev,
        {
          message: props.message,
          action: props.action,
          key: new Date().getTime(),
        },
      ]);
    },
    onClose: (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    },
    onExit: () => {
      setMessageInfo(undefined);
    },
  };

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      setOpen(false); // Close an active snack when a new one is added
    }
  }, [snackPack, messageInfo, open]);

  return (
    <SnackbarContext.Provider value={{ showSnackbar: handler.show }}>
      {children}
      <Snackbar
        sx={{
          '& .MuiSnackbarContent-root': {
            backgroundColor: '#333',
            color: 'white',
          },
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={handler.onClose}
        TransitionProps={{ onExited: handler.onExit }}
        key={messageInfo ? messageInfo.key : undefined}
        message={messageInfo ? messageInfo.message : undefined}
        action={messageInfo ? messageInfo.action : undefined}
      />
    </SnackbarContext.Provider>
  );
};
