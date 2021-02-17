import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    headerDiv: {
        textAlign: 'center', 
        margin: '5% 0 8%',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '3%',
            marginRight: '3%',
        },
    },
}));

function Header() {
    const classes = useStyles();
    return (
        <div className={classes.headerDiv}>
            <h1>NASA <span>Astronomy Photo of the Day</span></h1>
        </div>
    )
}

export default Header
