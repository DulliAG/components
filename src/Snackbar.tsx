import * as React from 'react';
import { darken, Snackbar } from '@mui/material';

export type SnackbarProps =
  | {
      message: string;
      action?: React.ReactNode;
    }
  | undefined;

export type ShowSnackbarProps = SnackbarProps & { key: number };

export interface ISnackbarContext {
  showSnackbar: (props: ShowSnackbarProps) => void;
}

export const SnackbarContext = React.createContext({} as ISnackbarContext);

export const SnackbarProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [snackPack, setSnackPack] = React.useState<readonly SnackbarProps[]>(
    []
  );
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState<SnackbarProps>(
    undefined
  );

  const handler = {
    onShow: (props: ShowSnackbarProps) => {
      setSnackPack(prev => [
        ...prev,
        {
          message: props.message,
          action: props.action,
          key: new Date().getTime(),
        },
      ]);
    },
    onClose: (_event: React.SyntheticEvent | Event, reason?: string) => {
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
      setSnackPack(prev => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  return (
    <SnackbarContext.Provider value={{ showSnackbar: handler.onShow }}>
      {children}
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={handler.onClose}
        TransitionProps={{ onExited: handler.onExit }}
        message={messageInfo ? messageInfo.message : undefined}
        action={messageInfo ? messageInfo.action : undefined}
        sx={{
          bottom: theme => ({ xs: theme.spacing(10), md: theme.spacing(2) }),
          '& .MuiSnackbarContent-root': {
            backgroundColor: theme =>
              darken(theme.palette.background.default, 0.4),
            color: 'white',
          },
        }}
      />
    </SnackbarContext.Provider>
  );
};
