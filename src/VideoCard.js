import { Avatar } from "@material-ui/core";
import React from "react";
import "./VideoCard.css";

function VideoCard({
  image,
  link,
  title,
  channel,
  views,
  timestamp,
  channelImage
}) {
  return (
    <div className="videoCard">
      <a className="videoCard__thumbnail" href={link} alt="">
        <img className="videoCard__thumbnail" src={image} alt="" />
      </a>
      <div className="videoCard__info">
        <Avatar src={image} className="videoCard__avatar" alt={channel} />
        <div className="videoCard__text">
          <a className="videoCard_title" href={link}>
            {title}
          </a>
          <p> {channel} </p>{" "}
          <p>
            {" "}
            {views}• {timestamp}{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default VideoCard;
