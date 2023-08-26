import { useState } from "react";
import questions from "../database.json";

const useQuiz = () => {

    const [result, setResult] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState([])

    // controla o quiz até que se possa obter o resultado. Enquanto a questão for menor que a quantidade de questões, as questões vão sendo exibidas. Ao se obter a resposta de todas as questões, o estado de controle de "result" é alterado e se obtém o resultado.
    const handleQuestion = () => {
        if(currentQuestion < questions.length - 1){
            setCurrentQuestion((currentState) => currentState + 1)
        } else {
            setResult(true)
        }
    }

    // verifica se a resposta selecionada é a resposta correta da questão e armazena no array para obter o resultado ao fim do quiz.
    const checkAnswer = (resposta) => {
        if(resposta === questions[currentQuestion].correctAnswer){
            setAnswers([...answers, true])
        } else {
            setAnswers([...answers, false])
        }
    }

    return {
        result,
        currentQuestion,
        answers,
        checkAnswer,
        handleQuestion
    }
}

export default useQuiz