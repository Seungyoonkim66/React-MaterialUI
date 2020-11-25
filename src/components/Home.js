import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
    root: {
    },
    introTextDiv: {
        position: 'fixed',
        bottom: '20%',
        left: '3.5%',
    },
    introText1: {
        color: '#8F8A8E',
    },
    introText2: {
        color: '#e63946',
    },
});

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.introTextDiv}>
                    <Typography className={classes.introText1} variant='h1' >Welcome,</Typography>
                    <Typography className={classes.introText1} variant='h2' >This is</Typography>
                    <Typography className={classes.introText2} variant='h2'>Seungyoon's Portfolio</Typography>
                </div>
            </div>
    );
}
