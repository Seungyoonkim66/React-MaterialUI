import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
    },
});

export default function About() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            ABOUT
        </div>
    );
}
