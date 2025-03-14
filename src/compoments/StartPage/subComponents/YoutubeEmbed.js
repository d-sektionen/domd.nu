import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

const YoutubeEmbed = ({ embedId }) => (
  <div
    style={{
      width: "100%",
      maxWidth: "100%",
      aspectRatio: "16/9", // Enforces correct video proportions
      position: "relative",
    }}
  >
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${embedId}`}
      controls
      width="100%"
      height="100%"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
      }}
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
