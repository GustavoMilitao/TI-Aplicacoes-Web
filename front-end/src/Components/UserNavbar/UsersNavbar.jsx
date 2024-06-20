import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../Provider/MyContext';

function UserNavbar() {
  const { setUser, user } = useContext(MyContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    setUser('');
    navigate('/login');
  };

  const getUserData = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <nav className="bg-sky-800 flex lg:justify-between text-white lg:p-2 p-1">
        <>
          <p
            className="navBoxContent font-semibold usuarioNome"
          >
            {user ? user.name : 'user'}
          </p>
          <button
            type="button"
            className="navBoxContent font-semibold logout"
            onClick={logout}
          >
            Sair
          </button>
        </>
      </nav>
    </>
  );
}

export default UserNavbar;
