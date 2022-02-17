import { Typography } from "@mui/material";
import React from "react";

export const Profile = () => {
  return (
    <div className="profile container-shadow">
      <div className="profile-name">
        <Typography className="name">Sumaia Salahuddin</Typography>
        <Typography className="title">Full Stack Web Developer</Typography>
      </div>

      <figure className="profile-image">
        <img src="" alt="" />
      </figure>

      <div className="profile-info">
        Insert Timeline
        <br />
        <button>My Button</button>
      </div>
    </div>
  );
};
