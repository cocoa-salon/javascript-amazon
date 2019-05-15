# Amazon Prime UI(Vanilla.js)

## 주요기능

### Plans layer

- 상하 스크롤시 상단 바 노출 및 숨김 애니메이션
- See more plans 클릭시 추가 레이어 노출 애니메이션
- close 클릭시 자동 닫힘

<img src="[https://user-images.githubusercontent.com/38235501/57755668-6c415c80-772c-11e9-895a-c3ed981c6d91.gif](https://user-images.githubusercontent.com/38235501/57755668-6c415c80-772c-11e9-895a-c3ed981c6d91.gif)" alt="">

### Carousel(이미지 슬라이드)

- fetch 요청으로 이미지 로드
- 별도의 조작이 없는 경우 일정 시간마다 이미지 슬라이딩(DOM API로 엘리먼트 조작)
- 버튼으로 조작시 일정 시간 경과 후  자동 이미지 슬라이딩 구현

<img src="[https://user-images.githubusercontent.com/38235501/57755898-fdb0ce80-772c-11e9-9da3-27dc0cd0b1af.gif](https://user-images.githubusercontent.com/38235501/57755898-fdb0ce80-772c-11e9-9da3-27dc0cd0b1af.gif)" alt="">

### Auto complete(자동 추천 검색어 완성)

- npm express를 통한 백엔드 API 구성하여 추천 검색어 fetch 요청(asyn, await)
- 디바운스 개념 적용, 잦은 추천 검색어 요청 방지
- 대소문자 구분 없이 자동검색 키워드 하이라이트 표시
- 화살표 키로 상하 이동시 무한 순환
- 마우스 오버, 아웃시 배경 색상 토글 및 클릭시 이동
- 입력 포커스 해제시 검색창 숨김

<img src="[https://user-images.githubusercontent.com/38235501/57755379-c8f04780-772b-11e9-8021-483952ac0fd8.gif](https://user-images.githubusercontent.com/38235501/57755379-c8f04780-772b-11e9-8021-483952ac0fd8.gif)" alt="">
