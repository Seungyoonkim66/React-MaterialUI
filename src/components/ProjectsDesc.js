import React from 'react';

import Divider from '@material-ui/core/Divider';

export default function ProjectsDesc({ title , name , period , contribution }) {

    return (
        <div className='projects-content-div' style={{ color: '#555555' }}>
                        <p>{title}</p>
                        <Divider />
                        <div className='projects-content-div-div'>
                            <div className='desc'>
                                <div className='desc-title'>
                                    <p>프로젝트 명</p>
                                    <p>프로젝트 기간</p>
                                    <p>프로젝트 기여도</p>
                                </div>
                                <div className='desc-content'>
                                    <p>{name}</p>
                                    <p>{period}</p>
                                    <p>{contribution}</p>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}
