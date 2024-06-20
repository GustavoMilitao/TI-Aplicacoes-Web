import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RedirectToLogin from './pages/RedirectToLogin';
import User from './pages/User/User';
import Login from './pages/Login/Login';
import Register from './pages/Register';
import SelectTheme from './pages/SelectTheme/SelectTheme';
import SelectSettings from './pages/SelectSettings/SelectSettings';
import Quiz from './pages/Quiz/Quiz';
import Feedback from './pages/Feedback/Feedback';
import MyProvider from './Provider/MyProvider';

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/user" element={<User />} />
          <Route path="/select-theme" element={<SelectTheme />} />
          <Route path="/select-settings" element={<SelectSettings />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route exact path="/" element={<RedirectToLogin />} />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
