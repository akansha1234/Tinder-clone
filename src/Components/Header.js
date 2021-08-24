import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase/Config";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const Header = ({ backButton }) => {
  const history = useHistory();
  const signOut = () => {
    auth.signOut();
  };
  return (
    <div className="header-buttons">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" />
        </IconButton>
      ) : (
        <IconButton onClick={signOut}>
          <PersonIcon fontSize="large" />
        </IconButton>
      )}
      <Link to="/">
        <img
          src="https://image.flaticon.com/icons/png/512/520/520561.png"
          alt="tinder-logo"
          className="logo"
        />
      </Link>
      <Link to="/chats">
        <IconButton>
          <ForumIcon fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};
export default Header;
