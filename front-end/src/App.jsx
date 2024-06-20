import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RedirectToLogin from './pages/RedirectToLogin';
import User from './pages/User/User';
import Login from './pages/Login/Login';
import Register from './pages/Register';
import MyProvider from './Provider/MyProvider';

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/" element={<RedirectToLogin />} />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
