import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));
function Appbar(){
    const classes = useStyles();
    return(
        <div>
            <div>
            <h1>Library Management</h1>
            </div>
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar padding="0 0 0 20px" font="large">
                <Button color="inherit">Home</Button>
                <Button color="inherit">Addbook</Button>
                <Button color="inherit">Listbook</Button>
            </Toolbar>
      </AppBar>
    </div>
        </div>
    );
}
export default Appbar;