import "./style.css"
import OnBuildImage from "../../assets/img/on-build-image.png"
import LateralMenu from "../../components/LateralMenu";
import TopingMenu from "../../components/TopingMenu";

const OnBuildPage = () => {
    return (
        <>
            <LateralMenu />
            <TopingMenu />
            <div className="on-build-page">
                <div className="on-build-container">
                    <h1>Página em construção!</h1>
                    <h2>A página está sendo criada pelos nossos desenvolvedores.</h2>
                    <h2>Te vemos em breve com mais páginas :)</h2>
                    <img src={OnBuildImage} alt="On Build Image" />
                </div>
            </div>
        </>
    );
};

export default OnBuildPage