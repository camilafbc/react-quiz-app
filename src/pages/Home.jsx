import { Link } from "react-router-dom"

function Home(){
    return (
        <div>
            <h2>Teste seus conhecimentos</h2>
            <Link to="quiz">
                <button>Começar</button>
            </Link>
        </div>
    )
}

export default Home