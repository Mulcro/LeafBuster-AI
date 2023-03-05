import React, { useState } from 'react';
import axios from 'axios'; 
import ImageWithPoints from './ImageWithPoints';

const URL = 'https://inf-0e4376c8-8b8c-44ab-94cb-42e18e303e49-no4xvrhsfq-uc.a.run.app/detect'; // copy and paste your URL here
const FALLBACK_URL = ''; // copy and paste your fallback URL here

function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

async function detect({imageFile, url=URL, confThres=0.01, iouThres=0.01, ocrModel=undefined, ocrClasses=undefined, ocrLanguage=undefined, retries=10, delay=0}={}) {
  const data = new FormData();
  data.append('image', imageFile);
  data.append('conf_thres', confThres);
  data.append('iou_thres', iouThres);
  if(ocrModel !== undefined){
    data.append('ocr_model', ocrModel);  
  }
  if(ocrClasses !== undefined){
    data.append('ocr_classes', ocrClasses);  
  }
  if(ocrLanguage !== undefined){
    data.append('ocr_language', ocrLanguage);  
  }
  try {
    const response = await axios({ method: 'post', url: url, data: data, headers:{'Content-Type':'multipart/form-data'}});
    return response.data;
  } catch (error) {
    if (error.response) {
      if(error.response.status === 0 || error.response.status === 413) throw new Error('image too large, please select an image smaller than 25MB.');
      else if(error.response.status === 403) throw new Error('you reached your monthly requests limit. Upgrade your plan to unlock unlimited requests.');
      else if(error.response.data) throw new Error(error.response.data.message);
    } else if (retries > 0) {
      if (delay > 0) await sleep(delay);
      return await detect(imageFile, url= FALLBACK_URL ? FALLBACK_URL : URL, confThres=0.01, iouThres=0.01, retries=retries-1, delay=2);
    } else {
      return [];
    }
  }
}

function TheosAPI() {
  const [detecting, setDetecting] = useState(false);
  const [detected, setDetected] = useState(false);
  const [detections, setDetections] = useState('');
  const [error, setError] = useState(''); 
  const [imageURL, setImageURL] = useState('');  
  const [detectionObj, setDetectionObj] = useState();

  // const [x, setX] = useState(0); 
  // const [y, setY] = useState(0); 
  // const [width, setWidth] = useState(0); 
  // const [height, setHeight] = useState(0);


  function onFileSelected(event) {
    const file = event.target.files[0];   
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
    setImageURL(reader.result); 
    };
    setDetecting(true);
    setDetected(false);
    setDetections([]);
    setError(''); 
    detect({imageFile:file})
      .then(detections => {
        setDetected(true);
        setDetecting(false); 
        setDetectionObj(detections);
        console.log(detectionObj);
        const uniqueSet = new Set();
        detections.map(detection => {
            uniqueSet.add(detection.class)
        });

        const uniqueArr = Array.from(uniqueSet);
        console.log(uniqueArr);

        setDetections(uniqueArr);
      })
      .catch(error => {
        setError(error.message);
        setDetecting(false);
      });
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Machine Learning Model</h1>
      {detecting ? <h3>Detecting...</h3> : <div><label htmlFor='file-upload' style={{cursor:'pointer', display:'inline-block', padding:'8px 12px', borderRadius: '5px', border:'1px solid #ccc'}}>Click to select an image</label><input id='file-upload' type='file' accept='image/*' onChange={onFileSelected} style={{display:'none'}}/></div>}
      
      {detected && 
        <div> 
          <h3></h3>
            <ImageWithPoints imageURL={imageURL} detectionObj={detectionObj}/>
        </div>
      }   

      {/* We should send an array of all the coordinates so we can render multiple boxes on the same image otherwise now we'll just have multiples of the same image with different squares as the coordinates. If we send an array of the objects to the imagewithpoints func we can run a loop that goes for n (length of the array times) drawing boxes at each of the coordinates. */}
      {/* {detected && <ImageWithPoints imageURL={imageURL} points={[[100, 100]]} boxWidth={50} boxHeight={50} />}    */}
      
      {error && <h3 style={{color:'red'}}>{error}</h3>}
    </div>
  );
}

export default TheosAPI;