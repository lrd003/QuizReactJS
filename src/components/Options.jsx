import {useContext} from 'react';
import {QuizContext} from '../context/quiz'

import "./Options.css"

const Options = ({ options, selectOption, answer }) => {
    const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className={`option 
    ${quizState.answerSelected && options === answer ? 'correct' : ""}
    ${quizState.answerSelected && options !== answer ? 'wrong' : ""}
    `} onClick={() => selectOption()}>
        <p>{options}</p>
    </div>
  )
}

export default Options