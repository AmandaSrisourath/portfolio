import React from "react";
import { styled } from '@mui/system';

function AboutMe() {
    return (
        <div>
            <Subtittle>About me</Subtittle>

            <Paragraph>
                After a career reorientation from sales management to front-end development, I am looking for a company to grow in this field. I obtained my bachelor in front-end development from France where I mastered my skills. This bachelor was a high intensity training program which is focus on learning by practicing with professionalizing projects.
            </Paragraph>
        </div>
    )
}

const Subtittle = styled('h2')`
    margin-top: 0;
`

const Paragraph = styled('p')`
    text-align: justify;
    line-height: 1.4;
`

export default AboutMe;