import React from "react";

const FacebookEmbed = ({ src }) => {
  return (
    <div style={{ position: "relative", paddingTop: "56.25%", width: "100%" }}>
      <iframe
        src={src}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          overflow: "hidden",
        }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default FacebookEmbed;