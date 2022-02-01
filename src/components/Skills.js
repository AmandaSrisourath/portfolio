import React from "react";
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import html5 from "../Assets/html5.png";
import css3 from "../Assets/css3.png";
import sass from "../Assets/sass.png";
import javascript from "../Assets/javascript.png";
import react from "../Assets/react.png";

function Skills() {
    return (
        <div>
            <Subtittle>Skills</Subtittle>

            <Icon>
                <img src={html5} alt="html5-img" width="50px"/>
                <img src={css3} alt="css3-img" width="50px"/>
                <img src={javascript} alt="javascript-img" width="44px"/>
                <img src={sass} alt="sass-img" width="50px"/>
                <img src={react} alt="react-img" width="50px"/>
            </Icon>
        </div>
    )
}

const Subtittle = styled('h2')`
    margin-top: 0;
`

const Icon = styled('div')`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export default Skills;