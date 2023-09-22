import "./style.css"
import NotFoundImage from "../../assets/img/not-found-image.png"
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
            <div className="not-found-container">
                <h1>Erro 404</h1>
                <h2>Não encontramos a página procurada</h2>
                <img src={NotFoundImage} alt="Not Found Image" />
                <div className="not-found-textdiv">
                    <span>Isso pode ter acontecido por que:</span> <br />
                    <span>A página não existe mais ou você digitou errado</span> <br /><br />
                    <span>Tente Novamente!</span>
                </div>
                <Link to="/">
                    <button>Voltar ao site</button>
                </Link>
            </div>
        </>
    );
};

export default NotFoundPage