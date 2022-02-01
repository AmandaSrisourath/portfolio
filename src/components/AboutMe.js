import React from "react";
import { styled } from '@mui/system';

function AboutMe() {
    return (
        <div>
            <Subtittle>About me</Subtittle>

            <p>
                After a carrer reorientation from sales management to web design and front-end development, I am looking for a company to grow in this field.
            </p>
        </div>
    )
}

const Subtittle = styled('h2')`
    margin-top: 0;
`

export default AboutMe;