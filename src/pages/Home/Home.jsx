import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import './Home.css';

export default function Home() {


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
                    <Link to="/login" className="start-home">Comenzar</Link>
                    <Link to="/register" className="register-home">Registrarme</Link>
                </div>
            </div>
            <div className="subcontent-home">
                <div className="title-home"><div className='t-h-1'>Innovación</div> <div className="t-h-2">para la salud</div></div>
                <div className="subtitle-home"><div>La innovación para la salud implica encontrar nuevas formas de mejorar 
                la atención médica y el bienestar de las personas. Esto puede incluir desde la creación de nuevos medicamentos 
                y tratamientos hasta el desarrollo de tecnologías que facilitan el acceso a la atención médica. 
                En resumen, se trata de encontrar soluciones creativas para mejorar la salud de las personas.</div></div>
                <Link to="/dashboard" className="container-button">
                    <div className="button-go-home"><div>Saber más</div><FaArrowRight/></div>
                </Link>
            </div>
        </div>
    );
}
