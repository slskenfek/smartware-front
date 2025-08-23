
import React from 'react';

function Home() {
  return (
    <div className="widget-grid">
      <div className="widget">
        <h3>공지사항</h3>
        <ul>
          <li>[전사] 2025년 하계 휴가 안내</li>
          <li>[개발팀] 정기 서버 점검 안내 (매주 목 02:00)</li>
          <li>[경영지원] 8월 생일자 대상 상품권 지급 안내</li>
        </ul>
      </div>
      <div className="widget">
        <h3>내 할 일 (3)</h3>
        <ul>
          <li>[기획] 신규 서비스 기획안 검토 요청</li>
          <li>[개발] 로그인 페이지 UI 버그 수정</li>
          <li>[디자인] 메인 배너 시안 공유</li>
        </ul>
      </div>
      <div className="widget">
        <h3>최근 결재 문서</h3>
        <ul>
          <li>[완료] 2025년 8월 법인카드 사용 내역</li>
          <li>[진행] 개발팀 비품 구매 요청</li>
          <li>[반려] 외부 강의 출장 신청</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
