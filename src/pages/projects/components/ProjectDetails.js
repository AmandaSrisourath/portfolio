import React, { useState } from "react";
import { styled } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';

function ProjectDetails(props) {
    const [displayDetails, setDisplayDetails] = useState(false);
    const { title = '', skills = [''], technologies = [''], url = '', img = ''} = props;

    return (
        <div>
            <Subtitle>
                {title}

                <Link href={url} alt="Link icon" target="_blank">
                    <FontAwesomeIcon icon={faLink} width="24"/>
                </Link>
            </Subtitle>
                
            <div onMouseEnter={() => setDisplayDetails(true)} onMouseLeave={() => setDisplayDetails(false)}>
                { !displayDetails ? 
                    (
                        <img src={process.env.PUBLIC_URL + `/images/${img}`} alt="project-img" width="100%" height="224"/>
                    ) :
                    (
                        <div>
                            {skills.map((skill) =>
                                <p key={skill}>{skill}</p>
                            )}
            
                            <Tags>
                                {technologies.map((technologie) =>
                                    <Chip 
                                        key={technologie} 
                                        label={technologie} 
                                        sx={{ marginRight: 1, marginBottom: 1, color: '#61dafb', backgroundColor: '#282c34' }}
                                    />
                                )}
                            </Tags>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const Subtitle = styled('h2')`
    display: flex;
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 2.4vh;
`

const Tags = styled('div')`
    display: flex;
    flex-wrap: wrap;
`

const Link = styled('a')`
    word-break: break-word;
    color: black;
    margin-left: 16px;
    :hover {
        color: #61dafb;
    }
`

export default ProjectDetails;