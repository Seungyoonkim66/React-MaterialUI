import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function BackDrop({ img, btnTitle }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };


    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleToggle}>{btnTitle}</Button>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <div id='example-img-div' style={{ width: '100%', height:'70vh',textAlign: 'center', overflowY: 'auto' }}><img src={img} alt='example_img' style={{ width: '50%' }} /></div>
            </Backdrop>
        </div>
    );
}