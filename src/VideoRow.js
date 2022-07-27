import React from "react";
import "./VideoRow.css";
import { Avatar } from "@material-ui/core";

function VideoRow({
  views,
  description,
  timestamp,
  channel,
  channellink,
  title,
  image,
  link
}) {
  return (
    <div className="videoRow">
      <a href={link} alt="">
        <img src={image} alt="" />
      </a>
      <div className="videoRow__text">
        <a className="videoRow_title" href={link}>
          {title}
        </a>
        <p className="videoRow__headline">
          {views}
          views • {timestamp}
        </p>
        <div className="videosRow_Channel">
          <Avatar src={image} className="videosRow_ChannelAvatar" />
          <a href={channellink}>{channel} ♪</a>
        </div>

        <p className="videoRow__description">
          <a href={link}>{description} </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default VideoRow;
