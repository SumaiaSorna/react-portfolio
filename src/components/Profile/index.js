import { Typography } from "@mui/material";
import React from "react";

import { CustomButton } from "../Button/index";

import "./Profile.css";

export const Profile = () => {
  return (
    <div className="profile container-shadow">
      <div className="profile-name">
        <Typography className="name">Sumaia Salahuddin</Typography>
        <Typography className="title">Full Stack Web Developer</Typography>
      </div>

      <figure className="profile-image">
        <img
          src={require("../../assets/images/displayImage.jpg")}
          alt="Profile-pic"
        />
      </figure>

      <CustomButton />
    </div>
  );
};
