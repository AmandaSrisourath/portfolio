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
                <div>
                    <img src={wordpress} alt="wordpress-img" width="56"/>
                    <p>Wordpress</p>
                </div>
                <div>
                    <img src={figma} alt="figma-img" width="56"/>
                    <p>Figma</p>
                </div>
                <div>
                    <img src={trello} alt="trello-img" width="56"/>
                    <p>Trello</p>
                </div>
            </Icon>

            <Icon>
                <div>
                    <img src={sketch} alt="sketch-img" width="56"/>
                    <p>Sketch</p>
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

export default Softwares;