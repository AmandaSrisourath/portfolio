import React from "react";
import { styled } from '@mui/system';
import { Phone, Mail, Home, GitHub, LinkedIn } from '@mui/icons-material';

function Contact() {
    let urlLocalisation = "https://www.google.com/maps/place/Biggera+Waters+Queensland+4216/@-27.9304591,153.3237947,12z/data=!4m5!3m4!1s0x6b91102a0033457f:0x502a35af3dea050!8m2!3d-27.9322251!4d153.3994829";
    let urlGitHub = "https://github.com/AmandaSrisourath";
    let urlLinkedin= "https://www.linkedin.com/in/a-srisourath/";

    return (
        <div>
            <Subtittle>Contact</Subtittle>
            
            <ContactDetails>
                <Phone sx={{ marginRight: 2 }}/>
                <ContactLink href="tel:0448676387">0448 676 387</ContactLink>
            </ContactDetails>

            <ContactDetails>
                <Mail sx={{ marginRight: 2 }}/>
                <ContactLink href="mailto:amanda.srisourath@gmail.com">amanda.srisourath@gmail.com</ContactLink>
            </ContactDetails>

            <ContactDetails>
                <Home sx={{ marginRight: 2 }}/>
                <ContactLink href={urlLocalisation} target="_blank">Biggera Waters, QLD</ContactLink>
            </ContactDetails>
            
            <SocialLink>
                <a href={urlGitHub} target="_blank">
                    <GitHub sx={{ fontSize: 40, color: 'black', marginRight: 1 }}/>
                </a>
                <a href={urlLinkedin} target="_blank">
                    <LinkedIn sx={{ fontSize: 47, color: 'black' }}/>
                </a>
            </SocialLink>
        </div>
    )
}

const Subtittle = styled('h2')`
    margin-top: 0;
`

const ContactDetails = styled('div')`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`

const ContactLink = styled('a')`
    color: black;
    text-decoration: none;
`

const SocialLink = styled('div')`
    display: flex;
    margin-top: 16px;
    align-items: center;
`

export default Contact;