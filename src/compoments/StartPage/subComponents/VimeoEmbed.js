import React from "react";

const VimeoEmbed = ({ embedId }) => {
  return (
    <div style={{ position: "relative", paddingTop: "56.25%", width: "100%" }}>
      <iframe
        src={`https://player.vimeo.com/video/${embedId}`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vimeo Video"
      />
    </div>
  );
};

export default VimeoEmbed;
