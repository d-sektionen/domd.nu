import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

const VimeoEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <ReactPlayer url={`https://vimeo.com/${embedId}`} controls={true} />
  </div>
);

VimeoEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default VimeoEmbed;
