import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import profilePicture from "../../Assets/profile-picture.png";

export default function ImageAvatar() {
    return (
        <Avatar
            alt="Amanda Srisourath"
            src={profilePicture}
            sx={{ width: 24, height: 24 }}
        />
    )
}