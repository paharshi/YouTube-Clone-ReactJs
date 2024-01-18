import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLoginName, addMessage } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";
import { generateRandomName, generateString } from "../utils/useCase";
import { LoginName } from "../utils/loadContext";
import { AiOutlineLock } from "react-icons/ai";
import { useNavigate, useSearchParams } from "react-router-dom";

const LiveChat = () => {
  const [liveText, setLiveText] = useState("");
  const [showchat, setShowChat] = useState(true);
  const [search] = useSearchParams();
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [name] = useContext(LoginName);
  const navigate = useNavigate();
  const Theme = useSelector(store => store.app.Theme)

  useEffect(() => {
    const live = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateString(10),
        })
      );
    }, 1000);

    return () => {
      clearInterval(live);
    };
  }, []);

  return (
    <>
      <div className={`border rounded-lg ${!Theme ? "border-white" : "border-black"} `}>
        {showchat && (
          <>
            <div className={`w-full h-[500px]  p-2 ${!Theme ? "bg-slate-900" : "bg-slate-100"}  mr-[12rem]  border-b-2 overflow-y-scroll flex flex-col-reverse`}>
              {chatMessages.map((message, index) => (
                <ChatMessage
                  name={message.name}
                  msg={message.message}
                  key={index}
                />
              ))}
              {/* <ChatMessage name='{message.name}' msg='{message.message}' /> */}
            </div>
            {name !== "" ? (
              <form
                className="w-full p-1 rounded-lg px-2 mx-2 pt-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch(
                    addMessage({
                      name: name,
                      message: liveText,
                    })
                  );
                  setLiveText("");
                }}
              >
                <input
                  className={`w-72 p-2 outline-none ${!Theme ? "text-white bg-black" : ""}`}
                  type="text"
                  value={liveText}
                  placeholder="add a comment"
                  onChange={(e) => setLiveText(e.target.value)}
                />
                <button className={`px-2 mx-2 ${!Theme ? "bg-green-600": "bg-green-100"} rounded-md`}>
                  Send
                </button>
              </form>
            ) : (
              <div className={`p-1  bg-gray-300  text-center ${!Theme ? "text-black" : ""}`}>
                <button
                  className=" rounded-md w-full flex items-center px-16"
                  onClick={() => {
                    navigate("/login");
                    dispatch(addLoginName(search.get("v")));
                  }}
                >
                  <AiOutlineLock className={`bg-gray-300 m-1`} />
                  Please login to add comments
                </button>
              </div>
            )}
          </>
        )}
        <div className={`rounded hover:bg-gray-200 w-full ${!Theme && "text-white hover:text-black" }`}>
          {showchat ? (
            <button
              className="w-full font-bold text-xs p-1 rounded"
              onClick={() => {
                setShowChat(false);
              }}
            >
              Hide chat replay
            </button>
          ) : (
            <button
              className="w-full font-bold text-xs p-1 rounded"
              onClick={() => {
                setShowChat(true);
              }}
            >
              Show chat replay
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default LiveChat;
