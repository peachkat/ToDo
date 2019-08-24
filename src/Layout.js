//Toolbar with application name displayed, can hold children
import React, { memo } from 'react';
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';


//note to self on in line styling :  <div style={{ height: '10%' }}> example
const Layout = memo(props => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: '#fafafa' }} //color of toolbar
  >
    <AppBar color="primary" position="static" style={{ height: 64 }}>
      <Toolbar style={{ height: 50 }}>
        <Typography color="inherit" variant="h4">해야 할 일</Typography>
      </Toolbar>
    </AppBar>
    {props.children}
  </Paper >
));

export default Layout;