import { GitHub, LinkedIn } from "@mui/icons-material";
import { styled } from "@mui/system";

function SocialLinks() {
  let urlGitHub = "https://github.com/AmandaSrisourath";
  let urlLinkedin = "https://www.linkedin.com/in/a-srisourath";

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
      </Links>
    </div>
  );
}

const Links = styled("div")`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default SocialLinks;
