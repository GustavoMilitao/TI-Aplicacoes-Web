import React, { useEffect, useContext, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserNavbar from '../../Components/UserNavbar/UsersNavbar'; 

function User() {
  const navigate = useNavigate();


  const getUser = useCallback(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    if (!localUser) {
      navigate('/login');
    }
  }, [navigate]);


  useEffect(() => {
    getUser();
  }, [getUser]);

  useEffect(() => {
  }, []);

  return (
    <>
      <UserNavbar />
      <section className="flex lg:flex-wrap flex-wrap p-6 mb-12 relative">
      </section>
    </>
  );
}

export default User;
