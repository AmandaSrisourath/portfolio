import React from "react";
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Projects from "./Projects";
import { data } from "../data";

function ProjectsArray() {    
    return (
        <div>
            <div>
                <Subtittle>Projects</Subtittle>

                {data.map((project) => {
                    return (
                        <Projects key={project.id} title={project.title} skills={project.skills} technologies={project.technologies} />
                    )}
                )}
            </div>
        </div>
    )
}

const Subtittle = styled('h2')`
    margin-top: 0;
`

export default ProjectsArray;