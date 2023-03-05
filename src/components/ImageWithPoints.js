import React, { useRef, useEffect } from 'react';

function drawPointsWithBox(context, points, boxWidth, boxHeight) {
  context.fillStyle = 'transparent';
  context.strokeStyle = 'red';
  context.lineWidth = 2;

  points.forEach((point) => {
    // Draw the box
    const x = point[0] - boxWidth / 2;
    const y = point[1] - boxHeight / 2;
    context.strokeRect(x, y, boxWidth, boxHeight);
    context.fillRect(x, y, boxWidth, boxHeight);

    // Draw the point
    context.beginPath();
    context.arc(point[0], point[1], 5, 0, 2 * Math.PI);
    context.fill();
  });
}

function ImageWithPoints({ imageURL, points, boxWidth, boxHeight }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Load the image
    const image = new Image();
    image.src = imageURL; 
    image.onload = () => {
      // Draw the image
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Draw the points with boxes
      drawPointsWithBox(context, points, boxWidth, boxHeight);
    };
  }, [imageURL, points, boxWidth, boxHeight]);

  return <canvas ref={canvasRef} />;
}

export default ImageWithPoints;
