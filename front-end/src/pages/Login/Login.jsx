import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundTransition from '../../Components/BackgroundTransition/BackgroundTransition';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [valid, setValid] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isTransitionComplete, setIsTransitionComplete] = useState(false);

    const SUCCESSFULLY_HTTP_STATUS = 200;

    useEffect(() => {
        const MIN_PASSWORD_LENGTH = 6;
        const loginRegex = /\S+@\S+\.com/;
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            navigate('/select-theme');
        }

        if (password.length >= MIN_PASSWORD_LENGTH && loginRegex.test(email)) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [email, password, navigate]);

    const login = async () => {
        const result = await fetch('http://localhost:3001/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await result.json();
        if (result.status !== SUCCESSFULLY_HTTP_STATUS) {
            setAuthenticated(true);
            setErrorMessage(data.message);
        } else {
            setAuthenticated(false);
            localStorage.setItem('user', JSON.stringify(data));
            navigate('/select-theme');
        }
    };

    return (
        <div>
            <BackgroundTransition onComplete={() => setIsTransitionComplete(true)} />
            {isTransitionComplete && (
            <section className="flexlog container mx-auto">
                <form className="container flexlog justify-center py-8">
                    {authenticated && (
                        <p className="text-red-700 font-bold mb-4">
                            {errorMessage}
                        </p>
                    )}
                    <label
                        htmlFor="login"
                        className="flexlog text-2xl py-1 px-4 my-1 sm:px-2 lg:px-4"
                    >
                        <input
                            id="login"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                            className="text-2x1 p-2 ring-1 ring-sky-800"
                        />
                    </label>

                    <label
                        htmlFor="password"
                        className="flexlog text-2xl py-1 px-4 my-1 sm:px-2 lg:px-4"
                    >
                        <input
                            id="password"
                            type="password"
                            value={password}
                            placeholder="Senha"
                            onChange={({ target }) => setPassword(target.value)}
                            className="text-2x1 p-2 ring-1 ring-sky-800"
                        />
                    </label>
                    <div className="mt-4 flexlog container">
                        <button
                            type="button"
                            disabled={!valid}
                            onClick={login}
                            className="text-xl text-white font-bold my-3 w-72 py-2 ring-1 ring-sky-800 bg-sky-800 transition-colors disabled:bg-gray-200 disabled:text-gray-500"
                        >
                            Login
                        </button>
                        <div>
                          <p className='dontHaveAccount' >Não possui uma conta?</p>
                        </div>
                        <div>
                        <button
                            type="button"
                            onClick={() => navigate('/register')}
                            className="text-l text-sky-800 my-3 w-72 py-2 registerLink">
                              Crie aqui
                        </button>
                        </div>
                    </div>
                </form>
            </section>
            )}
        </div>
    );
}

export default Login;
