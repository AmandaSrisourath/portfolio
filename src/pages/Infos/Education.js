import React from "react";
import { styled } from '@mui/system';

function Education() {
    return (
        <div>
            <Subtittle>Education</Subtittle>
        
            <h3>OpenClassrooms - France/Remote</h3>
            <p>Bachelor's degree, Computer Science</p>
            <p>2022</p>

            <h3>IEC - France</h3>
            <p>Bachelor's degree, Management</p>
            <p>2018</p>
        </div>
    )
}

const Subtittle = styled('h2')`
    margin-top: 0;
`

export default Education;