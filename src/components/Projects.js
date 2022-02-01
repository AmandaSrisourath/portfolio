import React from "react";

function Projects(props) {
    const { id = '', title = '', skills = [''], technologies = [''] } = props;

    return (
        <div>
            <h3>{title}</h3>
            <p>Skills : {skills}</p>
            <p>Technologies : {technologies}</p>
        </div>
    )
}

export default Projects;