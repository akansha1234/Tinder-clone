import React, { useState, useEffect } from "react";
import { database } from "../firebase/Config";
import { Avatar } from "@material-ui/core";
import { useParams } from "react-router-dom";
import SendMessage from "./SendMessage";
const ChatScreen = ({ uid }) => {
  const [messages, setMessages] = useState([]);
  let [reply, setReply] = useState([]);
  let person = useParams();
  //console.log(person.person);
  useEffect(() => {
    database.collection("messages").onSnapshot((snap) => {
      setMessages(snap.docs.map((doc) => doc.data()));
      //console.log(messages);
    });
    return () => {
      //console.log("cleanup"); // This worked for me
    };
  }, []);
  useEffect(() => {
    database.collection("users").onSnapshot((snap) => {
      setReply(snap.docs.map((doc) => doc.data()));
      //console.log(reply);
    });
    return () => {
      //console.log("cleanup"); // This worked for me
    };
  }, []);

  const msg = messages.filter((data) => data.name === person.person);

  return (
    <div>
      {msg.map(({ id, message, profileUrl, name, timestamp }) => (
        <div className="chatscreen" key={id}>
          <Avatar src={profileUrl} alt="images" />
          <div className="chatscreen-text">
            <p>{message}</p>
          </div>
        </div>
      ))}
      {reply.map(({ sender, text, id }) =>
        sender === person.person ? (
          <div className="replyscreen" key={text}>
            <div className=" replyscreen-text">
              <p>{text}</p>
            </div>
          </div>
        ) : (
          " "
        )
      )}
      <SendMessage uid={uid} />
    </div>
  );
};
export default ChatScreen;
