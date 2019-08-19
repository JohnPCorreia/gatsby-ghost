import React from 'react';

import Dialog from 'material-ui/Dialog/Dialog';
import { withStyles } from 'material-ui/styles';

import NavBarDialogStyle from './nav-bar-dialog.styles';

const NavBarDialog = ({ children, ...props }) =>
  <Dialog {...props}>{children}</Dialog>;

export default withStyles(NavBarDialogStyle)(NavBarDialog);
