
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Mail from './Mail';
import Approval from './Approval';
import Schedule from './Schedule';
import Board from './Board';
import AddressBook from './AddressBook';
import Messages from './Messages';
import MyHistory from './MyHistory';
import Logout from './Logout';

function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <div className="logo">Groupware</div>
          <div className="user-info" onClick={() => setDropdownVisible(!dropdownVisible)}>
            마이페이지
            {dropdownVisible && (
              <ul className="dropdown-menu">
                <li><Link to="/messages">메시지</Link></li>
                <li><Link to="/my-history">나의 내역</Link></li>
                <li><Link to="/logout">로그아웃</Link></li>
              </ul>
            )}
          </div>
        </header>
        <div className="app-body">
          <aside className="app-sidebar">
            <ul>
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/mail">메일</NavLink></li>
              <li><NavLink to="/approval">결재</NavLink></li>
              <li><NavLink to="/schedule">일정</NavLink></li>
              <li><NavLink to="/board">게시판</NavLink></li>
              <li><NavLink to="/address-book">주소록</NavLink></li>
            </ul>
          </aside>
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mail" element={<Mail />} />
              <Route path="/approval" element={<Approval />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/board" element={<Board />} />
              <Route path="/address-book" element={<AddressBook />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/my-history" element={<MyHistory />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
