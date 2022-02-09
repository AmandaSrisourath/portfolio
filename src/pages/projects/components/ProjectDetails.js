import React, { useState } from "react";
import { styled } from '@mui/system';
import Chip from '@mui/material/Chip';
import { MoreVert, Close } from '@mui/icons-material';

function ProjectDetails(props) {
    const [isDisplay, setIsdisplay] = useState(false);
    const { title = '', skills = [''], technologies = [''], url = '', img = ''} = props;

    const switchIsDisplay = () => {
        setIsdisplay(!isDisplay);
    }

    return (
        <div>
            <Subtitle>
                {title}
                { !isDisplay ? <MoreVert onClick={switchIsDisplay} sx={{ '&:hover': {color: '#61dafb'} }}/> : <Close onClick={switchIsDisplay} sx={{ '&:hover': {color: '#61dafb'} }}/>}
            </Subtitle>
                
            { !isDisplay ? 
                (
                    <div>
                        <Link href={url} target="_blank">
                            <img src={process.env.PUBLIC_URL + `/images/${img}`} width="100%" height="224"/>
                        </Link>
                    </div>
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
    )
}

const Subtitle = styled('h2')`
    display: flex;
    // align-items: center;
    margin-top: 0;
    margin-bottom: 24px;
    cursor: pointer;
`

const Tags = styled('div')`
    display: flex;
    flex-wrap: wrap;
`

const Link = styled('a')`
    word-break: break-word;
    color: black;
`

export default ProjectDetails;