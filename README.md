# Mindbut Client
A React Native front-end client for [**Mindbut**](https://github.com/MindBut/model) project.

## File Structure
```
.
└── Mindbut/
    ├── screens/
    │   ├── CheckIn.jsx
    │   ├── MoodTracking.jsx
    │   ├── OnBoarding.jsx
    │   ├── Survey.jsx
    │   └── MoodRecord.jsx
    ├── components/
    │   ├── common/
    │   │   └── (공통 컴포넌트)
    │   ├── moodtracking/
    │   │   └── (무드 트래킹 페이지 컴포넌트)
    │   ├── moodrecord/
    │   │   └── (무드 레코드 페이지 컴포넌트)
    │   └── survey/
    │       └── (설문 페이지 컴포넌트)  
    └── assets/
        ├── icons/
        │   └── (감정의 이유 아이콘)
        ├── kakao_login/
        │   └── (카카오 로그인 배너)
        ├── mood/
        │   └── (세부 감정 이미지)
        └── (기타 에셋)
```

## Run
현재는 iOS 버전만 구현됨

```bash
cd Mindbut
cd ios && pod install
npm run ios
```

## Issues
> [!WARNING]
> **iOS 17.0 한글 이슈**
>
> iOS 17.0에서 한글 입력시 자모가 분리되는 이슈가 발생함 😥
>
> iOS 16.4로 다운그레이드 시켜도 간헐적으로 될 때도 있고 안될 때도 있어서 일단 시연할 때는 텍스트 직접 입력하지 말고 미리 입력한 문장 복사+붙여넣기 하는 식으로 가야될 것 같음
