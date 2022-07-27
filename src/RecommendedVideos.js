import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import { useStateValue } from "./StateProvider";
import useYoutubeSearch from "./useYoutubeSearch";
import Response from "./response";
function RecommendedVideos() {
  const [{ term }, dispatch] = useStateValue();
  //const { data } = useYoutubeSearch("best music");
  const data = Response;
  return (
    <div className="recommendedVideos">
      <h2> Recommended Videos</h2>{" "}
      <div className="recommendedVideos__videos">
        <>
          {data?.items.map((item) => (
            <>
              {item.pagemap?.cse_image?.length > 0 && (
                <VideoCard
                  link={item.link}
                  title={item.title}
                  views={
                    item.pagemap?.videoobject?.length > 0 &&
                    item.pagemap?.videoobject[0]?.interactioncount
                  }
                  timestamp={
                    item.pagemap?.videoobject?.length > 0 &&
                    item.pagemap?.videoobject[0]?.datepublished
                  }
                  channel={
                    item.pagemap?.person?.length > 0 &&
                    item.pagemap?.person[0]?.name
                  }
                  channellink={
                    item.pagemap?.person?.length > 0 &&
                    item.pagemap?.person[0]?.url
                  }
                  image={
                    item.pagemap?.imageobject?.length > 0 &&
                    item.pagemap?.imageobject[0]?.url
                  }
                />
              )}
            </>
          ))}
        </>
      </div>{" "}
    </div>
  );
}

export default RecommendedVideos;
