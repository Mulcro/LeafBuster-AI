import {useState, useEffect} from 'react';
import Answers from '../images/Trivia-Expert/answers';

const importAll = (r) => {
    return r.keys().map(r);
}

const Popup = (props) => {
    const [game, setGame] = useState(true);
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    const [response, setResponse] = useState();
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [submit, canSubmit] = useState(false);

    //Import all images
    const images = importAll(require.context('../images/Trivia-Expert/leafs', false, /\.(png|jpe?g|svg)$/));

    useEffect(() => {
        console.log(images);
    },[]);

    //Trivia options
    const options = [
        {
            title: "Leaf Rot",
            value: 0
        },
        {
            title: "Leaf Blotch",
            value: 1
        }
    ]

    //Check if all images have been rendered to end game
    useEffect(() => {
        if(count === images.length){
            setGame(false);
        }
        setChecked1(false);
        setChecked2(false);
    },[count]);


    //Check if checkbox is checked and Handle answer selection
   
    const handleCheckBoxChecked = (e,num) => {
        //Currently once an option is chosen you can't uncheck the boxes and you have to pick between the options
        switch(num){
            case 0:
                console.log("Response: "+ e.target.value);
                setChecked1(true);
                setChecked2(false)
                setResponse(e.target.value);
                canSubmit(true);
                break;
            case 1:
                console.log("Response: "+ e.target.value);
                setChecked2(true);
                setChecked1(false);
                setResponse(e.target.value);
                canSubmit(true);
                break;
        }
    }

    //Handle answer submition
    const submitAnswer = (e) => {
        e.preventDefault();

        //Check if answer is correct and add to score
        if(parseInt(response) === Answers[count+1]){
            setScore(prevScore => prevScore + 1);
        }
        //Increment count to render next image
        setCount(prevCount => prevCount + 1);
    }

    return (props.trigger) ? ( 
        <div className="popup">
            {game ?
            <div className="popupInner">
                {/* <button className='closeBtn'>X</button> */}
                <div className='trivTitle'>
                    <h3 >Trivia Game</h3>
                </div>
                <h4>Is this a Leaf Rot or a Leaf Blotch?</h4>
                <p>Score: {score}</p>
                <img className="trivImg" src={images[count]} alt="trivia imgage"/>
                <div className="trivOptions">
                    <label>
                        <input
                            type="checkbox"
                            value={options[0].value}
                            checked={checked1}
                            onChange={ e => handleCheckBoxChecked(e,0)}
                        />
                        <span>{options[0].title}</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value={options[1].value}
                            checked={checked2}
                            onChange={ e => handleCheckBoxChecked(e,1)}
                        />
                        <span>{options[1].title}</span>
                    </label>
                </div>
                <button className="submitBtn" onClick={e => {submitAnswer(e)}} disabled={!submit ? true : false}>
                    Submit
                </button>
                {/* <button className="closeBtn" onClick={() => props.setTrigger(false)}>Close</button> */}
            </div>
            : 
            <div className="popupInner">
                <h3>Trivia Game</h3>
                <h2>This was your score: {score}/{count}!</h2>
                <button className="closeBtn" onClick={() => props.setTrigger(false)}>Close</button>
                <button className="closeBtn" onClick={() => window.location.reload(false)}>Play Again!</button>
            </div>
            }
        </div>
     ) : "";
}
 
export default Popup;