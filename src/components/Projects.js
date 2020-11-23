import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import ProjectsDesc from './ProjectsDesc';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
        backgroundColor: 'rgba(241, 250, 245, 0.6)',
        display: 'flex',
        height: '100%',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function Projects() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div id='projects-content'>
            <div style={{ color: '#3F3A3E', padding: '3% 1.5%', textAlign: 'right' }}><Typography variant='h3'><p style={{ display: 'inline-block', color: '#e63946', margin: 0 }}>P</p>ROJECTS</Typography></div>
            <div className={classes.root}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Tab label="Lighthouse Portfolio" {...a11yProps(0)} />
                    <Tab label="TAX-OCR" {...a11yProps(1)} />
                    <Tab label="KSC2020" {...a11yProps(2)} />
                    <Tab label="KCC2020" {...a11yProps(3)} />
                    <Tab label="Nutrition Cart" {...a11yProps(4)} />
                    <Tab label="ANTI-X" {...a11yProps(5)} />
                    <Tab label="TwitchR" {...a11yProps(6)} />
                    <Tab label="누리자 복자" {...a11yProps(7)} />
                    <Tab label="Kingo Market" {...a11yProps(8)} />
                </Tabs>
                <TabPanel value={value} index={0} style={{ width: '90%' }}>
                    
                </TabPanel>
                <TabPanel value={value} index={1} style={{ width: '90%' }}>
            
                </TabPanel>
                <TabPanel value={value} index={2} style={{ width: '90%' }}>
                
                </TabPanel>
                <TabPanel value={value} index={3} style={{ width: '90%' }}>
                    <ProjectsDesc title='정보과학회 KCC 2020' name='가상화 환경에서의 NUMA 기반 락 성능 분석' period='2020.04-2020.06' contribution='실험 및 논문 작성'/>
                </TabPanel>
                <TabPanel value={value} index={4} style={{ width: '90%' }}>
                    <ProjectsDesc title='Nutrition Cart'/>
                </TabPanel>
                <TabPanel value={value} index={5} style={{ width: '90%' }}>
                    Item Six
                </TabPanel>
                <TabPanel value={value} index={6} style={{ width: '90%' }}>
                    Item Seven
                </TabPanel>
                <TabPanel value={value} index={7} style={{ width: '70%' }}>
                    Iddd
                </TabPanel>
                <TabPanel value={value} index={8} style={{ width: '70%' }}> 
                    Item Seven
                </TabPanel>
            </div>
        </div>
    );
}
