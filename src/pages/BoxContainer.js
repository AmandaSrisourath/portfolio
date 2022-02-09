import React from "react";
import Box from '@mui/material/Box';

function BoxContainer(props) {    
    return (
        <div>
            <Box
                sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: '#20232a',
                    borderRadius: 4,
                    margin: 3,
                    padding: 4,
                    overflow: 'auto',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#61dafb',
                        opacity: [0.9, 0.8, 0.7],
                        color: 'black',
                    },
                }}
            >
                {props.children}
            </Box>
        </div>
    )
}

export default BoxContainer;