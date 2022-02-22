import React from "react";
import { styled } from '@mui/system';
import html5 from "../../Assets/html5.png";
import css3 from "../../Assets/css3.png";
import sass from "../../Assets/sass.png";
import javascript from "../../Assets/javascript.png";
import react from "../../Assets/react.png";
import redux from "../../Assets/redux.svg";

function CodingSkills() {
    return (
        <div>
            <Subtittle>Coding skills</Subtittle>

            <IconsContainer>
                <Icon>
                    <img src={html5} alt="html5-img" width="56" height="56"/>
                    <p>HTML5</p>
                </Icon>
                <Icon>
                    <img src={css3} alt="css3-img" width="56" height="56"/>
                    <p>CSS3</p>
                </Icon>
                <Icon>
                    <img src={javascript} alt="javascript-img" width="56" height="56"/>
                    <p>JavaScript</p>
                </Icon>
            </IconsContainer>

            <IconsContainer>
                <Icon>
                    <img src={sass} alt="sass-img" width="56" height="46"/>
                    <p>SASS</p>
                </Icon>
                <Icon>
                    <img src={react} alt="react-img" width="56" height="56"/>
                    <p>React</p>
                </Icon>
                <Icon>
                    <img src={redux} alt="redux-img" width="56" height="56"/>
                    <p>Redux</p>
                </Icon>
            </IconsContainer>
        </div>
    )
}

const Subtittle = styled('h2')`
    margin-top: 0;
`

const IconsContainer = styled('div')`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    text-align: center;
    margin-bottom: 16px;
`

const Icon = styled('div')`
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-iteration-count: 1;
    :hover {
        animation-name: rubberBand;
    }

    @keyframes rubberBand {
        from {
        transform: scale3d(1, 1, 1);
        }
    
        30% {
        transform: scale3d(1.25, 0.75, 1);
        }
    
        40% {
        transform: scale3d(0.75, 1.25, 1);
        }
    
        50% {
        transform: scale3d(1.15, 0.85, 1);
        }
    
        65% {
        transform: scale3d(.95, 1.05, 1);
        }
    
        75% {
        transform: scale3d(1.05, .95, 1);
        }
    
        to {
        transform: scale3d(1, 1, 1);
        }
    }
`

export default CodingSkills;