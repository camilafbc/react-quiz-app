import { useNavigate } from "react-router-dom";
import questions from "../database.json";
import useQuiz from "../hooks/useQuiz";

function Quiz(){

    const { result, answers, checkAnswer, handleQuestion, currentQuestion } = useQuiz()

    const navigate = useNavigate()
    const backToHome = () => {
        navigate('/')
    }
    
    return (
        <>
        {/*  */}
            {!result ? (
                <div className="quiz_container">
                    <span>{questions[currentQuestion].id} de {questions.length}</span>
                    <h2>
                        {questions[currentQuestion].question}
                    </h2>
                    {questions[currentQuestion].options.map((option) => (
                        <button
                            className="option"
                            key={option}
                            onClick={() => {
                                checkAnswer(option)
                                handleQuestion()
                            }}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            ) : (
                <div className="result_container">
                    <img src="https://img.icons8.com/clouds/100/test-passed.png" alt="" />
                    <h1>Você teve <br/> {answers.filter(ans => ans===true).length} acertos!</h1>
                    <button onClick={backToHome}>Tentar outra vez!</button>
                </div>
            )}
        </>
    )
}

export default Quiz