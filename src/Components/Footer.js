import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
const Footer = () => {
  return (
    <div className="footer-buttons">
      <IconButton className="replay">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="close">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="heart">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="thunder">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};
export default Footer;
