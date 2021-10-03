import React, {useState, useContext} from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';

const Quiz = () => {
    
    const {score, setScore, setGameState } = useContext(QuizContext);
    
    const [curryQuestion, setCurryQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if (Questions[curryQuestion].asnwer == optionChosen) {
            setScore(score + 1)
        }
        setCurryQuestion(curryQuestion +1);
    }

    const finishQuiz = () =>{
        if (Questions[curryQuestion].asnwer == optionChosen) {
            setScore(score + 1)
        }
        setGameState("endScreen");
    }
    
    return (
        <div className="Quiz">
            <h1>{Questions[curryQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen("A")}> 
                {Questions[curryQuestion].optionA } </button>
                <button onClick={() => setOptionChosen("B")}>
                     {Questions[curryQuestion].optionB } </button>
                <button onClick={() => setOptionChosen("C")}> 
                {Questions[curryQuestion].optionC } </button>
                <button onClick={() => setOptionChosen("D")}> 
                {Questions[curryQuestion].optionD } </button>
            </div>
            {curryQuestion == Questions.length -1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (
            <button onClick={nextQuestion}>Next Question</button>
            )}

        </div>
    )
}

export default Quiz
