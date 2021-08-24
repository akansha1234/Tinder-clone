import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Chats from "./Components/Chats";
import ChatScreen from "./Components/ChatScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase/Config";
import Login from "./Components/Login";
export default function App() {
  const [user, setUser] = useState("");
  const [uid, setUid] = useState("");
  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
      setUid(user.uid);
    });
  };
  useEffect(() => {
    authListener();
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          {!user ? (
            <Login />
          ) : (
            <Route exact path="/">
              <Header />
              <Cards />
              <Footer />
            </Route>
          )}
          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/chat/:person">
            <Header backButton="/chats" />
            <ChatScreen uid={uid} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
