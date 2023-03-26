import React from 'react';
import  img from '../images/bestFriend.jpg';

export default function About() {
  return (
    <div className="aboutSection">
      <h1>About the team!</h1>

      <div className="aboutDiv">
        <img src={img} alt=""/>
        <p>Together, our team brings a wealth of diverse backgrounds and experience to the table, and we are excited to present our AI project to contribute to Farm Food Future Innovation.</p>

        <h3>Check us out!</h3>
            <ul className='aboutList'>
              <li><a href="https://github.com/Mulcro/HackMerced-Project">Github</a></li>
              <li><a href="https://devpost.com/software/leaf-buster-ai">Devpost</a></li>
            </ul>  
      </div>
    </div>
  )
}
