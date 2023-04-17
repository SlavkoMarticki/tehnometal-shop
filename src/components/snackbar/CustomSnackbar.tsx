import React, { useRef } from 'react';
import { Snackbar, IconButton } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { observer } from 'mobx-react-lite';
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';

import { ThemeProvider } from '@material-ui/styles';
import { ISnackbarProps } from '../../types';

const theme = unstable_createMuiStrictModeTheme();

const CustomSnackbar: React.FC<ISnackbarProps> = ({
  open,
  message,
  type,
  onClose
}) => {
  const snackbarRef = useRef(null);
  const alertRef = useRef(null);
  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        ref={snackbarRef}
        open={open}
        autoHideDuration={4000}
        onClose={onClose}
        message={message}
        style={{ zIndex: 200000 }}
        action={
          <>
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={onClose}
            >
              X
            </IconButton>
          </>
        }
      >
        <Alert
          severity={type}
          style={{ minWidth: '200px' }}
          variant='filled'
          ref={alertRef}
        >
          {message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default observer(CustomSnackbar);
