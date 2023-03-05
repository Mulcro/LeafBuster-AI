import React, { useRef, useEffect } from 'react'; 

function drawPointsWithBox(context, name, points, boxWidth, boxHeight) {
  //let name = name; 
  console.log(typeof name)
  if (name === 'leaf blotch') {
    name = 'Blotch';
  } else if (name === 'leaf root') {
    name = 'Rot';
  }

  context.fillStyle = 'transparent';
  context.strokeStyle = 'red';
  context.lineWidth = 2;

  points.forEach((point) => {
    // Draw the box
    const x = point[0] - boxWidth / 2;
    const y = point[1] - boxHeight / 2;
    context.strokeRect(x, y, boxWidth, boxHeight);
    context.fillRect(x, y, boxWidth, boxHeight);

    // Create a separate canvas element for the text
    const textCanvas = document.createElement('canvas');
    textCanvas.width = boxWidth;
    textCanvas.height = boxHeight;
    const textContext = textCanvas.getContext('2d');
    textContext.fillStyle = 'white';
    textContext.font = 'bold 16px sans-serif';
    textContext.textAlign = 'center';
    textContext.textBaseline = 'middle';
    textContext.fillText(name, boxWidth / 2, boxHeight / 2);

    // Draw the text canvas onto the main canvas
    const textX = Math.round(point[0] - boxWidth / 2);
    const textY = Math.round(point[1] - boxHeight / 2); 

    context.drawImage(textCanvas, textX, textY);
    
    // Draw the point
    context.beginPath();
    context.arc(point[0], point[1], 5, 0, 2 * Math.PI);
    context.fill();
  });
}



function ImageWithPoints({imageURL, detectionObj}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Load the image
    const image = new Image();
    image.src = imageURL; 
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);
      // Draw the points with boxes
      detectionObj.map((obj) => {
        const points = [[obj.x,obj.y]]
        drawPointsWithBox(context, obj.class, points, obj.width, obj.height);
      })
    };
    
  });

  return <canvas ref={canvasRef} />;
}

export default ImageWithPoints;
