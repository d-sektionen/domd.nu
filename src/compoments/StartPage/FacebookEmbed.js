import React from 'react';
import { EmbeddedPost } from 'react-facebook';

const FacebookEventWidget = ({ eventUrl }) => {
  return (
    <div>
      <EmbeddedPost href={eventUrl} width="500" height='500'/>
    </div>
  );
};

export default FacebookEventWidget;
