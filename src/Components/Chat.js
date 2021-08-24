import React from "react";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
const Chat = ({ name, message, profileUrl, timestamp, id }) => {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat" key={id}>
        <Avatar src={profileUrl} alt="img-logo" className="chat-image" />
        <div className="chat-message">
          <h3>{name}</h3>
          <p>{message}</p>
        </div>
        <p className="timestamp">{timestamp}</p>
      </div>
    </Link>
  );
};
export default Chat;
