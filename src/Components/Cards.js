import React, { useState, useEffect } from "react";
import { database } from "../firebase/Config";
import TinderCard from "react-tinder-card";
const Cards = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    database
      .collection("people")
      .onSnapshot((snap) => setPeople(snap.docs.map((doc) => doc.data())));
  }, []);
  return (
    <div className="tinder-cards">
      {people.map((profile) => (
        <TinderCard
          className="swipe"
          preventSwipe={["up", "down"]}
          key={profile.name}
        >
          <div
            style={{ backgroundImage: `url(${profile.url})` }}
            className="card"
            key={profile.name}
          >
            <h3>{profile.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};
export default Cards;
