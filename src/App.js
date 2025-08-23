
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
import Login from './Login';
import Register from './Register';
import { AuthProvider, AuthContext } from './AuthContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// New components for sub-menus
import MailWrite from './MailWrite';
import MailList from './MailList';
import MySentMail from './MySentMail';
import SentMail from './SentMail';
import ApprovalWrite from './ApprovalWrite';
import ApprovalList from './ApprovalList';
import MyApprovals from './MyApprovals';
import MySchedule from './MySchedule';
import GroupSchedule from './GroupSchedule';
import CompanyBoard from './CompanyBoard';
import FreeBoard from './FreeBoard';
import AnonymousBoard from './AnonymousBoard';


function AppContent() {
  const [mypageDropdownVisible, setMypageDropdownVisible] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Or a loading spinner, as navigate will handle redirection
  }

  return (
    <div className="App">
      <header className="app-header">
        <div className="logo"><Link to="/">Smart Ware</Link></div>
        <div
          className="user-info"
          onMouseEnter={() => setMypageDropdownVisible(true)}
          onMouseLeave={() => setMypageDropdownVisible(false)}
        >
          마이페이지
          {mypageDropdownVisible && (
            <ul className="dropdown-menu">
              <li><Link to="/messages">메시지</Link></li>
              <li><Link to="/my-history">나의 내역</Link></li>
              <li><Link to="/logout" onClick={logout}>로그아웃</Link></li>
            </ul>
          )}
        </div>
      </header>
      <div className="app-body">
        <aside className="app-sidebar">
          <ul>
            <li>
              <NavLink to="/mail">메일</NavLink>
              <ul className="submenu">
                <li><Link to="/mail/list">받은메일함</Link></li>
                <li><Link to="/mail/sent">보낸 메일함</Link></li>
                <li><Link to="/mail/my-sent">나에게쓴메일</Link></li>
              </ul>
            </li>
            <li>
              <NavLink to="/approval">결재</NavLink>
              <ul className="submenu">
                <li><Link to="/approval/write">결재쓰기</Link></li>
                <li><Link to="/approval/list">결재목록</Link></li>
                <li><Link to="/approval/my">나의 결재</Link></li>
              </ul>
            </li>
            <li>
              <NavLink to="/schedule">일정</NavLink>
              <ul className="submenu">
                <li><Link to="/schedule/my">나의 스케줄</Link></li>
                <li><Link to="/schedule/group">그룹 스케줄</Link></li>
              </ul>
            </li>
            <li>
              <NavLink to="/board">게시판</NavLink>
              <ul className="submenu">
                <li><Link to="/board/company">사내 게시판</Link></li>
                <li><Link to="/board/free">자유 게시판</Link></li>
                <li><Link to="/board/anonymous">익명 게시판</Link></li>
              </ul>
            </li>
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

            {/* New sub-menu routes */}
            <Route path="/mail/write" element={<MailWrite />} />
            <Route path="/mail/list" element={<MailList />} />
            <Route path="/mail/my-sent" element={<MySentMail />} />
            <Route path="/mail/sent" element={<SentMail />} />
            <Route path="/approval/write" element={<ApprovalWrite />} />
            <Route path="/approval/list" element={<ApprovalList />} />
            <Route path="/approval/my" element={<MyApprovals />} />
            <Route path="/schedule/my" element={<MySchedule />} />
            <Route path="/schedule/group" element={<GroupSchedule />} />
            <Route path="/board/company" element={<CompanyBoard />} />
            <Route path="/board/free" element={<FreeBoard />} />
            <Route path="/board/anonymous" element={<AnonymousBoard />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<AppContent />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
