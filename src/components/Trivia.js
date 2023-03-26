import React, { useState } from 'react';
import img1 from '../images/PLPATH-FRU-07-Black-Rot-Frogeye-Apple-figure-2.png';
import trviaGif from '../images/quiz-night.gif';
import Popup from './GamePopup';

export default function Trivia() {
    const [gameTrigger, setGameTrigger] = useState(false);


    const handleGameStart = () => {
        console.log("working");
        setGameTrigger(true);
        console.log(gameTrigger);
    }

  return (
    <div className="trvDiv">
        
        <h1>Leaf Disease Trivia!</h1>
        <section className="triv1">
            <div className='tc2'>
                <img src={img1} alt="" />
            </div>
        </section>
        <section className="trvDiv2">
            <div>
                <h2>How to Play!</h2>
                <p>Objective: The objective of the game is to match the disease with its corresponding leaf. The player must identify whether the leaf is an apple rot leaf disease or a blotch leaf disease.</p>

                <p>Gameplay: The game can be played by selecting one of the two categories: apple rot leaves, or blotch leaves. A picture of a leaf will be presented and the player must match it with a disease. The player will need to observe the pattern and color of the leaves to make the correct match.
                </p>

                <p>Scoring: The player will earn points for each correct match. </p>
            </div>
        </section>

        <section className="trvDiv3">
            <div className="trvTitle">
                <h2>Trivia Time!</h2>
            </div>
            <div className="trvLaunch">
                <img src={trviaGif} alt="" />
                <div>
                   <button onClick={e => handleGameStart(e)}>Start Game</button> 
                </div>
                <Popup trigger={gameTrigger} setTrigger={setGameTrigger}/>
            </div>
        </section>
    </div>
  )
}
