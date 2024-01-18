export const GOOGLE_API_KEY = "AIzaSyDOEA03JD-U7oRFGcH_Wtcj6q6rcxKdGtw";
//  export const GOOGLE_API_KEY ="AIzaSyDUBmcbyC8xYMdrDGeosK6cVs8BHhEJBhI";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

//  const VIDEO_DETAILS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY] '

//  const CHANNEL_DETAILS_API = 'https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY]'

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

const for_SPECIFIC_SEARCH = //just need to change the videoCategoryId like 10 is for music,etc.
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=10&key=AIzaSyDOEA03JD-U7oRFGcH_Wtcj6q6rcxKdGtw";
const SEARCH_RESULT_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=iphone%2015&key=AIzaSyDOEA03JD-U7oRFGcH_Wtcj6q6rcxKdGtw";

export const LIVE_CHAT_COUNT = 20;

export const LIVE_STREAMS = `https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}&eventType=live&type=video&part=snippet&maxResults=25`;
