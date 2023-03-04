import React, { useState } from 'react';
import axios from 'axios';

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

  function onFileSelected(event) {
    const file = event.target.files[0];
    setDetecting(true);
    setDetected(false);
    setDetections([]);
    setError('');
    detect({imageFile:file})
      .then(detections => {
        setDetected(true);
        setDetecting(false);
        setDetections(detections.length > 0? `${detections.length} OBJECTS FOUND\n${detections.map((detection, index) => ` ${'_'.repeat(30)}\n|\n| ${index+1}. ${detection.class}\n|\n|${'‾'.repeat(30)}\n|  ‣ confidence: ${detection.confidence*100}%\n|  ‣ x: ${detection.x}\n|  ‣ y: ${detection.y}\n|  ‣ width: ${detection.width}\n|  ‣ height: ${detection.height}\n|${'text' in detection? '  ‣ text: ' + detection.text:''}\n ${'‾'.repeat(30)}\n`).join('')}`: 'No objects found.');
      })
      .catch(error => {
        setError(error.message);
        setDetecting(false);
      });
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Theos API</h1>
      {detecting ? <h3>Detecting...</h3> : <div><label htmlFor='file-upload' style={{cursor:'pointer', display:'inline-block', padding:'8px 12px', borderRadius: '5px', border:'1px solid #ccc'}}>Click to select an image</label><input id='file-upload' type='file' accept='image/*' onChange={onFileSelected} style={{display:'none'}}/></div>}
      {detected && <h3><pre>{detections}</pre></h3>}
      {error && <h3 style={{color:'red'}}>{error}</h3>}
    </div>
  );
}

export default TheosAPI;