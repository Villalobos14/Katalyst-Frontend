import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import './Home.css';

export default function Home() {

    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="navbar-container">
                <div className="image-logo-home">
                    <img className='logo-home' src={'src/assets/Logo.png'} alt='logo'></img>
                </div>
                <div className="options-home">
                    <div className="home-home">Inicio</div>
                    <div className="home-home">Nosotros</div>
                    <div className="home-home">Sistema</div>
                    <div className="home-home">Nosotros</div>
                </div>
                <div className="two-buttons-home">
                    <div className="start-home" onClick={()=>{navigate("login")}}>Comenzar</div>
                    <div className="register-home" onClick={()=>{navigate("register")}}>Registrarme</div>
                </div>
            </div>
            <div className="subcontent-home">
                <div className="title-home"><div className='t-h-1'>Innovación</div> <div className="t-h-2">para la salud</div></div>
                <div className="subtitle-home"><div>La innovación para la salud implica encontrar nuevas formas de mejorar 
                la atención médica y el bienestar de las personas. Esto puede incluir desde la creación de nuevos medicamentos 
                y tratamientos hasta el desarrollo de tecnologías que facilitan el acceso a la atención médica. 
                En resumen, se trata de encontrar soluciones creativas para mejorar la salud de las personas.</div></div>
                <div className="container-button">
                    <div className="button-go-home"><div>Saber más</div><FaArrowRight/></div>
                </div>
            </div>
        </div>
    );
}
