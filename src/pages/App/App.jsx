import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import HomePage from "../../pages/Homepage"
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
  <>
    <header>
      <NavBar user={user} setUser={setUser} />
    </header>
    <main className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage setUser={setUser} />} />
      </Routes>
    </main>
    </>
  );
}
