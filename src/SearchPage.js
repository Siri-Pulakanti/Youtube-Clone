import React from "react";
import "./SearchPage.css";
import VideoRow from "./VideoRow";
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2> FILTER </h2>{" "}
      </div>{" "}
      <hr />
      <ChannelRow
        image="https://vignette.wikia.nocookie.net/avatar/images/4/4b/Zuko.png/revision/latest?cb=20180630112142"
        channel="qwert"
        subs="100"
        noOfVideos="25"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        verified
      />
      <hr />
      <VideoRow
        views="1000"
        subs="852"
        description="ipsum' will uncover many web sites still in their infancy. Various vers"
        timestamp="22.50"
        channel="qwertycreations"
        title="bqwertyigbang creation"
        image="https://i.ytimg.com/vi/9r8DpnNFrsc/maxresdefault.jpg"
      />
    </div>
  );
}

export default SearchPage;
