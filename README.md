# GroveSoft-Assignment (Vue.js)

오픈 기념 이벤트 페이지로
이벤트 혜택, 카드 인터랙션, 실시간 타이머, 응모 폼, 패럴랙스 배경을 통해  
사용자 참여를 유도하는 단일 페이지 이벤트 UI입니다.

---

<br>

# Link

[배포 주소]() |
[구현 과정](https://autumn-button-b3d.notion.site/2ce450fda1fa800fb15bd49de8364e33?source=copy_link) |
[구현시 에러](https://autumn-button-b3d.notion.site/Vue-js-2cd450fda1fa8069a9f2f98f83158688?source=copy_link) |
[구현시 개념 정리](https://autumn-button-b3d.notion.site/Vue-js-2cc450fda1fa80b6bb16eca8aebde2e0?source=copy_link)

---

## 실행 방법

```bash
# 패키지 설치
pnpm install

# 개발 서버 실행
pnpm run dev
```

---

<br>

## 사용한 라이브러리 및 선택 이유

### TypeScript
- API 응답 데이터, props 타입을 명확하게 정의
- 이벤트 데이터, 타이머, 폼 입력값에서 타입 안정성 확보

### Tailwind CSS
- 간단한 보일러 플레이팅으로 빠른 UI 구현을 위해 사용
- hover, transition, opacity, scale 등 인터랙션을 클래스 단위로 즉시 적용 가능
- 별도 CSS 설계 없이도 과제 UI 요구사항 충족 가능
  

### Zod
- 응모 폼 입력값 유효성 검증을 위해 사용
- 필수값, 형식 체크를 선언적으로 관리 가능
- 폼 로직과 검증 로직을 분리해 가독성 향상

---

<br>

## 구현 시 고민한 점 & 구현 과정

### 1. 이벤트 데이터 관리 방식
초기에는 이벤트 정보와 혜택 항목을 상수로 관리했으나
과제 요구사항에 맞게 Mock API에서 데이터를 조회하도록 구조를 변경

- 상위 컴포넌트에서 이벤트 데이터 fetch
- 하위 컴포넌트에는 props로 전달

이를 통해 중복 fetch를 방지하고 데이터 흐름을 단순화


<br>


### 2. Vue에서 리스트 렌더링 방식
React에서는 map을 사용하지만
Vue에서는 템플릿에서 v-for를 사용하는 방식으로 적용

```vue
<li v-for="reward in rewards" :key="reward.id">
  {{ reward.name }}
</li>
```


<br>



### 3. 카드 인터랙션 설계

```vue
const CARDS = ref<Card[]>([
  { id: 1, front: "10%", drawn: false },
  { id: 2, front: "10%", drawn: false },
  { id: 3, front: "10%", drawn: false },
  { id: 4, front: "10%", drawn: false },
  { id: 5, front: "10%", drawn: false },
]);
```

카드 형태 및 속성은 배열안에 객체 형태로 잡고 카드 뒷면은 css로 표현


<br>



### 4. 실시간 타이머 구현
서버에서 내려준 endDate 값을 기준으로
현재 시간과의 차이를 계산해 남은 시간을 표시

실제 서비스에서 사용하는 타이머 구현 패턴을 적용


<br>



### 5. 스크롤 트리거 패럴랙스
레이아웃이 스크롤이 별로 없어서 기능 구현을 인지하기 위해 스크롤시 배경화면 확대 기능 구현

```vue
const scale = 1 + y * 0.003;
```
scale로 스크롤 하면 배경 확대 크기 조정


<br>



### 6. 응모 폼 UX 설계
- Zod를 이용한 입력값 유효성 검증
- 에러 메시지 alert로 노출해 구현 및 console.error로 사용자와 개발자 모두에게 인식 가능하게 구현
- 응모 완료 시 localStorage에 상태 저장

```vue
localStorage.setItem("hasApplied", "true");
```


<br>




### 7. API 연동
- 이벤트 정보 조회: GET /event
- 응모 데이터 제출: POST /entries
- fetch 기반으로 로딩 상태 및 에러 처리 구현

```json
// GET /event
[
  {
    "id": 1,
    "title": "그로브 뷰티 오픈 기념 이벤트",
    "endDate": "2025-12-31T23:59:59",
    "description": "지금 응모하고 특별한 혜택을 받아가세요!",
    "rewards": [
      {
        "id": 1,
        "name": "🎁 스타벅스 기프티콘",
        "image": "coffee.png"
      },
      {
        "id": 2,
        "name": "🎁 할인 쿠폰 10%",
        "image": "coupon.png"
      },
      {
        "id": 3,
        "name": "🎁 프리미엄 이용권",
        "image": "premium.png"
      },
      {
        "id": 4,
        "name": "🎁 무료 배송 혜택",
        "image": "delivery.png"
      },
      {
        "id": 5,
        "name": "🎁 공유하면 추가 응모 1회 제공 혜택",
        "image": "share.png"
      }
    ]
  }
]
```

```json
// POST /entries
[
  {
    "name": "김태헌",
    "phone": "010-1234-1234",
    "agreedTerms": true,
    "id": "1",
    "email": "test@mail.com"
  }
]
```


---

<br>


