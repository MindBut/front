# Mindbut Client
A React Native front-end client for [**Mindbut**](https://github.com/MindBut/model) project.

- [File Structure](#file-structure)
- [Todos (Design)](#todos-design)
- [Todos (Front)](#todos-front)
- [Issues](#issues)

## File Structure
```
.
└── Mindbut/
    ├── screens/
    │   ├── components/
    │   │   ├── common  /
    │   │   │   └── (공통 컴포넌트)
    │   │   ├── moodtracking/
    │   │   │   └── (무드 트래킹 페이지 컴포넌트)
    │   │   └── survey/
    │   │       └── (설문 페이지 컴포넌트)  
    │   ├── CheckIn.jsx
    │   ├── MoodTracking.jsx
    │   ├── OnBoarding.jsx
    │   └── Survey.jsx
    └── assets/
        ├── icons/
        │   └── (감정의 이유 아이콘)
        ├── kakao_login/
        │   └── (카카오 로그인 배너)
        └── (기타 에셋)
```

## Todos (Design)
**온보딩**
- [ ] 마인드벗 로고 확정하기
- [ ] 온보딩에서 표시할 항목 확정하기
- [ ] 항목들을 페이드 인/아웃으로 넘길 지 or 횡으로 넘길 지 결정하기

**무드 트래킹**
- [ ] 감정의 이유 선택하는 창에서 SVG 아이콘 크기 통일시키기
- [ ] SVG 파일에서 `<path />` 안에 있는 `fill="currentColor"`로 전부 바꿔주기 (`<svg />`에 있는 `fill`은 안바꿔도 됨)
- [ ] 감정 세부 선택창 이미지 넣기

## Todos (Front)
**API**
- [ ] 사용자 이름 어떻게 불러올지

**무드 트래킹**
- [ ] 채팅이랑 무드 트래킹 분리하기
- [ ] 무드 트래킹에서 무드 레코드로 넘어가기
- [ ] 감정의 이유 '추가하기' 버튼

**무드 레코드**
- [ ] 무드 레코드 페이지

## Issues
> [!WARNING]
> **iOS 17.0 한글 이슈**
>
> iOS 17.0에서 한글 입력시 자모가 분리되는 이슈가 발생함 😥
>
> iOS 16.4로 다운그레이드 시키면 간헐적으로 될 때도 있고 안될 때도 있어서 
