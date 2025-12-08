# 🎪 축제 한마당 (The Festivals)

전국의 다양한 축제 정보를 한눈에 확인하고 검색할 수 있는 웹 애플리케이션입니다.
공공데이터포털의 축제 데이터를 활용하여 사용자에게 유용한 축제 정보를 제공합니다.

## 🚀 배포 링크

[축제 한마당 바로가기](https://dib3474.github.io/the-festivals/)

## ✨ 주요 기능

- **🏠 홈**

  - 전체, 진행 중, 예정된 축제 수를 한눈에 파악할 수 있는 통계 카드 제공
  - 축제 현황을 시각적으로 보여주는 히어로 섹션

- **📋 축제 목록**

  - 카드 형태의 그리드 레이아웃으로 축제 포스터와 기본 정보 제공
  - 페이지네이션을 통한 효율적인 데이터 탐색
  - 반응형 디자인으로 모바일, 태블릿, 데스크탑 모두 최적화

- **📊 대시보드**

  - 지역별, 월별 축제 분포를 차트로 시각화 (Recharts 활용)
  - 데이터 기반의 축제 트렌드 분석

- **ℹ️ 축제 상세 정보**
  - 각 축제의 상세 일정, 장소, 개요, 홈페이지 링크 등 제공

## 💻 실행 방법 (Getting Started)

### 1. 프로젝트 클론

```bash
git clone https://github.com/dib3474/the-festivals.git
cd the-festivals
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

### 4. 빌드 및 배포

```bash
npm run build
```

## 🛠 기술 스택 (Tech Stack)

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Visualization**: [Recharts](https://recharts.org/)
- **Deployment**: GitHub Pages (Static Export)

## 📂 프로젝트 구조

```
the-festivals/
├── app/                # Next.js App Router 페이지
│   ├── about/          # 소개 페이지
│   ├── dashboard/      # 통계 대시보드
│   ├── festival/       # 축제 목록 및 상세 페이지
│   └── page.tsx        # 메인 페이지
├── components/         # 재사용 가능한 컴포넌트
│   ├── ui/             # 버튼, 카드 등 기본 UI 컴포넌트
│   ├── icon/           # 아이콘 컴포넌트
│   └── ...             # 기능별 컴포넌트 (FestivalCard, HeroSection 등)
├── constants/          # 상수 데이터 (지역코드, 카테고리 등)
├── lib/                # 유틸리티 함수
├── public/             # 정적 파일 (이미지 등)
├── types/              # TypeScript 타입 정의
└── ...
```

## 📝 데이터 출처

이 프로젝트는 [공공데이터포털](https://www.data.go.kr/)의 한국관광공사\_국문 관광정보 서비스 데이터를 활용하였습니다.
