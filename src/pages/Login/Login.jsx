import './Login.css';

export function Login() {
    return (  
        <div className="login-container">
            <div className="login-subcontainer">
                <div className="left-part-login">
                    <div className="left-sc-login">
                        <img src={'src/assets/Logo.png'} alt="logo" />
                        <div className="title-login">Welcome back</div>
                        <div className="subtitle-login">Inicia sesión para poder ingresar</div>
                        <div className="title-label-login">Email</div>
                        <div className="entry-login">
                            <input type="text" className="entry-input-login" placeholder='Email address'/>
                        </div>
                        <div className="title-label-login">Password</div>
                        <div className="entry-login">
                            <input type="text" className="entry-input-login" placeholder='Password'/>
                        </div>
                        <div className="remember-me-login">
                            div.
                        </div>
                    </div>
                </div>
                <div className="right-part-login">

                </div>
            </div>
        </div>
    );
}
