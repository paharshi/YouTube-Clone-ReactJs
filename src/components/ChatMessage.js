import React from "react";
import { BiUserCircle } from "react-icons/bi";

const ChatMessage = ({name,msg}) => {
  return (
    <div className="flex items-center w-full shadow-sm p-1">
      <BiUserCircle style={{
        height:'2rem',
        width:'1.5rem'
      }}/>
      <span className="text-xs px-2 font-medium">{name}</span>
      <span className="text-xs">{msg}</span>

    </div>
  );
};

export default ChatMessage;
