import { styled } from "@mui/system";
import React from "react";
import SocialLinks from "../../src/pages/infos/SocialLinks";

function Footer() {
  return (
    <Container>
      <SocialLinks />
    </Container>
  );
}

const Container = styled("div")`
  background-color: white;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  padding: 32px;
  margin-top: 32px;
`;

export default Footer;
