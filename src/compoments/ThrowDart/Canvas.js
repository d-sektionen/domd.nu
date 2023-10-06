import { useRef, useEffect } from 'react';

function Canvas(props) {
  const canvasRef = useRef(null);
  
  // getting centerpoint of dartboard
  const centerPoint = window.innerWidth/2;
  //(window.innerWidth<=window.innerHeight ? window.innerWidth/2 : window.innerHeight);
  console.log(centerPoint);
  const radius = centerPoint * 0.7;

  function getXandY(angle, radius) {
    let xPos;
    let yPos;
    yPos = Math.sin(angle) * radius;
    xPos = Math.cos(angle) * radius;
    return [xPos, yPos];
  }

  const isOdd = number => number % 2 !== 0;


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // triple 6
    let doubArr = [];
    let singOutArr = [];
    let singInnArr = [];
    let tripArr = [];
    const dartValArr = [6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5, 20, 1, 18, 4, 13];

    
    ctx.fillStyle = 'pink';

    // does all the doubles
    for (let step = 0; step<20; step++) {
      let path = new Path2D();
      path.arc(centerPoint, centerPoint, radius, Math.PI * ((-1/20) + (step/10)), Math.PI * ((1/20) + (step/10)));
      
      let endPos = getXandY(Math.PI * (-1/20 - step/10), 0.9412 * radius);
  
      path.lineTo(centerPoint + endPos[0], centerPoint - endPos[1]);
      path.arc(centerPoint, centerPoint, 0.9412 * radius, Math.PI * (1/20 + step/10), Math.PI * (-1/20 + step/10), true);
      
      endPos = getXandY(Math.PI/20, radius);
      
      ctx.fill(path)
      
      doubArr.push(path);
      ctx.stroke(path);
      ctx.fillStyle = isOdd(step) ? 'pink' : 'yellow';
    }

    //does all the outer singles
    for (let step=0; step<20; step++) {
      let path = new Path2D();
      path.arc(centerPoint, centerPoint, radius * 0.9412, Math.PI * ((-1/20) + (step/10)), Math.PI * ((1/20) + (step/10)));
      
      let endPos = getXandY(Math.PI * (-1/20 - step/10), 0.647 * radius);
  
      path.lineTo(centerPoint + endPos[0], centerPoint - endPos[1]);
      path.arc(centerPoint, centerPoint, 0.647 * radius, Math.PI * (1/20 + step/10), Math.PI * (-1/20 + step/10), true);
      
      endPos = getXandY(Math.PI/20, radius * 0.9412);
      ctx.fillStyle = 'brown';
      ctx.fill(path)
      
      ctx.stroke(path);
      singOutArr.push(path);
    }

    // does all the triples
    ctx.fillStyle = 'pink';
    for (let step = 0; step<20; step++) {
      let path = new Path2D();
      path.arc(centerPoint, centerPoint, radius * 0.647, Math.PI * ((-1/20) + (step/10)), Math.PI * ((1/20) + (step/10)));
      
      let endPos = getXandY(Math.PI * (-1/20 - step/10), 0.588 * radius);
  
      path.lineTo(centerPoint + endPos[0], centerPoint - endPos[1]);
      path.arc(centerPoint, centerPoint, 0.588 * radius, Math.PI * (1/20 + step/10), Math.PI * (-1/20 + step/10), true);
      
      endPos = getXandY(Math.PI/20, radius * 0.647);
      
      ctx.fill(path)
      
      ctx.stroke(path);
      tripArr.push(path);
      ctx.fillStyle = isOdd(step) ? 'pink' : 'yellow';
    }

    // singles inner
    ctx.fillStyle = 'brown';
    for (let step = 0; step<20; step++) {
      let path = new Path2D();
      path.arc(centerPoint, centerPoint, radius * 0.588, Math.PI * ((-1/20) + (step/10)), Math.PI * ((1/20) + (step/10)));
      
      let endPos = getXandY(Math.PI * (-1/20 - step/10), 0.118 * radius);
  
      path.lineTo(centerPoint + endPos[0], centerPoint - endPos[1]);
      path.arc(centerPoint, centerPoint, 0.118 * radius, Math.PI * (1/20 + step/10), Math.PI * (-1/20 + step/10), true);
      
      endPos = getXandY(Math.PI/20, radius * 0.588);
      
      ctx.fill(path)
      
      ctx.stroke(path);

      singInnArr.push(path);
    }

    // create red circle
    let singBun = new Path2D();
    singBun.arc(centerPoint, centerPoint, radius * 0.118, 0, 2*Math.PI);
    ctx.fillStyle = 'green';
    ctx.fill(singBun);

    let doubBun = new Path2D();
    doubBun.arc(centerPoint, centerPoint, radius * 0.059, 0, 2*Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill(doubBun);

    const clickHandler = (event) => {
      alert('clicked inside');
      if (ctx.isPointInPath(doubBun, event.offsetX, event.offsetY)) {
        console.log("DUBBELBULLE");
      } else if(ctx.isPointInPath(singBun, event.offsetX, event.offsetY)){
        console.log("ENKELBULLE");
      } else {
        for (let step = 0; step < 20; step++) {
          if (ctx.isPointInPath(doubArr[step], event.offsetX, event.offsetY)) {
            console.log(`You hit double ${dartValArr[step].toString()}`);
            console.log(step);
            break;
          } else if (ctx.isPointInPath(singOutArr[step], event.offsetX, event.offsetY)) {
            console.log(`You hit single ${dartValArr[step]}`);
            break;
          } else if (ctx.isPointInPath(singInnArr[step], event.offsetX, event.offsetY)) {
            console.log(`You hit single ${dartValArr[step]}`);
            break;
          } else if (ctx.isPointInPath(tripArr[step], event.offsetX, event.offsetY)) {
            console.log(`You hit triple ${dartValArr[step]}`);
            break;
          } 
        }
      }
    };

    canvas.addEventListener('click', clickHandler);

    // return () => {
    //   canvas.removeEventListener('click', clickHandler);
    // };
  }, []);

  return <canvas ref={canvasRef} width={props.width} height={props.height} />;
}

export default Canvas;