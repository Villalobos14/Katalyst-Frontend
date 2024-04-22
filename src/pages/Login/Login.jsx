import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { ShowAlertAssistance } from '../../assistances/AlertAssistance/AlertAssistance';

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password)
            return ShowAlertAssistance({ title: "<strong>Campos vacíos</strong>", message: "<strong>MÁS DETALLES:</strong><br>Por favor, rellene todos los campos", status: "error", })
        console.log("Enviando:", email, password, remember)
        try {
            const response = await axios.post('http://34.197.57.0/auth/login', {
                "email": email,
                "password": password,
            });
            console.log('Respuesta del servidor:', response.data);
            const token = response.data.token;
            if (remember)localStorage.setItem('token', JSON.stringify(token));
            else sessionStorage.setItem('token', JSON.stringify(token));
            if (response.data.status === 'success') navigate('/dashboard');
        } catch (error) {
            ShowAlertAssistance({ title: "<strong>Ocurrio un error</strong>", message: `<strong>MÁS DETALLES:</strong><br>${error}`, status: "error", })
            console.error('Error al enviar la solicitud:', error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-subcontainer">
                <div className="left-part-login">
                    <div className="left-sc-login">
                        <Link to="/">
                            <img src={'src/assets/Logo2.png'} alt="logo" width={"20%"} style={{ marginLeft: "-5px" }} />
                        </Link>
                        <div className="title-login">Welcome back</div>
                        <div className="subtitle-login">Inicia sesión para poder ingresar</div>
                        <div className="title-label-login">Email</div>
                        <div className="entry-login">
                            <input type="text" className="entry-input-login" placeholder='Email address' onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="title-label-login">Password</div>
                        <div className="entry-login">
                            <input type="text" className="entry-input-login" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className="remember-me-login">
                            <div className="remember-login"><input type='checkbox' checked={remember} onChange={() => { setRemember(prevState => !prevState) }} style={{ cursor: "pointer" }}></input></div>
                            <div className="rem-me-login" onClick={() => { setRemember(prevState => !prevState) }}>Remember me</div>
                        </div>
                        <div className="button-login" onClick={handleSubmit}>Log in</div>
                        <div className="dont-have-account-login">
                            <div className="dh-1-login">¿No tienes una cuenta?&nbsp;</div>
                            <div className="dh-2-login" onClick={() => { navigate("/register") }}>&nbsp;Registrate aquí</div>
                        </div>
                    </div>
                </div>
                <div className="right-part-login">

                </div>
            </div>
        </div>
    );
}
