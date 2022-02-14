import React from "react";
import styled from "@emotion/styled";
// import logo from '../../Assets/logo.svg';

function Presentation() {
    return (
        <Titles id="home">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <Name>
                <Letters>
                    <AnimatedLetter>A</AnimatedLetter>
                    <AnimatedLetter>m</AnimatedLetter>
                    <AnimatedLetter>a</AnimatedLetter>
                    <AnimatedLetter>n</AnimatedLetter>
                    <AnimatedLetter>d</AnimatedLetter>
                    <AnimatedLetter>a</AnimatedLetter>
                </Letters>
                <Letters>
                    <AnimatedLetter>S</AnimatedLetter>
                    <AnimatedLetter>r</AnimatedLetter>
                    <AnimatedLetter>i</AnimatedLetter>
                    <AnimatedLetter>s</AnimatedLetter>
                    <AnimatedLetter>o</AnimatedLetter>
                    <AnimatedLetter>u</AnimatedLetter>
                    <AnimatedLetter>r</AnimatedLetter>
                    <AnimatedLetter>a</AnimatedLetter>
                    <AnimatedLetter>t</AnimatedLetter>
                    <AnimatedLetter>h</AnimatedLetter>
                </Letters>
            </Name>

            <Description>
                <Letters>
                    <AnimatedLetter>F</AnimatedLetter>
                    <AnimatedLetter>r</AnimatedLetter>
                    <AnimatedLetter>o</AnimatedLetter>
                    <AnimatedLetter>n</AnimatedLetter>
                    <AnimatedLetter>t</AnimatedLetter>
                    <AnimatedLetter>-</AnimatedLetter>
                    <AnimatedLetter>e</AnimatedLetter>
                    <AnimatedLetter>n</AnimatedLetter>
                    <AnimatedLetter>d</AnimatedLetter>
                </Letters>
                <Letters>
                    <AnimatedLetter>D</AnimatedLetter>
                    <AnimatedLetter>e</AnimatedLetter>
                    <AnimatedLetter>v</AnimatedLetter>
                    <AnimatedLetter>e</AnimatedLetter>
                    <AnimatedLetter>l</AnimatedLetter>
                    <AnimatedLetter>o</AnimatedLetter>
                    <AnimatedLetter>p</AnimatedLetter>
                    <AnimatedLetter>e</AnimatedLetter>
                    <AnimatedLetter>r</AnimatedLetter>
                </Letters>
                <Letters>
                    <AnimatedLetter>|</AnimatedLetter>
                </Letters>
                <Letters>
                    <AnimatedLetter>W</AnimatedLetter>
                    <AnimatedLetter>e</AnimatedLetter>
                    <AnimatedLetter>b</AnimatedLetter>
                </Letters>
                <Letters>
                    <AnimatedLetter>D</AnimatedLetter>
                    <AnimatedLetter>e</AnimatedLetter>
                    <AnimatedLetter>s</AnimatedLetter>
                    <AnimatedLetter>i</AnimatedLetter>
                    <AnimatedLetter>g</AnimatedLetter>
                    <AnimatedLetter>n</AnimatedLetter>
                    <AnimatedLetter>e</AnimatedLetter>
                    <AnimatedLetter>r</AnimatedLetter>
                </Letters>
            </Description>
        </Titles>
    )
}

const Titles = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    line-height: 0.5;
    cursor: default;
`

const Name = styled('h1')`
    display: flex;
    font-size: 4.5vw;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`

const Description = styled('h1')`
    display: flex;
    font-size: 2.2vw;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`

const Letters = styled('div')`
    display: flex;
    margin: 1%;
`

const AnimatedLetter = styled('h1')`
    color: white;
    margin: 0;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-iteration-count: 1;
    :hover {
        animation-name: rubberBand;
        color: #61dafb;
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

export default Presentation;