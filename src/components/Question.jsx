import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Options from './Options'

import  "./Question.css"

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestionAtual = quizState.questions[quizState.currentQuestion]
    const onSelectOption = (option) => {
      dispatch({
        type: "CHECK_ANSWER", 
        payload: {answer: currentQuestionAtual.answer, option},
    })
    };

  return (
    <div id="question">
        <p>Pergunta {quizState.currentQuestion + 1 } de {quizState.questions.length}</p>
        <h2> {currentQuestionAtual.question}</h2>
        <div className="options-container">
            {
            currentQuestionAtual.options.map((options) => 
            (<Options options={options} 
            key={options} 
            answer={currentQuestionAtual.answer} 
            selectOption={() => onSelectOption(options)}/>))
            };
        </div>
        {quizState.answerSelected && <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>} 
    </div>
  )
}

export default Question