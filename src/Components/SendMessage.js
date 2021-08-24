import React, { useState } from "react";
import { database } from "../firebase/Config";
import { useParams } from "react-router-dom";
const SendMessage = ({ uid }) => {
  const [msg, setMsg] = useState("");
  let person = useParams();
  const SendMessage = async (e) => {
    e.preventDefault();
    //  const [uid,profileUrl]
    await database.collection("users").add({
      text: msg,
      sender: person.person,
      id: uid
    });
    setMsg("");
  };
  return (
    <div className="send-message">
      <form onSubmit={SendMessage} className="send-message">
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="send-input"
          placeholder="Type a message....."
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};
export default SendMessage;
