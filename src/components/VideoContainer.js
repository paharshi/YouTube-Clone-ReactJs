import React, { useContext, useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { LIVE_STREAMS, YOUTUBE_VIDEO_API } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { videoStore } from "../utils/videoSlice";
import { Shimmer } from "./Shimmer";
import { addLoginName, addName } from "../utils/chatSlice";
import Loader from "../utils/loadContext";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  // const [nextPageToken, setNextPageToken] = useState("");
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const Theme = useSelector(store => store.app.Theme)
  const [search] = useSearchParams();
  const [Loading, setLoading] = useContext(Loader);
  let search1 = search?.get("v");
  // const navTo = useSelector((store) => store.chat.LoginToPage);

  const dispatch = useDispatch();
  const videoCache = useSelector((store) => store.video);

  dispatch(addLoginName(""));
  useEffect(() => {
    //  !search1 ? getVideos() : getVideos(search1)
    if (videoCache[search1]) {
      setVideos(videoCache[search1]);

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      if (!search1) {
        search1 = "home";
      }
      getVideos(search1);
    }

    dispatch(addName(search1));
  }, [search1]);

  const liveVdosData = async (api1, idForLive) => {
    let vdos = await fetch(LIVE_STREAMS);
    let a = await vdos.json();

    // a.items.map((element) => {
    //   const idForLive = element.id.videoId;
    //   const api1 = `https://www.googleapis.com/youtube/v3/videos?key=${GOOGLE_API_KEY}&id=${idForLive}&part=statistics,contentDetails`;

    //   const a = await fetch(api1)
    // });
    for (let index = 0; index < a.items.length; index++) {
      let id = a.items[index].id.videoId;
      let api1 = `https://www.googleapis.com/youtube/v3/videos?key=${GOOGLE_API_KEY}&id=${id}&part=statistics,contentDetails`;
      const aa = await fetch(api1);
      const b = await aa.json();
      a.items[index].statistics = b.items[0].statistics;
      a.items[index].contentDetails = b.items[0].contentDetails;
      a.items[index].id = b.items[0].id;
    }
    return a;
  };

  const getVideos = async (id) => {
    setLoading(true);
    let vdos;
    const api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${id}&key=${GOOGLE_API_KEY}`;
    if (id === "home") {
      vdos = await fetch(YOUTUBE_VIDEO_API);
    } else if (id === "live") {
      vdos = liveVdosData();
    } else {
      vdos = await fetch(api);
    }

    // if (id === "live") {
    //   const data = await vdos;
    // } else {
    //   const data = await vdos?.json();
    // }

    const data = id === "live" ? await vdos : await vdos?.json();

    //  console.log(data.items);
    setVideos(data?.items);

    dispatch(
      videoStore({
        [search1]: data?.items,
      })
    );
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    //`flex flex-wrap cursor-pointer  ${isMenuOpen ? 'ml-[2rem]': 'ml-[8rem]'}`

    <div
      className={`flex flex-wrap cursor-pointer  ${
        isMenuOpen ? "ml-[13rem]" : "ml-[11rem]"
      } ${!Theme ? " text-white ": ''}`}
    >
      {!videos.length && <Shimmer />}
      {videos?.map((e) => {
        return (
          <Link to={"/watch?v=" + e.id} key={e.id}>
            <VideoCard info={e} live = {search1}/>
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
