import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import React from 'react'
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(()=>({
    root : {
        flexGrow : 1
    },
    title : {
        flexGrow : 1
    },
    appbarStyle : {
        background : 'midnightblue'
    },
    buttonStyle : {
        background : "crimson"
    }
}))
const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.appbarStyle}>
                    <Typography  variant='h2'  className={classes.title}>
                        <Button style={{color : "white"}} component={Link} to='/'>Movie Club</Button>
                    </Typography>
                    <Button variant="contained" className={classes.buttonStyle}  component={Link} to='/'>+Add Movies</Button>
                    <Button  style={{color  : "white"}}  component={Link} to='/watchList'>Watch List</Button>
                    <Button  style={{color  : "white"}}  component={Link} to='/watched'>Wached</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
