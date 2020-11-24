import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProjectsDesc from './ProjectsDesc';

import empty from '../static/empty.svg';
import kcc from '../static/KCC.png';
import NutritionCart from '../static/NutritionCart.png';
import LighthousePortfolio from '../static/lighthouseportfolio.png';
import taxocr from '../static/taxocr.png';
import antix from '../static/antix.png';
import TwitchR from '../static/TwitchR.png';
import paasta from '../static/paasta.png';
import kingomarket from '../static/kingomarket.png';
import skkulibrary from '../static/skkulibrary.png';

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
                    <Tab label="Virtual Memory Management" {...a11yProps(4)} />
                    <Tab label="Nutrition Cart" {...a11yProps(5)} />
                    <Tab label="ANTI-X" {...a11yProps(6)} />
                    <Tab label="TwitchR" {...a11yProps(7)} />
                    <Tab label="누리자 복지" {...a11yProps(8)} />
                    <Tab label="Kingo Market" {...a11yProps(9)} />
                    <Tab label="SKKU Library" {...a11yProps(10)} />
                </Tabs>
                <TabPanel value={value} index={0} style={{ width: '90%' }}>
                    <ProjectsDesc
                        title='KPMG Lighthouse Portfolio'
                        name='React 기반 KPMG Lighthouse 포트폴리오'
                        period='2020.10 - 2020.12'
                        contribution='디자인 및 코드 작성'
                        extraTitle='GitHub URL'
                        extraContent='https://github.com/Seungyoonkim66/React-KPMG'
                        desc='React를 활용하여 KPMG의 디지털 혁신 부서인 Lighthouse center 부서의 포트폴리오 사이트를 제작하였습니다. Lighthouse에서 개발한 소프트웨어를 외부에 공개하기 위한 목적의 사이트로 HTML, CSS, JSX를 기반으로 하는 React 웹 프레임워크를 활용하여 프론트엔드 개발을 수행했습니다. Landing 페이지를 통해서 KPMG의 글로벌 사이트인 Insights Center 소개 페이지, Lighthouse 소개 페이지, 개발한 솔루션을 전시하는 페이지로 이동할 수 있게 제작하였습니다.'
                        desc2='프로젝트를 진행할 당시 Lighthouse 팀은 전원이 백엔드 개발자였기 때문에 레이아웃 구상, 사이트 맵 구상, 디자인, 코드 작성 전과정을 단독으로 진행하였습니다. 또한 백엔드와 병합 및 코드 결합을 위해 GitLab을 사용하였습니다.'
                        img={LighthousePortfolio}
                    />
                </TabPanel>
                <TabPanel value={value} index={1} style={{ width: '90%' }}>
                    <ProjectsDesc
                        title='KPMG TAX-OCR Web'
                        name='React 기반 OCR 웹사이트'
                        period='2020.10 - 2020.12'
                        contribution='디자인 및 코드 작성'
                        extraTitle='GitHub URL'
                        extraContent='https://github.com/Seungyoonkim66/React-KPMG'
                        desc='React를 활용하여 KPMG Lighthouse에서 개발한 OCR 프로그램의 프론트엔드를 개발하였습니다. HTML, CSS, JSX를 기반으로 하는 React 웹 프레임워크를 활용하여 개발하였으며 Material-UI 오픈소스를 커스터마이징하여 사용하였습니다. 팀에서 기존에 개발해두었던 tax 관련 OCR 프로그램의 고객용 데모 사이트를 제작하기 위해 프로그램이 제공하는 각 기능의 사용 가이드와 프로그램 다운로드 버튼을 제공하는 One-page 웹사이트를 개발하였습니다.'
                        desc2='Lighthouse 포트폴리오 사이트 개발 프로젝트와 마찬가지로 프로젝트 전과정을 단독으로 수행하였으며 코드 형상 관리를 위해 팀의 GitLab을 사용하였습니다.'
                        img={taxocr}
                    />
                </TabPanel>
                <TabPanel value={value} index={2} style={{ width: '90%' }}>
                    <ProjectsDesc 
                        title='한국정보과학회 KSC2020'
                        name=''
                    />
                </TabPanel>
                <TabPanel value={value} index={3} style={{ width: '90%' }}>
                    <ProjectsDesc
                        title='한국정보과학회 KCC 2020'
                        name='가상화 환경에서의 NUMA 기반 락 성능 분석'
                        period='2020.04 - 2020.06'
                        contribution='실험 및 논문 작성'
                        extraTitle='원문보기'
                        extraContent='https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE09874330'
                        desc='최근 가상화 시스템에서 NUMA 기반 시스템의 성능 최적화를 위해 virtual NUMA 기법이 많이 활용되고 있으며 이를 통해 게스트 운영체제는 가상머신의 virtual CPU 및 메모리에 대한 NUMA 배치 상태를 기반으로 NUMA 구조를 고려한 성능 최적화 기법을 적용할 수 있게 되었습니다. 하지만 기존 NUMA 최적화 기법들은 가상화 환경을 고려하지 않기 때문에 여러 가상머신이 하드웨어 자원을 공유하는 가상화 환경에서는 NUMA 최적화 기법으로 인한 성능 이점이 줄어들 수 있습니다. 따라서 본 논문에서는 virtual NUMA를 활용하는 게스트 운영체제에서 NUMA 기반의 락 최적화 기법의 성능을 측정하고 분석하였습니다. 실험 결과, NUMA 기반 락 최적화 기법은 단일 가상머신 환경에서 성능 이점을 보이지만 다중 가상머신 환경에서는 기존 리눅스의 락 기법 대비 성능 이점이 전혀 나타나지 않는 것을 확인하였습니다. 그리고 본 논문으로 KCC2020 우수발표논문상을 수상하였습니다.'
                        desc2='아래는 실험 결과 일부를 발췌해 온 것이고, 원문은 위에 제공된 링크를 통해 확인해주시기 바랍니다.'
                        img={kcc}
                    />
                </TabPanel>
                <TabPanel value={value} index={4} style={{ width: '90%' }}>
                    <ProjectsDesc 
                        title='2020 운영체제 프로젝트'
                        name='Virtual Memory Management 기법 구현'
                        period='2020.05'
                        contribution='코드 작성'
                        extraTitle='GitHub URL'
                        extraContent='https://github.com/Seungyoonkim66/C-programming'
                        desc='2020년도 1학기(4학년-1학기) 운영체제 수업에서 수행한 개인 프로젝트로, Demand paging system을 가정하고 이를 위한 페이지 replacement 기법을 C언어로 구현하였습니다. page reference string을 사용자에게 입력받아 MIN, FIFO, LRU, LFU, Working set 기법으로 처리했을 경우 memory residnece set의 변화 과정과 page fault 발생 과정을 추적 및 출력하는 프로그램을 구현하였습니다.'
                        desc2='구현 코드는 github url을 통해 확인해주시기 바랍니다.'
                        img={empty}
                    />
                </TabPanel>
                <TabPanel value={value} index={5} style={{ width: '90%' }}>
                    <ProjectsDesc
                        title='2020-1 소프트웨어공학개론 팀 프로젝트'
                        name='Nutrition Cart'
                        period='2020.03 - 2020.08'
                        contribution='백엔드 개발'
                        extraTitle='시연영상 및 발표자료'
                        extraContent='https://www.notion.so/2020-1-Nutrition-Cart-c5fb30ab60ae4dbfaf8fd838618d7570'
                        desc='2020년도 1학기 (4학년-1학기) 소프트웨어공학개론 수업을 수강하며 웹/앱 어플리케이션 아이디어 구상 및 개발 팀 프로젝트를 진행하며 제작한 어플리케이션입니다. 프론트엔드 개발을 위해 IOS와 Andriod 모두 호환이 가능한 하이브리드 프레임워크인 Ionic 프레임워크를 사용하고, 백엔드 개발에는 python 기반의 Django를 활용하였으며 데이터베이스 관리 시스템으로는 Django에서 기본적으로 제공하는 MySQL을 활용하였습니다. Nutrition Cart는 사용자가 입력한 건강 정보를 고려하여 음식 메뉴를 제공하고, 제공한 음식 메뉴의 레시피와 그에 포함된 식재료를 구매할 수 있는 서비스를 제공합니다.'
                        desc2='본 프로젝트에서 API를 통해 프론트엔드와 주고 받을 수 있도록 JSON 형식으로 음식 메뉴와 식재료 데이터베이스를 구축하였고, Django를 활용하여 백엔드 서버를 개발하는 역할을 수행했습니다.'
                        img={NutritionCart}
                    />
                </TabPanel>
                <TabPanel value={value} index={6} style={{ width: '90%' }}>
                    <ProjectsDesc
                        title='2020 포스트 코로나 AI 챌린지'
                        name='ANTI-X'
                        period='2020.04'
                        contribution='서비스 기획, UI 프로토타입 제작, PPT 제작'
                        extraTitle='Introduction PPT'
                        extraContent='https://www.notion.so/2020-AI-7283239c02924a48ad08e5d83a7bcedb'
                        desc='2020 포스트 코로나 AI 챌린지 공모전에 참가하여 기획한 맞춤형 감영병 확산 예측 및 확산 방지 솔루션 서비스입니다. 국가 또는 시기별 유행하는 감염병 정보를 제공하고, 사용자가 입력한 목적지와 경로의 감염 위험도 예측 정보를 제공하여 사용자의 외출에 대한 경고를 통해 감염병 확산 방지를 도모하는 어플리케이션입니다.'
                        desc2='본 프로젝트에서 아이디어 기획, UI디자인과 프로토타입 제작, 서비스 소개 PPT 자료 제작을 담당하였습니다. '
                        img={antix}
                    />
                </TabPanel>
                <TabPanel value={value} index={7} style={{ width: '90%' }}>
                    <ProjectsDesc
                        title='성균융합원 2019 동계 R 부트캠프'
                        name='TwitchR(트위처)'
                        period='2020.01'
                        contribution='아이디어 구상 및 코드 작성'
                        extraTitle='Details'
                        extraContent='https://www.notion.so/2019-R-b84e852b8185441a86e8f44f08627ab1'
                        desc='대표적인 게임 생방송 플랫폼인 Twitch의 채팅 관리 프로그램인 chatty를 활용하여 수집한 생방송 전체 텍스트 데이터를 분석하여 영상 하이라이트 구간을 추출하는 프로그램을 고안하고 개발했습니다. 전채 채팅 로그에서 <ㅋㅋㅋㅋ> 와 웃긴 상황에서 공유되는 구독자간 유행어를 분석하여 해당 단어의 빈도가 높은 구간을 추출했습니다. 그리고 분 단위 키워드의 개수를 시각화하여 값이 높은 부분의 전후 30초를 뽑아 하이라이트 영상을 편집하였습니다. 해당 프로그램으로 러닝타임이 긴 게임 생방송 하이라이트 구간 추출 자동화를 시도하였습니다.'
                        desc2='본 프로젝트에서 R 코드 작성을 하였고, 2019년 동계 R 코딩 캠프 우수상을 수상하였습니다. 구현 코드에 대한 자세한 설명은 위 관련 자료 링크 또는 포트폴리오 pdf에서 확인해주시기 바랍니다.'
                        img={TwitchR}
                    />
                </TabPanel>
                <TabPanel value={value} index={8} style={{ width: '90%' }}>
                    <ProjectsDesc
                        title='2019 개방형 클라우드 플랫폼 PaaS-TA 기반 서비스 개발 및 아이디어 공모전'
                        name='누리자 복지'
                        period='2020.10 - 2020.12'
                        contribution='서비스 기획, UI 프로토타입 제작, PPT 제작'
                        extraTitle='Details'
                        extraContent='https://www.notion.so/PaaS-TA-a33e271f698740bab5e85203f0dba4de'
                        desc='Paas-TA 클라우드 플랫폼을 활용할 수 있는 서비스를 기획하는 공모전에 참가하여 관공서 문화센터간 파편화되어 있는 문화 강좌 정보, 이용자 정보, 실시간 수강신청 정보, 관공서 위치 정보, 수강 후기 정보를 통합하여 관리하고 서비스할 수 있는 어플리케이션 서비스를 기획했습니다. 클라우드 기술을 활용하여 공공기관의 서비스를 개선하고 여기서 활용되는 데이터를 수집할 수 있는 서비스를 UI 프로토타입과 함께 제안하였습니다.'
                        desc2='본 프로젝트에서 아이디어 기획, UI 디자인 및 프로토타입 제작, 발표 PPT 제작, 발표를 수행하였고, 아이디어 기획 부문 우수상를 수상하였습니다. 관련 자료는 위 링크를 통해 확인해주시기 바랍니다.'
                        img={paasta}
                    />
                </TabPanel>
                <TabPanel value={value} index={9} style={{ width: '90%' }}>
                    <ProjectsDesc
                        title='2019 웹 프로그래밍 실습 프로젝트'
                        name='Kingo Market'
                        period='2019.09 - 2010.12'
                        contribution='프론트엔드 개발'
                        extraTitle='GitHub URL'
                        extraContent='https://github.com/Seungyoonkim66/Kingo-Market'
                        desc='2019년도 2학기(3학년-2학기) 웹 프로그래밍 실습 수업에서 수행한 팀 프로젝트로, 판매자들은 판매할 상품을 올리고, 구매자는 상품을 장바구니에 담아 구매할 수 있는 웹 사이트를 개발했습니다. '
                        desc2='Kingo Market은 Django 웹 프레임워크를 사용하여 개발하였고, 본 프로젝트에서 HTML, CSS를 활용하여 프론트엔드를 개발했습니다. 데이터베이스 ER Diagram과 상세한 기능 설명 및 구현 코드는 위 github repository에서 확인해주시기 바랍니다.'
                        img={kingomarket}
                    />
                </TabPanel>
                <TabPanel value={value} index={10} style={{ width: '90%' }}>
                    <ProjectsDesc 
                        title='2019 데이터베이스개론 프로젝트'
                        name='SKKU Library'
                        period='2019.09 - 2010.10'
                        contribution='프론트엔드, 백엔드 개발'
                        extraTitle='GitHub URL'
                        extraContent='https://github.com/Seungyoonkim66/SKKU-library'
                        desc='2019년도 2학기(3학년-2학기) 데이터베이스개론 수업에서 수행한 개인 프로젝트로 mySQL로 데이베이스를 구축 및 관리하고, HTML, CSS, PHP를 활용하여 프론트엔드를 개발하였습니다. SKKU Library는 회원가입, 로그이느 도서 대출 및 반납, 스터디룸 예약, 도서 리뷰 작성 등의 기능을 제공합니다.'
                        desc2='데이터베이스 ER Diagram과 상세한 기능 설명 및 구현 코드는 github repository에서 확인해주시기 바랍니다.'
                        img={skkulibrary}
                    />
                </TabPanel>
            </div>
        </div>
    );
}
