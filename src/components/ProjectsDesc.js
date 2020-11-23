import React from 'react';

import Divider from '@material-ui/core/Divider';

export default function ProjectsDesc({ title, name, period, contribution, desc, extraTitle, extraContent, img }) {

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
                        <th>Contriubution</th>
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
                <img src={img} alt='img' style={{width: '60%', display: 'block', margin: 'auto'}}/>
            </div>
        </div>
    );
}
