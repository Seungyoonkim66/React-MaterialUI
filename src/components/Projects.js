import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProjectsDesc from './ProjectsDesc';

import kcc from '../static/KCC.png';
import NutritionCart from '../static/NutritionCart.png';
import LighthousePortfolio from '../static/lighthouseportfolio.png';

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
                    <Tab label="누리자 복지" {...a11yProps(7)} />
                    <Tab label="Kingo Market" {...a11yProps(8)} />
                </Tabs>
                <TabPanel value={value} index={0} style={{ width: '90%' }}>
                    <ProjectsDesc
                        title='KPMG Lighthouse Portfolio'
                        name='React 기반 KPMG Lighthouse 포트폴리오 개발'
                        period='2020.10-2020.12'
                        contribution='디자인 및 코드 작성'
                        extraTitle='github'
                        extraContent='https://github.com/Seungyoonkim66/React-KPMG'
                        desc='React를 활용하여 KPMG의 디지털 혁신 부서인 Lighthouse center 부서의 포트폴리오 사이트를 제작하였다. 해당 팀에서 개발한 소프트웨어의 사용성을 높이고 고객용 데모를 제작하기 위해 html, css, jsx를 기반으로 하는 React 웹 프레임워크를 활용하여 프론트엔드를 개발하였다. 해당 부서는 전원 벡엔드 개발자로 구성된 부서였기 때문에 프로젝트 아이디어 구성부터 디자인과 개발가지 전 과정을 단독을 수행하였다. React-Bootstrap 오픈소스와 KPMG 사내의 이미지 및 폰트 자료를 활용하여 프론트엔드를 완성하였으며 일부 소프트웨어 제품의 데모 사이트를 제작하기 위해 axios를 활용한 api를 통해 백엔드와 소통하였다.'
                        img={LighthousePortfolio}
                    />
                </TabPanel>
                <TabPanel value={value} index={1} style={{ width: '90%' }}>
            
                </TabPanel>
                <TabPanel value={value} index={2} style={{ width: '90%' }}>
                
                </TabPanel>
                <TabPanel value={value} index={3} style={{ width: '90%' }}>
                    <ProjectsDesc 
                        title='정보과학회 KCC 2020' 
                        name='가상화 환경에서의 NUMA 기반 락 성능 분석' 
                        period='2020.04-2020.06' 
                        contribution='실험 및 논문 작성'
                        extraTitle='원문보기'
                        extraContent='https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE09874330'
                        desc='최근 가상화 시스템에서 NUMA 기반 시스템의 성능 최적화를 위해 virtual NUMA 기법을 활용한다. 이를 통해 게스트 운영체제는 가상머신의 virtual CPU 및 메모리에 대한 NUMA 배치 상태를 기반으로 NUMA 구조를 고려한 성능 최적화 기법을 적용할 수 있게 되었다. 하지만 기존 NUMA 최적화 기법들은 가상화 환경을 고려하지 않기 떼문에 여러 가상머신이 하드웨어 자원을 공유하는 환경에서 NUMA 최적화 기법들의 성능 이점이 줄어들 수 있다. 따라서 본 논문에서는 virtual NUMA를 활용하는 게스트 운영체제에서 NUMA 기반의 락 최적화 기법의 성능을 측정하고 분석하였다. 실험 결과, NUMA 기반 락 최적화 기법은 단일 가상머신 환경에서 성능 이점을 보이지만 다중 가상머신 환경에서는 기존 리눅스의 락 기법 대비 성능 이점이 전혀 나타나지 않는 것을 확인하였다. 그리고 본 논문을 토해 KCC2020 우수발표논문상을 수상하였다.'
                        img={kcc}
                    />
                </TabPanel>
                <TabPanel value={value} index={4} style={{ width: '90%' }}>
                    <ProjectsDesc 
                        title='2020-1 소프트웨어공학개론 팀 프로젝트'
                        name='Nutrition Cart'
                        period='2020.03-2020.-8'
                        contribution='백엔드 개발'
                        extraTitle='시연영상 및 발표자료'
                        extraContent='https://www.notion.so/2020-1-Nutrition-Cart-c5fb30ab60ae4dbfaf8fd838618d7570'
                        desc='ionic framework로 프론트엔드를 개발하고 mySQL로 DBMS를 구축하고, Django로 백엔드 서버를 구축하였다. 본 프로젝트에서 개발한 어플리케이션은 사용자가 입력한 건강 관련 정보를 고려하여 음식 메뉴를 제공하고, 제공한 음식 메뉴의 레시피와 포함된 식재료를 구매할 수 있는 어플리케이션이다.'
                        img={NutritionCart}
                    />
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
