import React, { useState } from 'react';
import img1 from '../images/PLPATH-FRU-07-Black-Rot-Frogeye-Apple-figure-2.png';
import trviaGif from '../images/quiz-night.gif';
import Game from '../components/Game';

export default function Trivia() {
    const [param,setParam] = useState();
    const [renderGame, setRenderGame] = useState(false);
    const difficulties = {
        "novice":0,
        "expert":1
    }

    const handleGameStart = (e,param) => {
        
    }
  return (
    <>
    {!renderGame && 
    <div className="trvDiv">
        
        <h1>Leaf Disease Trivia!</h1>
        <section className="triv1">
            {/* <div className='tc1'>
                <h3>Apple leaf blotch</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat beatae, illum impedit delectus nulla saepe cumque iste velit optio non odio recusandae sequi ex aut numquam eum magni distinctio quisquam!</p>
            </div> */}
            <div className='tc2'>
                <img src={img1} alt="" />
            </div>
            {/* <div className='tc3'>
                <h3>Apple leaf rot</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores accusamus quae soluta obcaecati unde illum mollitia tempore maiores maxime atque, veniam similique dolorem facilis provident distinctio ab dolores aperiam animi.</p> 
        </div>*/}
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
                    <select required onChange={e => setParam(e.target.value)} name="difficulty" id="">
                        <option value="">-Select difficulty-</option>
                        {Object.keys(difficulties).map(key => {
                            return(
                                <option value={difficulties[key]}>{key}</option>
                            )
                        })}
                    </select>
                    <button onClick={e => handleGameStart(e,param)}>Start Game</button>
                </div>
                
            </div>
        </section>
    </div>
    }
    {renderGame &&
        <Game param={param}/>
    }
    </>
  )
}
