import React from 'react';
import { mySentMails } from './data';

function MySentMail() {
  return (
    <div>
      <h2>내가 쓴 메일</h2>
      <ul>
        {mySentMails.map(mail => (
          <li key={mail.id}>
            <strong>받는 사람:</strong> {mail.recipient}<br />
            <strong>제목:</strong> {mail.subject}<br />
            <strong>날짜:</strong> {mail.date}<br />
            <p>{mail.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MySentMail;
