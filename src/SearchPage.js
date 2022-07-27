import React from "react";
import "./SearchPage.css";
import Response from "./response";
import VideoRow from "./VideoRow";
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import useYoutubeSearch from "./useYoutubeSearch";
import { useStateValue } from "./StateProvider";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
  const { data } = useYoutubeSearch(term);

  // Dummy API CALL
  //const data = Response;

  //console.log(data);

  return (
    <div className="searchPage">
      {/* {JSON.stringify(data)} */}
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2> FILTER </h2>{" "}
      </div>{" "}
      <hr />
      {/* {term} */}
      {term && (
        <div>
          {data?.items.map((item) => (
            <div>
              {item.pagemap?.cse_image?.length > 0 && (
                <VideoRow
                  link={item.link}
                  title={item.title}
                  views={
                    item.pagemap?.videoobject?.length > 0 &&
                    item.pagemap?.videoobject[0]?.interactioncount
                  }
                  subs="852"
                  description={
                    item.pagemap?.videoobject?.length > 0 &&
                    item.pagemap?.videoobject[0]?.description
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
            </div>
          ))}
        </div>
      )}
      <hr />
    </div>
  );
}

export default SearchPage;
