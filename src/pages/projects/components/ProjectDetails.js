import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/system";
import React, { useState } from "react";

function ProjectDetails(props) {
  const [displayDetails, setDisplayDetails] = useState(false);
  const {
    title = "",
    skills = [""],
    technologies = [""],
    url = "",
    img = "",
  } = props;

  return (
    <div>
      <Subtitle>
        {title}

        <Link href={url} alt="Link icon" aria-label="Link icon" target="_blank">
          <FontAwesomeIcon icon={faLink} width="24" />
        </Link>
      </Subtitle>

      <div
        onMouseEnter={() => setDisplayDetails(true)}
        onMouseLeave={() => setDisplayDetails(false)}
      >
        {!displayDetails ? (
          <img
            src={process.env.PUBLIC_URL + `/images/${img}`}
            alt="project-img"
            width="100%"
            height="224"
            style={{ objectFit: "cover", borderRadius: 8 }}
          />
        ) : (
          <Box>
            <div>
              {skills.map((skill) => (
                <Paragraph key={skill}>{skill}</Paragraph>
              ))}
            </div>

            <Tags>
              {technologies.map((technologie) => (
                <Chip
                  key={technologie}
                  label={technologie}
                  sx={{
                    marginRight: 1,
                    marginBottom: 1,
                    color: "#61dafb",
                    backgroundColor: "#282c34",
                  }}
                />
              ))}
            </Tags>
          </Box>
        )}
      </div>
    </div>
  );
}

const Subtitle = styled("h2")`
  display: flex;
  justify-content: space-between;
  margin-top: 0;
  margin-bottom: 16px;
`;

const Tags = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

const Link = styled("a")`
  word-break: break-word;
  color: black;
  margin-left: 8px;
  :hover {
    color: #61dafb;
  }
`;

const Box = styled("div")`
  background-color: rgba(97, 218, 251, 0.24);
  border-radius: 8px;
  padding: 8px;
  height: 208px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Paragraph = styled("li")`
  margin: 0;
`;

export default ProjectDetails;
