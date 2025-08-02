import React from 'react';

function MailList() {
  const dummyMails = [
    { id: 1, sender: '김철수', subject: '주간 보고서 요청', date: '2025-08-01', content: '이번 주 주간 보고서 제출 부탁드립니다.' },
    { id: 2, sender: '박영희', subject: '회의록 공유', date: '2025-07-31', content: '지난 회의록 공유드립니다. 확인 부탁드립니다.' },
  ];

  return (
    <div>
      <h2>메일목록</h2>
      <ul>
        {dummyMails.map(mail => (
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

export default MailList;