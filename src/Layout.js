//Toolbar with application name displayed, can hold children
import React, {memo} from 'react';
import {AppBar, Toolbar, Typography, Paper} from '@material-ui/core';

const Layout = memo(props => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: '#fafafa' }} //color of toolbar
  >
    <AppBar color="primary" position="static" style={{height: 64}}>
      <Toolbar style={{height: 65}}>
        <Typography color="inherit">TO DO LIST</Typography>
      </Toolbar>
    </AppBar>
    {props.children}
  </Paper>
));

export default Layout;