import { useNavigate } from 'react-router-dom';
import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import { ShowAlertAssistance } from '../../assistances/AlertAssistance/AlertAssistance';
import { FaArrowLeft } from "react-icons/fa";

export default function Register() {
    const navigate = useNavigate()
    const [dictionary, setDictionary] = useState({
        email: "",
        password: "",
        name: "",
        lastname: "",
        age: "",
        activity: "",
        frecuency: "",
    })
    const [remember, setRemember] = useState(false)
    const [secondPart, setSecondPart] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!dictionary.email || !dictionary.password || !dictionary.name || !dictionary.lastname || !dictionary.age || !dictionary.activity || !dictionary.frecuency)
            return ShowAlertAssistance({ title: "<strong>Campos vacíos</strong>", message: "<strong>MÁS DETALLES:</strong><br>Por favor, rellene todos los campos", status: "error", })
        console.log("Enviando:", dictionary.email, dictionary.password, dictionary.name, dictionary.lastname, dictionary.age, dictionary.activity, dictionary.frecuency, remember)
        try {
            const response = await axios.post('https://example.com/api/register', {
                "email": dictionary.email,
                "password": dictionary.password,
                "name": dictionary.name,
                "lastname": dictionary.lastname,
                "age": dictionary.age,
                "activity": dictionary.activity,
                "frecuency": dictionary.frecuency,
            });
            console.log('Respuesta del servidor:', response.data);
            if (response.data.status === 200 || response.data.status === 201)
                navigate('/dashboard');
        } catch (error) {
            ShowAlertAssistance({ title: "<strong>Ocurrio un error</strong>", message: `<strong>MÁS DETALLES:</strong><br>${error}`, status: "error", })
            console.error('Error al enviar la solicitud:', error);
        }
    };

    return (
        <div className="register-container">
            <div className="register-subcontainer">
                <div className="left-part-register">
                    <div className="left-sc-register">
                        <img src={'src/assets/Logo2.png'} alt="logo" width={"20%"} style={{ marginLeft: "-5px" }} />
                        {/* <div className="go-back-register"><FaArrowLeft/></div> */}
                        <div className="title-register">{secondPart && <div onClick={() => { setSecondPart(prevState => !prevState) }}><FaArrowLeft /></div>} {secondPart && <>&nbsp;&nbsp;</>}Create an account</div>
                        <div className="subtitle-register">Registrate para poder ingresar</div>
                        {!secondPart ?
                            <>
                                <div className="title-label-register">Name (s)</div>
                                <div className="entry-register">
                                    <input type="text" className="entry-input-register" placeholder='Email address' onChange={(e) => {
                                        setDictionary(prevState => ({
                                            ...prevState,
                                            name: e.target.value
                                        }));
                                    }} />
                                </div>
                                <div className="title-label-register">Lastname (s)</div>
                                <div className="entry-register">
                                    <input type="text" className="entry-input-register" placeholder='Password' onChange={(e) => {
                                        setDictionary(prevState => ({
                                            ...prevState,
                                            lastname: e.target.value
                                        }));
                                    }} />
                                </div>
                                <div className="title-label-register">Email</div>
                                <div className="entry-register">
                                    <input type="text" className="entry-input-register" placeholder='Password' onChange={(e) => {
                                        setDictionary(prevState => ({
                                            ...prevState,
                                            email: e.target.value
                                        }));
                                    }} />
                                </div>
                                <div className="title-label-register">Password</div>
                                <div className="entry-register">
                                    <input type="text" className="entry-input-register" placeholder='Password' onChange={(e) => {
                                        setDictionary(prevState => ({
                                            ...prevState,
                                            password: e.target.value
                                        }));
                                    }} />
                                </div>
                                <br></br>
                                <div className="button-register" onClick={() => { setSecondPart(prevState => !prevState) }}>Continuar</div>
                            </>
                            :
                            <>
                                <div className="title-label-register">Age</div>
                                <div className="entry-register">
                                    <input type="text" className="entry-input-register" placeholder='Password' onChange={(e) => {
                                        setDictionary(prevState => ({
                                            ...prevState,
                                            age: e.target.value
                                        }));
                                    }} />
                                </div>
                                <div className="title-label-register">Activity</div>
                                <div className="entry-register">
                                    <input type="text" className="entry-input-register" placeholder='Password' onChange={(e) => {
                                        setDictionary(prevState => ({
                                            ...prevState,
                                            activity: e.target.value
                                        }));
                                    }} />
                                </div>
                                <div className="title-label-register">Frecuency</div>
                                <div className="entry-register">
                                    <input type="text" className="entry-input-register" placeholder='Password' onChange={(e) => {
                                        setDictionary(prevState => ({
                                            ...prevState,
                                            frecuency: e.target.value
                                        }));
                                    }} />
                                </div>
                                <div className="remember-me-register">
                                    <div className="remember-register"><input type='checkbox' checked={remember} onChange={() => { setRemember(prevState => !prevState) }} style={{ cursor: "pointer" }}></input></div>
                                    <div className="rem-me-register" onClick={() => { setRemember(prevState => !prevState) }}>Remember me</div>
                                </div>
                                <div className="dont-have-account-register">
                                    <div className="dh-1-register">¿Ya tienes una cuenta?&nbsp;</div>
                                    <div className="dh-2-register" onClick={() => { navigate("/login") }}>&nbsp;Inicia sesión aquí</div>
                                </div>
                                <div className="button-register" onClick={handleSubmit}>Sign up</div>
                            </>
                        }
                    </div>
                </div>
                <div className="right-part-register">

                </div>
            </div>
        </div>
    );
}
