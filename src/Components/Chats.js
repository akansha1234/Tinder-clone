import React, { useState, useEffect } from "react";
import { database } from "../firebase/Config";
import Chat from "./Chat";
const Chats = () => {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    database.collection("messages").onSnapshot((snap) => {
      setMessage(snap.docs.map((doc) => doc.data()));
      //console.log("chats mounted");
    });
  }, []);
  return (
    <div>
      {message.map(({ id, message, profileUrl, name, timestamp }) => (
        <Chat
          key={id}
          name={name}
          message={message}
          profileUrl={profileUrl}
          timestamp={timestamp}
        />
      ))}
    </div>
  );
};
export default Chats;
