import React from 'react';
import { Link } from "react-router-dom";

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

import DehazeIcon from '@material-ui/icons/Dehaze';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    btn: {
        position: 'absolute',
        top: '3.3%',
        left: '2%',
    }
});

export default function SideDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem><ListItemText>Seungyoon's Portfolio</ListItemText></ListItem>
                <Divider />
                <Link to='/' className='link'><ListItem>
                    <ListItemIcon><HomeRoundedIcon /></ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </ListItem></Link>
                
                <Link to='/about' className='link'><ListItem>
                    <ListItemIcon><PersonRoundedIcon /></ListItemIcon>
                    <ListItemText>About</ListItemText>
                </ListItem></Link>

                <Link to='/projects' className='link'><ListItem>
                    <ListItemIcon><AssignmentRoundedIcon /></ListItemIcon>
                    <ListItemText>Projects</ListItemText>
                </ListItem></Link>   
            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment>
                <Button className={clsx(classes.btn)} onClick={toggleDrawer('left', true)}><DehazeIcon /></Button>
                <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
                    {list('left')}
                </Drawer>
            </React.Fragment>

        </div>
    );
}


// {['Home', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//     <Link to={'/' + text} className='link'><ListItem button key={text}>
//         {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
//         <ListItemText primary={text} />
//     </ListItem></Link>
// ))}