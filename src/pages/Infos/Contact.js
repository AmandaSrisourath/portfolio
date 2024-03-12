import { LocationOn, Mail, Phone } from "@mui/icons-material";
import { styled } from "@mui/system";
import React from "react";
import SocialLinks from "./SocialLinks";

function Contact() {
  let urlLocalisation =
    "https://www.google.com/maps/place/Biggera+Waters+Queensland+4216/@-27.9304591,153.3237947,12z/data=!4m5!3m4!1s0x6b91102a0033457f:0x502a35af3dea050!8m2!3d-27.9322251!4d153.3994829";

  return (
    <Box>
      <div>
        <Subtittle>Contact</Subtittle>

        <ContactDetails>
          <Phone sx={{ marginRight: 2 }} />
          <ContactLink href="tel:0448676387" alt="Phone number">
            0448 676 387
          </ContactLink>
        </ContactDetails>

        <ContactDetails>
          <Mail sx={{ marginRight: 2 }} />
          <ContactLink href="mailto:amanda.srisourath@gmail.com" alt="Email">
            amanda.srisourath@gmail.com
          </ContactLink>
        </ContactDetails>

        <ContactDetails>
          <LocationOn sx={{ marginRight: 2 }} />
          <ContactLink
            href={urlLocalisation}
            alt="Localisation"
            target="_blank"
          >
            Biggera Waters, QLD
          </ContactLink>
        </ContactDetails>
      </div>

      <div>
        <Subtittle>Links</Subtittle>
        <SocialLinks />
      </div>
    </Box>
  );
}

const Subtittle = styled("h2")`
  margin-top: 0;
`;

const ContactDetails = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  :hover {
    color: #61dafb;
  }
`;

const ContactLink = styled("a")`
  color: black;
  text-decoration: none;
  :hover {
    color: #61dafb;
  }
`;

const Box = styled("div")`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Contact;
