import React from 'react';
import { history } from './data';
import './MyHistory.css';

function MyHistory() {
  return (
    <div className="history-container">
      <h2>나의 내역</h2>
      <ul className="history-list">
        {history.map(item => (
          <li key={item.id} className="history-item">
            <span className="action">{item.action}</span>
            <span className="timestamp">{item.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyHistory;