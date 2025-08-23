import React from 'react';
import { sentMails } from '../data';

function SentMail() {
  return (
    <div>
      <h2>보낸 메일</h2>
      <ul>
        {sentMails.map(mail => (
          <li key={mail.id}>
            <strong>보낸 사람:</strong> {mail.sender}<br />
            <strong>제목:</strong> {mail.subject}<br />
            <strong>날짜:</strong> {mail.date}<br />
            <p>{mail.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SentMail;
