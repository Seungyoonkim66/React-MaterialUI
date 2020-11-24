import React from 'react';
import BackDrop from './BackDrop';
import Divider from '@material-ui/core/Divider';
import sample from '../static/empty.svg';

export default function ProjectsDesc({ title, name, period, contribution, desc, desc2, extraTitle, extraContent, img, btnTitle, isButtonShown }) {
    const isShown = isButtonShown; 
    return (
        <div className='projects-content-div'>
            <p>{title}</p>
            <Divider />
            <div className='projects-content-div-table'>
                <table> 
                    <tr>
                        <th>Project Title</th>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <th>Project Period</th>
                        <td>{period}</td>
                    </tr>
                    <tr>
                        <th>Contribution</th>
                        <td>{contribution}</td>
                    </tr>
                    <tr>
                        <th>{extraTitle}</th>
                        <td><a href={extraContent} target='blank'>{extraContent}</a></td>
                    </tr>
                </table>
            </div>
            <Divider />
            <div className='projects-content-div-desc'>
                <p>{desc}</p>
                <p>{desc2}</p>
                {isShown ? <BackDrop img={img} btnTitle={btnTitle}/> : null}
                {/* <BackDrop img={img} btnTitle={btnTitle} isButtonShown={true}/> */}
                {/* <img src={img} alt='img' style={{width: '90%', display: 'block', margin: 'auto'}}/> */}
            </div>
        </div>
    );
}
