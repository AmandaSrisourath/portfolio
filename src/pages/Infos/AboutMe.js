import React from "react";
import { styled } from '@mui/system';

function AboutMe() {
    return (
        <div>
            <Subtittle>About me</Subtittle>

            <p>
                After a career reorientation from sales management to web design and front-end development, I am looking for a company to grow in this field. I obtained my bachelor in front-end development and web design from France where I mastered my skills. This bachelor was a high intensity training program which is focus on learning by practicing with professionalizing projects.
            </p>
        </div>
    )
}

const Subtittle = styled('h2')`
    margin-top: 0;
`

export default AboutMe;