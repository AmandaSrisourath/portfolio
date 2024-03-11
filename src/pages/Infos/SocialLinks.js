import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { styled } from "@mui/system";
import React from "react";

function SocialLinks() {
  let urlGitHub = "https://github.com/AmandaSrisourath";
  let urlLinkedin = "https://www.linkedin.com/in/a-srisourath/";
  let urlTwitter = "https://twitter.com/AmdaSrisourath";

  return (
    <div>
      <Links>
        <a
          href={urlGitHub}
          alt="GitHub logo"
          aria-label="GitHub logo"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub
            sx={{
              fontSize: 30,
              color: "black",
              "&:hover": { color: "#61dafb" },
            }}
          />
        </a>
        <a
          href={urlLinkedin}
          alt="LinkedIn logo"
          aria-label="LinkedIn logo"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn
            sx={{
              fontSize: 37,
              color: "black",
              "&:hover": { color: "#61dafb" },
            }}
          />
        </a>
        <a
          href={urlTwitter}
          alt="Twitter logo"
          aria-label="Twitter logo"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter
            sx={{
              fontSize: 37,
              color: "black",
              "&:hover": { color: "#61dafb" },
            }}
          />
        </a>
      </Links>
    </div>
  );
}

const Links = styled("div")`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default SocialLinks;
