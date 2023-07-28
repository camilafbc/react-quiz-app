import { useState } from "react";
import { Link } from "react-router-dom";
import questions from "../database.json";


function Quiz(){

    const [result, setResult] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState([])

    const handleQuestion = () => {
        
        if(answers.length < currentQuestion + 1) return
        
        if(currentQuestion < questions.length - 1){
            setCurrentQuestion((currentState) => currentState + 1)
        } else {
            setResult(true)
        }
    }

    const checkAnswer = (resposta) => {
        if(resposta === questions[currentQuestion].correctAnswer){
            setAnswers([...answers, true])
        } else {
            setAnswers([...answers, false])
        }
    }

    
    return (
        <>
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
                            }}
                        >
                            {option}
                        </button>
                    ))}
                    <button 
                        className="next"
                        onClick={handleQuestion}
                    >
                        {currentQuestion === questions.length - 1 ? "Finalizar" : "Próxima >>"}
                    </button>
                </div>
                
            ) : (
                <div className="result_container">
                    <img src="https://img.icons8.com/clouds/100/test-passed.png" alt="" />
                    <h1>Você teve <br/> {answers.filter(ans => ans===true).length} acertos!</h1>
                    <Link to="/">
                        <button onClick={() => console.log(answers)}>Outra Vez!</button>
                    </Link>
                </div>
            )}
        </>
    )
   
}

export default Quiz