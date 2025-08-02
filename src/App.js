
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Mail from './Mail';
import Approval from './Approval';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <div className="logo">Groupware</div>
          <div className="user-info">김용준님, 환영합니다.</div>
        </header>
        <div className="app-body">
          <aside className="app-sidebar">
            <h2>Menu</h2>
            <ul>
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/mail">메일</NavLink></li>
              <li><NavLink to="/approval">결재</NavLink></li>
              <li>일정</li>
              <li>게시판</li>
              <li>주소록</li>
            </ul>
          </aside>
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mail" element={<Mail />} />
              <Route path="/approval" element={<Approval />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
