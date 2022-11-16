import { Link, LinkProps } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export interface LinkRouterProps extends LinkProps {
  to: string;
}

export function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink as any} />;
}
