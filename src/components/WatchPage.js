import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useSelector } from "react-redux";
import SearchVideo from "./SearchVideo";
// import Sidebar from "./Sidebar";
import { videoStore } from "../utils/videoSlice";
import CommentsShow from "./CommentsShow";
// import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { SuggestShimmer } from "./Shimmer";

import DetailVideo from "./DetailVideo";
import LiveChat from "./LiveChat";
import Loader from "../utils/loadContext";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [search] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState([]);
  const [showlive, setShowLive] = useState(false);
  const [channelDetails, setChannelDetails] = useState([]);
  const [comments, setComments] = useState([]);
  const [suggestVdos, setSuggestVdos] = useState([]);
  const videoCache = useSelector((store) => store.video);
  const [showcomments, setShowComments] = useState(false);
  const [Loading, setLoading] = useContext(Loader);
  const searchName = useSelector((store) => store.chat.searchName);
  const Theme = useSelector((store) => store.app.Theme);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  useEffect(() => {
    if (videoCache[search]) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
      setVideoDetails(videoCache[search]);
      setSuggestVdos(videoCache[search + "suggest"]);
      setComments(videoCache[search + "comments"]);
    } else {
      getVideoDetail();
    }

    if (searchName === "live") {
      setShowLive(true);
    }
  }, [search]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const getVideoDetail = async () => {
    setLoading(true);
    const videoDetails = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${GOOGLE_API_KEY}&part=snippet,statistics&id=${search.get(
        "v"
      )}`
    );

    const data = await videoDetails.json();
    // console.log(data);
    if (data.items) {
      const channelId = data?.items[0]?.snippet?.channelId;
      const id = data?.items[0]?.snippet?.localized?.title;
      // to fetch the channel details
      const channelDetails = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=${channelId}`
      );

      const data1 = await channelDetails.json();
      setChannelDetails(data1.items);
      const finalData = data.items.concat(data1.items);
      setVideoDetails(finalData);
      dispatch(
        videoStore({
          [search]: finalData,
        })
      );

      const suggestVdos = await fetch(
        // `https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}&part=snippet&type=video&maxResults=10&relatedToVideoId=${search.get("v")}`
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${id}%2023&key=${GOOGLE_API_KEY}`
      );
      const data2 = await suggestVdos.json();
      // console.log(data2);
      // const duplicate = data2.items.filter((e) => {
      //   return e.id.videoId === search.get("v");
      // });
      // data2.items.indexOf(duplicate[0]);
      const duplicate = data2.items.indexOf(
        data2.items.find((e) => {
          return e.id.videoId === search.get("v");
        })
      );
      data2.items.splice(duplicate, 1);
      setSuggestVdos(data2.items);
      dispatch(
        videoStore({
          [search + "suggest"]: data2.items,
        })
      );
    }
    if (data.items[0].snippet.liveBroadcastContent === "none") {
      const commentsDetails = await fetch(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${search.get(
          "v"
        )}&key=${GOOGLE_API_KEY}`
      );
      const commentsData = await commentsDetails.json();
      // console.log(commentsData);
      // const a = [...new Set(commentsData.items)]
      // console.log(a);

      setComments(commentsData.items);
      setShowComments(true);
      dispatch(
        videoStore({
          [search + "comments"]: commentsData.items,
        })
      );
    } else {
      setShowComments(false);
      dispatch(
        videoStore({
          [search + "comments"]: [],
        })
      );
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className={`flex pt-16 ${!Theme && 'bg-black text-white'}`}>
      <div className="relative flex-grow ">
        <div
          className={`absolute px-2 py-3 ${
            !isMenuOpen ? "ml-[3rem] " : "ml-[3rem]"
          }`}
        >
          <iframe
            className="rounded-xl"
            autoPlay
            width="1000"
            height="500"
            src={`https://www.youtube.com/embed/${search.get("v")}?autoplay=1`} /// by adding autoplay in the url the vdo will start playing automatically
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className=''>
            {videoDetails.length && <DetailVideo info={videoDetails} Theme = {Theme} />}
          </div>
          {showcomments && (
            <div>
              <p className="py-2  text-lg">{comments?.length} Comments</p>
              {comments.length &&
                comments.map((data) => (
                  <div>
                    <CommentsShow info={data} key={data.id} Theme= {Theme}/>
                    {/* {data?.replies ? (
                    <>
                      {!replies && data.snippet.totalReplyCount > 0 ? (
                        <button
                          className="text-blue-600 flex ml-20"
                          onClick={(oEvent) => toggleBtn(oEvent)}
                        >
                          <span className="pt-1 pr-1">
                            {" "}
                            <AiFillCaretDown />{" "}
                          </span>
                          {data.replies.comments.length === 1 ? (
                            <span>{data?.replies?.comments?.length} reply</span>
                          ) : (
                            <span>
                              {data?.replies?.comments?.length} replies
                            </span>
                          )}
                        </button>
                      ) : (
                        <button
                          className="text-blue-600 flex ml-20"
                          onClick={() => {
                            setReplies(false);
                          }}
                        >
                          <span className="pt-1 pr-1">
                            {" "}
                            <AiFillCaretUp />{" "}
                          </span>{" "}
                          {data.replies.comments.length === 1 ? (
                            <span>{data?.replies?.comments?.length} reply</span>
                          ) : (
                            <span>
                              {data?.replies?.comments?.length} replies
                            </span>
                          )}
                        </button>
                      )}
                      {replies && (
                        <div className="pl-5 ml-10 border border-l-black">
                          {data.replies.comments.map((data1) => (
                            <>{<CommentsShow info={data1} key={data1.id} />}</>
                          ))}
                        </div>
                      )}
                    </>
                  ) : null} */}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      <div className=" ">
        {showlive && (
          <div className="pl-[68rem] w-full pt-2 mr-1 pr-4">
            <LiveChat />
          </div>
        )}

        <div className="pl-[70rem] pt-2">
          {!suggestVdos.length && <SuggestShimmer />}
          {suggestVdos?.map((suggest) => (
            <Link
              to={"/watch?v=" + suggest.id.videoId}
              key={suggest.id.videoId}
            >
              <SearchVideo info={suggest} flag={"X"} Theme={Theme}/>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
