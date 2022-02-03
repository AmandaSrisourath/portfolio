import React from "react";
import { styled } from '@mui/system';
import html5 from "../../Assets/html5.png";
import css3 from "../../Assets/css3.png";
import sass from "../../Assets/sass.png";
import javascript from "../../Assets/javascript.png";
import react from "../../Assets/react.png";
import redux from "../../Assets/redux.svg";

function Skills() {
    return (
        <div>
            <Subtittle>Skills</Subtittle>

            <Icon>
                <img src={html5} alt="html5-img" width="80"/>
                <img src={css3} alt="css3-img" width="80"/>
                <img src={javascript} alt="javascript-img" width="80" height="80"/>
                <img src={sass} alt="sass-img" width="80"/>
                <img src={react} alt="react-img" width="80"/>
                <img src={redux} alt="redux-img" width="76"/>
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
    align-items: center;
`

export default Skills;