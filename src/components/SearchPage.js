import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import SearchVideo from "./SearchVideo";
import { useSelector } from "react-redux";
import { SearchPageShimmer } from "./Shimmer";

const SearchPage = () => {
  const { id } = useParams();
  const [searchlist, setSearchList] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const Theme = useSelector((store) => store.app.Theme);

  useEffect(() => {
    getSearchList();
  }, [id]);
  // console.log(id);
  const getSearchList = async () => {
    const searchData = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${id}%2023&key=${GOOGLE_API_KEY}`
    );
    const data = await searchData.json();
    //  console.log(data.items);
    setSearchList(data.items);
  };

  return (
    <>
      
      <div>{!searchlist.length && <SearchPageShimmer />}</div>
      <div
        className={`flex flex-col items-center  ${
          !isMenuOpen ? "ml-[500px]" : "ml-[500px]"
        } p-16`}
      >
        {searchlist &&
          searchlist.map((search) => (
            <Link to={"/watch?v=" + search.id.videoId} key={search.id.videoId}>
              <SearchVideo info={search} Theme={Theme} />
            </Link>
          ))}
        {/* <SearchVideo info={searchlist[0]} /> */}
      </div>
    </>
  );
};

export default SearchPage;
