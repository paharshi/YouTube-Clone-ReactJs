

// export default Sidebar;

// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { AiFillHome, AiOutlineFlag, AiFillFire } from "react-icons/ai";
// import { MdLocalFireDepartment } from "react-icons/md";
// import { CgMusicNote } from "react-icons/cg";
// import { FiFilm } from "react-icons/fi";
// import { GiDiamondTrophy } from "react-icons/gi";
// import { IoGameControllerSharp } from "react-icons/io5";
// import { RiLightbulbLine } from "react-icons/ri";
// import { FiSettings } from "react-icons/fi";
// import { Link, useLocation } from "react-router-dom";

// const Sidebar = () => {
//   const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
//   const location = useLocation();
//   const [color, setColor] = useState({
//     h: false,
//     t: false,
//     m: false,
//     f: false,
//     s: false,
//     g: false,
//     l: false,
//   });
//   const SideBarData = () => {};
//   return (
//     <>
//       {isMenuOpen && location?.pathname === "/watch" && (
//         // <div className="w-48 mt-4 ml-3 shadow-md ">
//         <div
//           className={`w-48 mt-4    shadow-sm fixed top-0 left-0 bg-white h-full overflow-y-auto transition-transform transform ${
//             isMenuOpen ? "translate-x-0" : "-translate-x-48"
//           } `}
//           style={{ zIndex: 1000, marginTop: "60px" }}
//         >
//           <ul className="hover:cursor-pointer">
//             <Link to="/?v=home">
//               {" "}
//               <li className="p-1 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5">
//                 <AiFillHome
//                   style={{
//                     margin: "2px",
//                   }}
//                 />
//                 <span className="mt-[-5px] ml-2 p-1"> Home</span>
//               </li>
//             </Link>

//             <Link to="/?v=10">
//               {" "}
//               <li className="p-1 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5">
//                 <CgMusicNote
//                   style={{
//                     margin: "2px",
//                   }}
//                 />
//                 <span className="mt-[-5px] ml-2 p-1"> Music</span>
//               </li>
//             </Link>
//             <Link to="/?v=1">
//               {" "}
//               <li className="p-1 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5">
//                 <FiFilm
//                   style={{
//                     margin: "2px",
//                   }}
//                 />
//                 <span className="mt-[-5px] ml-2 p-1"> Films</span>
//               </li>
//             </Link>
//             <Link to="/?v=17">
//               {" "}
//               <li className="p-1 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5">
//                 <GiDiamondTrophy
//                   style={{
//                     margin: "2px",
//                   }}
//                 />
//                 <span className="mt-[-5px] ml-2 p-1"> Sports</span>
//               </li>
//             </Link>
//             <Link to="/?v=20">
//               {" "}
//               <li className="p-1 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5">
//                 <IoGameControllerSharp
//                   style={{
//                     margin: "2px",
//                   }}
//                 />
//                 <span className="mt-[-5px] ml-2 p-1"> Gaming</span>
//               </li>
//             </Link>
//             <Link to="/?v=24">
//               {" "}
//               <li className="p-1 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5">
//                 <AiFillFire
//                   style={{
//                     margin: "2px",
//                   }}
//                 />
//                 <span className="mt-[-5px] ml-2 p-1"> Entertainment</span>
//               </li>
//             </Link>
//           </ul>
//           <div className=" m-2 border border-b-gray-400 "></div>
//           <ul className="">
//             <li className="p-1 py-3 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5">
//               <FiSettings
//                 style={{
//                   margin: "2px",
//                 }}
//               />
//               <span className="mt-[-6px] ml-2 p-1">Settings</span>
//             </li>
//             <li className="p-1 w-48 m-2 hover:rounded-lg hover:bg-gray-100 flex ">
//               <AiOutlineFlag
//                 style={{
//                   margin: "2px",
//                   fontSize: "",
//                 }}
//               />
//               <span className="mt-[-6px] ml-2 p-1 ">Report history</span>
//             </li>
//           </ul>
//         </div>
//       )}
//       {isMenuOpen &&
//       location.pathname !== "/watch" && ( //w-48 mt-4 pl-2
//           <div
//             className={`w-48 mt-4 shadow-sm transition-transform ${
//               isMenuOpen ? "fixed top-16 left-0" : "-translate-x-48"
//             }`}
//           >
//             <ul className="hover:cursor-pointer">
//               <Link to="/?v=home">
//                 {" "}
//                 <li
//                   className={`p-1 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5 ${
//                     color.h ? "bg-gray-100" : ""
//                   }`}
//                   onClick={() => {
//                     setColor({
//                       h: true,
//                       t: false,
//                       m: false,
//                       f: false,
//                       s: false,
//                       g: false,
//                       l: false,
//                     });
//                   }}
//                 >
//                   <AiFillHome
//                     style={{
//                       margin: "2px",
//                     }}
//                   />
//                   <span className="mt-[-5px] ml-2 p-1"> Home</span>
//                 </li>
//               </Link>

//               {color.m ? (
//                 <Link to="/?v=10">
//                   {" "}
//                   <li
//                     className="p-1 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5 bg-gray-100"
//                     onClick={() => SideBarData()}
//                   >
//                     <CgMusicNote
//                       style={{
//                         margin: "2px",
//                       }}
//                     />
//                     <span className="mt-[-5px] ml-2 p-1"> Music</span>
//                   </li>
//                 </Link>
//               ) : (
//                 <Link to="/?v=10">
//                   {" "}
//                   <li
//                     className="p-1 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5"
//                     onClick={() => {
//                       setColor({
//                         h: false,
//                         t: false,
//                         m: true,
//                         f: false,
//                         s: false,
//                         g: false,
//                         l: false,
//                       });
//                     }}
//                   >
//                     <CgMusicNote
//                       style={{
//                         margin: "2px",
//                       }}
//                     />
//                     <span className="mt-[-5px] ml-2 p-1"> Music</span>
//                   </li>
//                 </Link>
//               )}
//               {color.f ? (
//                 <Link to="/?v=1">
//                   {" "}
//                   <li className="p-1 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5 bg-gray-100">
//                     <FiFilm
//                       style={{
//                         margin: "2px",
//                       }}
//                     />
//                     <span className="mt-[-5px] ml-2 p-1"> Films</span>
//                   </li>
//                 </Link>
//               ) : (
//                 <Link to="/?v=1">
//                   {" "}
//                   <li
//                     className="p-1 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5"
//                     onClick={() => {
//                       setColor({
//                         h: false,
//                         t: false,
//                         m: false,
//                         f: true,
//                         s: false,
//                         g: false,
//                         l: false,
//                       });
//                     }}
//                   >
//                     <FiFilm
//                       style={{
//                         margin: "2px",
//                       }}
//                     />
//                     <span className="mt-[-5px] ml-2 p-1"> Films</span>
//                   </li>
//                 </Link>
//               )}
//               {color.s ? (
//                 <Link to="/?v=17">
//                   {" "}
//                   <li className="p-1 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5 bg-gray-100">
//                     <GiDiamondTrophy
//                       style={{
//                         margin: "2px",
//                       }}
//                     />
//                     <span className="mt-[-5px] ml-2 p-1"> Sports</span>
//                   </li>
//                 </Link>
//               ) : (
//                 <Link to="/?v=17">
//                   {" "}
//                   <li
//                     className="p-1 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5"
//                     onClick={() => {
//                       setColor({
//                         h: false,
//                         t: false,
//                         m: false,
//                         f: false,
//                         s: true,
//                         g: false,
//                         l: false,
//                       });
//                     }}
//                   >
//                     <GiDiamondTrophy
//                       style={{
//                         margin: "2px",
//                       }}
//                     />
//                     <span className="mt-[-5px] ml-2 p-1"> Sports</span>
//                   </li>
//                 </Link>
//               )}
//               {color.g ? (
//                 <Link to="/?v=20">
//                   {" "}
//                   <li className="p-1 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5 bg-gray-100">
//                     <IoGameControllerSharp
//                       style={{
//                         margin: "2px",
//                       }}
//                     />
//                     <span className="mt-[-5px] ml-2 p-1"> Gaming</span>
//                   </li>
//                 </Link>
//               ) : (
//                 <Link to="/?v=20">
//                   {" "}
//                   <li
//                     className="p-1 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5"
//                     onClick={() => {
//                       setColor({
//                         h: false,
//                         t: false,
//                         m: false,
//                         f: false,
//                         s: false,
//                         g: true,
//                         l: false,
//                       });
//                     }}
//                   >
//                     <IoGameControllerSharp
//                       style={{
//                         margin: "2px",
//                       }}
//                     />
//                     <span className="mt-[-5px] ml-2 p-1"> Gaming</span>
//                   </li>
//                 </Link>
//               )}
//               {color.l ? (
//                 <Link to="/?v=24">
//                   {" "}
//                   <li className="p-1 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5 bg-gray-100">
//                     <AiFillFire
//                       style={{
//                         margin: "2px",
//                       }}
//                     />
//                     <span className="mt-[-5px] ml-2 p-1"> Entertainment</span>
//                   </li>
//                 </Link>
//               ) : (
//                 <Link to="/?v=24">
//                   {" "}
//                   <li
//                     className="p-1 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5"
//                     onClick={() => {
//                       setColor({
//                         h: false,
//                         t: false,
//                         m: false,
//                         f: false,
//                         s: false,
//                         g: false,
//                         l: true,
//                       });
//                     }}
//                   >
//                     <AiFillFire
//                       style={{
//                         margin: "2px",
//                       }}
//                     />
//                     <span className="mt-[-5px] ml-2 p-1"> Entertainment</span>
//                   </li>
//                 </Link>
//               )}
//             </ul>
//             <div className=" m-2 border border-b-gray-400 "></div>
//             <ul className="">
//               <li className="p-1 py-3 m-2 hover:rounded-lg hover:bg-gray-100 flex text-md mr-5">
//                 <FiSettings
//                   style={{
//                     margin: "2px",
//                   }}
//                 />
//                 <span className="mt-[-6px] ml-2 p-1">Settings</span>
//               </li>
//               <li className="p-1 w-48 m-2 hover:rounded-lg hover:bg-gray-100 flex ">
//                 <AiOutlineFlag
//                   style={{
//                     margin: "2px",
//                     fontSize: "",
//                   }}
//                 />
//                 <span className="mt-[-6px] ml-2 p-1 ">Report history</span>
//               </li>
//             </ul>
//           </div>
//         )}

//       {!isMenuOpen &&
//       location.pathname !== "/watch" && ( //w-20 mt-4 ml-5
//           <div className={`w-20 mt-2 ml-5 pt-16 fixed`}>
//             <ul className="hover:cursor-pointer">
//               <Link to="/">
//                 {" "}
//                 <li className="p-1 m-2 hover:rounded-lg hover:bg-gray-100 ">
//                   <AiFillHome
//                     style={{
//                       margin: "2px",
//                       fontSize: "25px",
//                     }}
//                   />
//                 </li>
//               </Link>

//               <li className="p-1 m-2 hover:rounded-lg hover:bg-gray-100">
//                 <CgMusicNote
//                   style={{
//                     margin: "2px",
//                     fontSize: "25px",
//                   }}
//                 />
//               </li>
//               <li className="p-1 m-2 hover:rounded-lg hover:bg-gray-100">
//                 <FiFilm
//                   style={{
//                     margin: "2px",
//                     fontSize: "25px",
//                   }}
//                 />
//               </li>
//               <li className="p-1 m-2 hover:rounded-lg hover:bg-gray-100">
//                 <GiDiamondTrophy
//                   style={{
//                     margin: "2px",
//                     fontSize: "25px",
//                   }}
//                 />
//               </li>
//               <li className="p-1 m-2 hover:rounded-lg hover:bg-gray-100 ">
//                 <IoGameControllerSharp
//                   style={{
//                     margin: "2px",
//                     fontSize: "25px",
//                   }}
//                 />
//               </li>
//               <li className="p-1 m-2 hover:rounded-lg hover:bg-gray-100">
//                 <AiFillFire
//                   style={{
//                     margin: "2px",
//                     fontSize: "25px",
//                   }}
//                 />
//               </li>
//             </ul>
//             <div className="w-10 m-2 border border-b-gray-400 "></div>
//             <ul className="">
//               <li className="p-1 py-3 m-2 hover:rounded-lg hover:bg-gray-100">
//                 <FiSettings
//                   style={{
//                     margin: "2px",
//                     fontSize: "25px",
//                   }}
//                 />
//               </li>
//               <li className="p-1  m-2 hover:rounded-lg hover:bg-gray-100 flex ">
//                 <AiOutlineFlag
//                   style={{
//                     margin: "2px",
//                     fontSize: "25px",
//                   }}
//                 />
//               </li>
//             </ul>
//           </div>
//         )}
//     </>
//   );
// };

// export default Sidebar;

const CommentsShow = ({ info }) => {
    const { snippet } = info;
  
    const { topLevelComment } = snippet;
  
    const { authorDisplayName, authorProfileImageUrl, textOriginal } = snippet;
  
    // info.replies.comments[0].snippet /// for comment replies
  
    return (
      <div>
        <div className="flex p-1 shadow-md">
          {snippet?.topLevelComment ? (
            <>
              <img
                className="p-1 rounded-full w-10 h-10"
                alt="authorProfileImageUrl"
                src={topLevelComment?.snippet?.authorProfileImageUrl}
              />
              <div className="px-2 py-2">
                <p className="font-semibold text-sm">
                  {topLevelComment?.snippet?.authorDisplayName}
                </p>
                <p className="text-sm">
                  {" "}
                  {topLevelComment?.snippet?.textOriginal}
                </p>
                {/* <div className="border"></div> */}
              </div>
            </>
          ) : (
            <>
              <img
                className="p-1 rounded-full w-10 h-10"
                alt="authorProfileImageUrl"
                src={authorProfileImageUrl}
              />
              <div className="px-2">
                <p className="font-semibold text-sm">{authorDisplayName}</p>
                <p className="text-sm"> {textOriginal}</p>
                {/* <div className="border"></div> */}
              </div>
            </>
          )}
        </div>
        <div className="border"></div>
      </div>
    );
  };


  import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useSelector } from "react-redux";
import SearchVideo from "./SearchVideo";
import Sidebar from "./Sidebar";
import { videoStore } from "../utils/videoSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [search] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState([]);
  const [channelDetails, setChannelDetails] = useState([]);
  const [comments, setComments] = useState([]);
  const [suggestVdos, setSuggestVdos] = useState([]);
  const videoCache = useSelector((store) => store.video);
  const [replies, setReplies] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  useEffect(() => {
    if (videoCache[search]) {
      setVideoDetails(videoCache[search]);
      setSuggestVdos(videoCache[search + "suggest"]);
      setComments(videoCache[search + "comments"]);
    } else {
      getVideoDetail();
    }
  }, [search]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const getVideoDetail = async () => {
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
      setSuggestVdos(data2.items);
      dispatch(
        videoStore({
          [search + "suggest"]: data2.items,
        })
      );
    }
    const commentsDetails = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${search.get(
        "v"
      )}&key=${GOOGLE_API_KEY}`
    );
    const commentsData = await commentsDetails.json();
    console.log(commentsData);
    setComments(commentsData.items);

    dispatch(
      videoStore({
        [search + "comments"]: commentsData.items,
      })
    );
  };
  return (
    <div className="flex pt-16">
      <div className="relative flex-grow ">
        {/* Sidebar */}

        <div
          className={`absolute px-2 py-3 ${
            !isMenuOpen ? "ml-[8.4rem] " : "ml-[8.4rem]"
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
          <div className="">{<DetailVideo info={videoDetails} />}</div>
          <div>
            <p className="py-2  text-lg">{comments?.length} Comments</p>
            {comments.length &&
              comments.map((data) => (
                <div>
                  <CommentsShow info={data} key={data.id} />
                  {/* {data?.replies ? (
                    <>
                      <div className="pl-5 ml-10 border border-l-black">
                        {data.replies.comments.map((data1) => (
                          <>
                            
                            {<CommentsShow info={data1} key={data1.id} />}
                          </>
                        ))}
                      </div>
                    </>
                  ) : null} */}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="pl-[72rem]">
        {suggestVdos?.map((suggest) => (
          <Link to={"/watch?v=" + suggest.id.videoId} key={suggest.id.videoId}>
            <SearchVideo info={suggest} flag={"X"} />
          </Link>
        ))}
      </div>
    </div>
  );
};

const DetailVideo = ({ info }) => {
  // console.log(info);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };
  const title = info[0]?.snippet?.localized?.title;
  const channelTitle = info[0]?.snippet?.channelTitle;
  const subscriptions = info[1]?.statistics?.subscriberCount;
  const img = info[1]?.snippet?.thumbnails?.default?.url;
  const like = info[0]?.statistics?.likeCount;
  const view = info[0]?.statistics?.viewCount;
  const description = info[0]?.snippet?.localized?.description;
  const publishedAt = info[0]?.snippet?.publishedAt;
  const a = new Date(publishedAt);
  const date =
    a.constructor().split(" ")[1] +
    " " +
    a.constructor().split(" ")[2] +
    " " +
    a.constructor().split(" ")[3];

  //console.log(statistics);

  return (
    <>
      <p className="py-2 font-semibold">{title}</p>
      <div className="flex">
        <img alt="channelImg" src={img} className="h-10 rounded-md p-1" />
        <div className="px-2">
          <p className="font-bold">{channelTitle}</p>
          <p className="text-sm"> {subscriptions} subscribers</p>
        </div>
        <button className="px-3 m-2 bg-black text-white rounded-2xl">
          <span className="text-sm">subscribe</span>
        </button>
        <button className="bg-gray-100 px-1 rounded-l-xl text-sm m-2 ml-[35rem]">
          {like}
        </button>
      </div>
      <div className="bg-gray-100 rounded-lg">
        <div className="flex mt-5 font-semibold">
          <p className=" p-1">{view} views</p>
          <p className="p-1">{date}</p>
        </div>
        {/* <div className="p-1 m-2 w-auto"> */}
        <DescriptionforVideo
          description={description}
          isExpanded={isDescriptionExpanded}
          toggleDescription={toggleDescription}
        />
        {/* </div> */}

        {/* <p className="flex-wrap text-sm">{description}</p> */}
      </div>
    </>
  );
};

const DescriptionforVideo = ({
  description,
  isExpanded,
  toggleDescription,
}) => {
  // Display the description based on the isExpanded state
  const displayDescription = isExpanded
    ? description
    : description?.slice(0, 100); // You can adjust the character limit

  return (
    <>
      <div className="p-1 m-2 w-auto">
        {displayDescription?.split("\n").map((paragraph, index) => (
          <p className="text-xs" key={index}>
            {paragraph}
          </p>
        ))}
      </div>

      {!isExpanded && (
        <button
          onClick={toggleDescription}
          className="text-blue-500 cursor-pointer"
        >
          Read More
        </button>
      )}
    </>
  );
};

// const DescriptionforVideo = ({
//   description,
//   isExpanded,
//   toggleDescription,
// }) => {
//   // Display the description based on the isExpanded state
//   const displayDescription = isExpanded
//     ? description
//     : description?.slice(0, 100); // You can adjust the character limit

//   const paragraphs = displayDescription?.split("\n").map((paragraph, index) => {
//     const parts = paragraph?.split(/(https?:\/\/[^\s]+|\#[^\s]+)/g);
//     return (
//       <p key={index}>
//         {parts?.map((part, i) => {
//           if (i % 2 === 0) {
//             // Even indexes are regular text

//             return part;
//           } else if (part.startsWith("#")) {
//             // If the part starts with #, render it as blue text
//             return (
//               <span key={i} className="text-blue-500">
//                 {part}
//               </span>
//             );
//           } else {
//             // Odd indexes are URLs
//             return (
//               <a
//                 key={i}
//                 href={part}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 cursor-pointer"
//               >
//                 {part}
//               </a>
//             );
//           }
//         })}
//       </p>
//     );
//   });

//   return (
//     <>
//       <div className="p-1 m-2 w-auto text-sm">{paragraphs}</div>

//       {!isExpanded && description?.length>100 ?(
//         <button
//           onClick={toggleDescription}
//           className="text-blue-500 cursor-pointer"
//         >
//           Read More
//         </button>
//       ) : null}
//     </>
//   );
// };

// const CommentsShow = ({ info }) => {
//   const { snippet } = info;

//   const { topLevelComment } = snippet;

//   const { authorDisplayName, authorProfileImageUrl, textOriginal } = snippet;
//   const [showReplies, setShowReplies] = useState(false);
 
  
//   return (
//     <div>
//       <div className="flex p-1 shadow-md">
//         {snippet?.topLevelComment ? (
//           <>
//             <img
//               className="p-1 rounded-full w-10 h-10"
//               alt="authorProfileImageUrl"
//               src={topLevelComment?.snippet?.authorProfileImageUrl}
//             />
//             <div className="px-2 py-2">
//               <p className="font-semibold text-sm">
//                 {topLevelComment?.snippet?.authorDisplayName}
//               </p>
//               <p className="text-sm">
//                 {topLevelComment?.snippet?.textOriginal}
//               </p>
//               {/* <div className="border"></div> */}

             
//             </div>
//           </>
//         ) : ( 
//           <>
//             <img
//               className="p-1 rounded-full w-10 h-10"
//               alt="authorProfileImageUrl"
//               src={authorProfileImageUrl}
//             />
//             <div className="px-2">
//               <p className="font-semibold text-sm">{authorDisplayName}</p>
//               <p className="text-sm"> {textOriginal}</p>
//               {/* <div className="border"></div> */}
//             </div>
//           </>
//         )}
//       </div>
//       <div className="border"></div>
//     </div>
//   );
// };

// const CommentsShow = ({ info }) => {
//   const { snippet } = info;
//   const { topLevelComment } = snippet;
//   const { authorDisplayName, authorProfileImageUrl, textOriginal } = snippet;

//   // State variable to track whether replies should be visible
//   const [showReplies, setShowReplies] = useState(false);

//   // Function to toggle the visibility of replies
//   const toggleReplies = () => {
//     setShowReplies(!showReplies);
//   };

//   return (
//     <div>
//       <div className="flex p-1 shadow-md">
//         {snippet?.topLevelComment ? (
//           <>
//             <img
//               className="p-1 rounded-full w-10 h-10"
//               alt="authorProfileImageUrl"
//               src={topLevelComment?.snippet?.authorProfileImageUrl}
//             />
//             <div className="px-2 py-2">
//               <p className="font-semibold text-sm">
//                 {topLevelComment?.snippet?.authorDisplayName}
//               </p>
//               <p className="text-sm">
//                 {topLevelComment?.snippet?.textOriginal}
//               </p>
//               {/* <div className="border"></div> */}
//             </div>
//           </>
//         ) : (
//           <>
//             <img
//               className="p-1 rounded-full w-10 h-10"
//               alt="authorProfileImageUrl"
//               src={authorProfileImageUrl}
//             />
//             <div className="px-2">
//               <p className="font-semibold text-sm">{authorDisplayName}</p>
//               <p className="text-sm"> {textOriginal}</p>
//               {/* <div className="border"></div> */}
//             </div>
//           </>
//         )}
//       </div>
//       <div className="border"></div>

//       {/* Conditionally render "View Replies" button if there are replies */}
//       {snippet?.totalReplyCount>0 && !showReplies && (
//         <button
//           className="text-blue-600"
//           onClick={toggleReplies}
//         >
//           View Replies
//         </button>
//       )}

//       {/* Conditionally render replies if they are visible */}
//       {showReplies && (
//         <div className="pl-5 ml-10 border border-l-black">
//           {/* Loop through and display replies here */}
//           {info?.replies?.comments.map((reply) => (
//             <div key={reply.id}>
//               <img
//                 className="p-1 rounded-full w-10 h-10"
//                 alt="authorProfileImageUrl"
//                 src={reply?.snippet?.authorProfileImageUrl}
//               />
//               <div className="px-2">
//                 <p className="font-semibold text-sm">{reply?.snippet?.authorDisplayName}</p>
//                 <p className="text-sm">{reply?.snippet?.textOriginal}</p>
//                 {/* You can add additional styling or content for each reply here */}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };




export default WatchPage;
