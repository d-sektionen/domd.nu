import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

/*
  <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
*/

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <ReactPlayer
      url={`https://www.youtube.com/embed/${embedId}`}
      controls={true}
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
