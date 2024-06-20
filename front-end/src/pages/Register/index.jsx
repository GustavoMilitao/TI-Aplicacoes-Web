import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setDisabled] = useState(true);
  const [hiddenMessage, setHiddenMessage] = useState(false);

  useEffect(() => {
    const MIN_NAME_LENGTH = 12;
    const MIN_PASSWORD_LENGTH = 6;
    const emailRegex = /\S+@\S+\.com/;
    const isValid = name.length >= MIN_NAME_LENGTH && emailRegex.test(email)
      && password.trim().length >= MIN_PASSWORD_LENGTH;
    setDisabled(!isValid);
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      navigate('/user');
    }
  }, [name, email, password]);

  const wrapperStyle = {
    display: "flex"
  };

  const labelStyle = {
    flex: 1
  };

  const inputStyle = {
    flex: 3
  };

  const handleClick = async () => {
    const STATUS_CODE = 201;
    try {
      const result = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await result.json();
      if (result.status !== STATUS_CODE) {
        setHiddenMessage(true);
      } else {
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/user');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center mx-auto my-28">
      <img className="cursor-pointer" onClick={() => navigate('/login')} src="https://play-lh.googleusercontent.com/hQ1bt_12swmV2rtdZ9oYVbwTVrTGgR9P4CqBf5u3p-pRAXns1kbUl01l1kbLQmqdJA=w600-h300-pc0xffffff-pd" alt="Logo" width={200} />
      <div className="h-px w-1/3 my-5 bg-neutral-400" />
      <form
        className="flex flex-col mx-auto space-y-4
        "
      >
        <div style={wrapperStyle}>
          <label style={labelStyle}
            htmlFor="name"
            className="text-xl items-center p-2"
          >
            Nome:
            <input style={inputStyle}
              type="text"
              id="name"
              name='name'
              placeholder="Seu nome"
              value={name}
              className="mx-3 outline outline-1 outline-neutral-400 p-2 rounded-md"
              onChange={({ target }) => setName(target.value)}
            />
          </label>
        </div>
        <div style={wrapperStyle}>
          <label style={labelStyle}
            htmlFor="email"
            className="text-xl items-center p-2"
          >
            Email:
            {' '}
            <input style={inputStyle}
              type="email"
              id="email"
              name='email'
              placeholder="example@domain.com"
              value={email}
              className="mx-3 outline outline-1 outline-neutral-400 p-2 rounded-md"
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>
        </div>
        <div style={wrapperStyle}>
          <label style={labelStyle}
            htmlFor="password"
            className="text-xl items-center p-2"
          >
            Senha:
            <input style={inputStyle}
              type="password"
              id="password"
              name='password'
              placeholder="Senha"
              value={password}
              className="mx-3 outline outline-1 outline-neutral-400 p-2 rounded-md mr-10"
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>
        </div>
        <button
          type="button"
          disabled={isDisabled}
          onClick={handleClick}
          className="text-xl text-white font-bold my-3 w-72 py-2 ring-1 ring-sky-800
          bg-sky-800 rounded-full transition-colors disabled:bg-gray-200 disabled:text-gray-500"
        >
          Cadastre-se
        </button>

        {hiddenMessage && (
          <p>
            User already exists
          </p>
        )}
      </form>
      <div className="h-px w-1/3 my-5 bg-neutral-400" />
    </div>
  );
}

export default Register;
