import {
  Avatar,
  Box,
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  SxProps,
  Theme,
  Toolbar,
  ToolbarProps,
} from '@mui/material';
import React from 'react';

export const ServiceBarHeight = 50;

const AvatarStyle: SxProps<Theme> = {
  width: 32,
  height: 32,
};

export interface ServiceBarProps extends ToolbarProps {
  onSignUp: () => void;
  onSignIn: () => void;
  onSignOut: () => void;
  user: { avatarUrl?: string; username: string } | null;
}

export const ServiceBar: React.FC<ServiceBarProps> = (props) => {
  const { onSignUp, onSignIn, onSignOut, user } = props;
  const [open, setOpen] = React.useState(false);
  const prevOpen = React.useRef(open);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (
    event: Event | React.SyntheticEvent | React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Toolbar
      {...props}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar + 1,
        minHeight: `${ServiceBarHeight}px!important`,
        px: { xs: 2, md: 6 },
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
        borderBottom: (theme) => `1.5px solid ${theme.palette.divider}`,
        ...props.sx,
      }}
    >
      {user ? (
        <Box sx={{ ml: 'auto' }}>
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            {user.username}
            {user.avatarUrl ? (
              <Avatar sx={{ ...AvatarStyle, ml: 1 }} src={user.avatarUrl} alt={user.username} />
            ) : (
              <Avatar sx={{ ...AvatarStyle, ml: 1 }}>{user.username.substring(0, 2)}</Avatar>
            )}
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-end"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem
                        onClick={(event) => {
                          handleClose(event);
                          onSignOut();
                        }}
                      >
                        Logout
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Box>
      ) : (
        <Box sx={{ ml: 'auto' }}>
          <Button sx={{ mr: 1 }} onClick={onSignIn}>
            Anmelden
          </Button>
          <Button onClick={onSignUp}>Registrieren</Button>
        </Box>
      )}
    </Toolbar>
  );
};
