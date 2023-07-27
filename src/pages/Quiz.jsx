import { useState } from "react";
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
        <div>
            {!result ? (
                <div className="quiz_container">
                    <h2>
                        <span>{questions[currentQuestion].id}-</span>
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
                        Próxima
                    </button>
                </div>
                
            ) : (
                <h2>Você acertou {answers.filter(ans => ans===true).length}</h2>
            )}
        </div>
    )
   
}

export default Quiz