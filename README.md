# React + Coingecko API

## 실행 방법

```shell
  git clone https://github.com/kimdoyeonn/react-coingecko.git
  cd react-coingecko

  npm install
  npm run start
```

## 사용 라이브러리

- BigNumber.js: 큰 수에 대한 처리와 숫자 유형을 간단하게 포매팅하기 위해 사용했습니다.
- TailwindCSS: 클래스 이름에 대한 고민을 줄이고, 컨텍스트의 전환을 줄여 빠르게 스타일을 적용하기 위해 사용했습니다.
- Axios: 중복 코드를 줄일 수 있고, 직관적으로 코드를 작성할 수 있어 사용했습니다.

## 프로젝트 구조

src
 ┣ apis
 ┃ ┗ coin.ts
 ┣ components
 ┃ ┣ coin-detail - 상세 페이지 관련 컴포넌트
 ┃ ┃ ┣ CoinCalculator.tsx - 가격 계산기 컴포넌트
 ┃ ┃ ┗ CoinDescription.tsx - 설명 컴포넌트
 ┃ ┣ coin-table - 코인마켓 리스트 관련 컴포넌트
 ┃ ┃ ┣ CoinTableRow.tsx - 코인 테이블 row 컴포넌트
 ┃ ┃ ┗ index.tsx - 코인 테이블 컴포넌트
 ┃ ┣ common - 공통 컴포넌트
 ┃ ┃ ┣ GNB.tsx - GNB
 ┃ ┃ ┣ Loader.tsx - 로딩 컴포넌트
 ┃ ┃ ┗ Select.tsx - select 컴포넌트
 ┃ ┣ toast - Toast UI 관련 컴포넌트
 ┃ ┃ ┣ Toast.tsx - toast 컴포넌트
 ┃ ┃ ┗ ToastContainer.tsx - toast들을 감싸는 컴포넌트
 ┃ ┗ BookmarkButton.tsx
 ┣ contexts
 ┃ ┣ CurrencyContext.ts - 통화 Context
 ┃ ┣ CurrencyProvider.tsx - 통화 Provider
 ┃ ┣ ToastContext.ts - Toast Context
 ┃ ┗ ToastProvider.tsx - Toast Provider
 ┣ hooks
 ┃ ┣ useBookmark.ts - Bookmark 커스텀 훅
 ┃ ┗ useCoinMarket.ts - Coin Market fetching 커스텀 훅
 ┣ pages
 ┃ ┣ CoinBookmark.tsx - 북마크 페이지
 ┃ ┣ CoinDetail.tsx - 코인 상세 페이지
 ┃ ┗ CoinList.tsx - 코인 리스트 페이지
 ┣ types
 ┃ ┗ coin.ts - 코인 관련 타입 정의
 ┣ util
 ┃ ┗ price.ts - 가격/퍼센트 관련 util
 ┣ Layout.tsx - 전체 layout
 ┣ constants.ts - 상수값 모음
 ┣ index.css
 ┗ index.tsx