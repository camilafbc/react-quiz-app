import { Link } from "react-router-dom"

function Home(){
    return (
        <div className="home_container">
            <h1>
                Quiz
                <img src="https://img.icons8.com/fluency/96/000000/ask-question.png" alt="" />
            </h1>
            
            <p>Teste seus conhecimentos sobre HTML, CSS e JavaScript!</p>
            <Link to="quiz">
                <button>Começar</button>
            </Link>
        </div>
    )
}

export default Home