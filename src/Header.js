import React, { useState } from "react";
import "./Header.css";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Search from "./Search";

// es7 snippets(an extension)
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <Link to="./">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/200px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="youtubelogo"
          />
        </Link>
      </div>{" "}
      <Search />
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar className="header_avatar" alt="Zuko" src="Siri.jpg" />
      </div>{" "}
    </div>
  );
}

export default Header;
