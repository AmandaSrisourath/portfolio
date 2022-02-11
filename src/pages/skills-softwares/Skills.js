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
                <div>
                    <img src={html5} alt="html5-img" width="56"/>
                    <p>HTML5</p>
                </div>
                <div>
                    <img src={css3} alt="css3-img" width="56"/>
                    <p>CSS3</p>
                </div>
                <div>
                    <img src={javascript} alt="javascript-img" width="56"/>
                    <p>JavaScript</p>
                </div>
            </Icon>

            <Icon>
                <div>
                    <img src={sass} alt="sass-img" width="56"/>
                    <p>SASS</p>
                </div>
                <div>
                    <img src={react} alt="react-img" width="56"/>
                    <p>React</p>
                </div>
                <div>
                    <img src={redux} alt="redux-img" width="56"/>
                    <p>Redux</p>
                </div>
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
    align-items: baseline;
    text-align: center;
    margin-bottom: 16px;
`

export default Skills;