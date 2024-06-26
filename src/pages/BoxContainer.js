import Box from "@mui/material/Box";
import React from "react";

function BoxContainer(props) {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: "white",
        opacity: 0.9,
        borderRadius: 2,
        margin: 1,
        padding: 3,
        "&:hover": {
          backgroundColor: "white",
          opacity: 1,
        },
      }}
    >
      {props.children}
    </Box>
  );
}

export default BoxContainer;
