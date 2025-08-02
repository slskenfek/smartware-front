export const conversations = [
  {
    id: 1,
    partner: '이서준',
    lastMessage: '네, 확인했습니다. 오후에 다시 연락드리겠습니다.',
    timestamp: '오후 3:45',
    messages: [
      { sender: 'me', text: '안녕하세요, 이서준님. 요청하신 자료 전달드립니다.', timestamp: '오후 3:40' },
      { sender: 'partner', text: '네, 확인했습니다. 오후에 다시 연락드리겠습니다.', timestamp: '오후 3:45' },
    ]
  },
  {
    id: 2,
    partner: '박지민',
    lastMessage: '회의록 초안 공유드립니다.',
    timestamp: '오전 11:20',
    messages: [
      { sender: 'partner', text: '회의록 초안 공유드립니다.', timestamp: '오전 11:20' },
    ]
  },
  {
    id: 3,
    partner: '최수빈',
    lastMessage: '점심 식사 맛있게 하세요! ',
    timestamp: '오전 11:15',
    messages: [
        { sender: 'me', text: '네, 수빈님도요!', timestamp: '오전 11:14' },
        { sender: 'partner', text: '점심 식사 맛있게 하세요!', timestamp: '오전 11:15' },
    ]
  }
];

export const history = [
  { id: 1, action: "'결재' 문서 [2025년 1분기 실적 보고]를 승인했습니다.", timestamp: '오후 2:10' },
  { id: 2, action: "'게시판'에 [사내 공지] 새로운 게시글을 작성했습니다.", timestamp: '오전 10:55' },
  { id: 3, action: "'메일'을 [이서준]님에게 발송했습니다.", timestamp: '오전 9:30' },
];
