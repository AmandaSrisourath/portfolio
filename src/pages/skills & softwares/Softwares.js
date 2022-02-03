import React from "react";
import { styled } from '@mui/system';
import wordpress from "../../Assets/wordpress.png";
import figma from "../../Assets/figma.png";
import trello from "../../Assets/trello.png";
import sketch from "../../Assets/sketch.png";

function Softwares() {
    return (
        <div>
            <Subtittle>Softwares</Subtittle>

            <Icon>
                <img src={wordpress} alt="wordpress-img" width="80"/>
                <img src={figma} alt="figma-img" width="80"/>
                <img src={trello} alt="trello-img" width="80"/>
                <img src={sketch} alt="sketch-img" width="80"/>
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

export default Softwares;