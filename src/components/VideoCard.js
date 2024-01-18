import React from "react";
import {
  formatNumberWithSuffix,
  formatTime,
  timeDuration,
} from "../utils/useCase";

const VideoCard = ({ info, live }) => {
  //   console.log(info);

  const { snippet, statistics, contentDetails } = info;
  let duration = timeDuration(contentDetails.duration);
  // console.log(contentDetails.duration);
  const { thumbnails, title, channelTitle, publishedAt } = snippet;
  let Days = formatTime(publishedAt);
  let viewCount = 0;
  if (info?.statistics?.viewCount) {
    viewCount = formatNumberWithSuffix(statistics.viewCount);
  }

  return (
    <div className=" p-2 m-2 w-[295px]">
      <div className="relative">
        <img
          className="rounded-lg"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
        {live !== "live" && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
            {duration}
          </div>
        )}
      </div>

      {/* <span className="">{contentDetails.duration}</span> */}
      <ul>
        <li className="font-bold py-2 text-sm">{title}</li>
        <li className="font-mono text-sm">{channelTitle}</li>
        <div className="flex justify-between text-sm font-mono">
          <li>{viewCount} views </li>
          {Days > 30 ? (
            Math.ceil(Days / 30.44) === 1 ? (
              <span>{Math.ceil(Days / 30.44)} Month ago</span>
            ) : (
              <span>{Math.ceil(Days / 30.44)} Months ago</span>
            )
          ) : Math.ceil(Days) === 1 ? (
            <span>{Math.ceil(Days)} day ago</span>
          ) : (
            <span>{Math.ceil(Days)} days ago</span>
          )}
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
