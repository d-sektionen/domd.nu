import React from 'react';
import interact from 'interactjs';
import './dart.css';

export default function Dart({updateDartPos, posX, posY}) {
  const position = { x: posX, y: posY }

  interact('.draggable').draggable({
    listeners: {

      // click: (event) => {
      //   console.log("test if its clickable")
      // },
      start (event) {
        console.log(event.type, event.target)
      },
      move (event) {
        position.x += event.dx
        position.y += event.dy

        event.target.style.transform =
          `translate(${position.x}px, ${position.y}px)`;
        // posX = event.pageX;
        // posY = event.pageY;
        // console.log(posX, posY);
        // console.log(event.pageX);
      },
      end (event) {
        updateDartPos({posX: event.pageX, posY: event.pageY});
        console.log("somee")
      }
    }
  });

  // interact(".dropzone")
  // .dropzone({
  //   ondrop: function (event) {
  //     draggableElement.style.background = "red";
  //     droppableElement.style.background = "#000";
  //     span.textContent = "INSIDE!";
  //   },
  //   ondragleave: function (event) {
  //     draggableElement.style.background = "#29e";
  //     droppableElement.style.background = "#bfe4ff";
  //     span.textContent = "OUTSIDE!";
  //   }
  // })
  // .on("dropactivate", function (event) {});


    
  return (
    <div className='draggable'>
      This is test
    </div>
  );
}