# 만화 N5 (Manga N5)

> 일본 전래동화로 배우는 JLPT N5 일본어 학습 PWA

**[https://idpark.github.io/manga-n5/](https://idpark.github.io/manga-n5/)**

<p align="center">
  <img src="images/momotaro/panel-1.jpg" width="280" alt="모모타로">
  <img src="images/kaguyahime/panel-9.jpg" width="280" alt="카구야히메">
</p>

## 특징

- **일본 5대 전래동화**를 N5 수준 일본어로 읽기
  - 🍑 桃太郎 (모모타로) — 복숭아 소년의 오니 퇴치
  - 🎋 かぐや姫 (카구야히메) — 달에서 온 공주
  - 🐢 浦島太郎 (우라시마타로) — 용궁과 보물상자
  - ⚡ 金太郎 (킨타로) — 산속의 힘센 소년
  - 🔨 一寸法師 (잇순보시) — 일본판 엄지공주
- **AI 생성 수채화 삽화** — Gemini API로 생성한 48장의 동화풍 일러스트
- **후리가나 & 한국어 번역** — 한자 읽기와 번역 ON/OFF
- **TTS 음성 읽기** — 각 문장 개별 또는 전체 자동 재생
- **단어 학습** — 탭하면 뜻 확인, 자동 단어장 저장, N5 빈출 단어 표시
- **퀴즈** — 이야기별 이해도 + 단어 퀴즈
- **AI 튜터** — Claude / GPT / Gemini로 문장 설명, 문법, 연습 문제
- **PWA** — 스마트폰 홈 화면에 추가하여 앱처럼 사용, 오프라인 지원

## 기술 스택

- Vanilla JS (ES Modules, 빌드 도구 없음)
- Web Speech API (TTS)
- Service Worker (오프라인 캐시)
- Gemini 2.5 Flash Image API (삽화 생성)
- 다중 AI 프로바이더: Anthropic Claude / OpenAI GPT / Google Gemini

## 로컬 실행

```bash
cd manga-n5
python3 -m http.server 8080
# http://localhost:8080 접속
```

## 삽화 재생성

```bash
GEMINI_API_KEY="your-key" python3 generate-images.py
```

## 관련 프로젝트

- [nihongo-n5](https://github.com/idpark/nihongo-n5) — N5 일본어 마스터 (대화, 단어, 문법)
- [kana-master](https://github.com/idpark/kana-master) — 히라가나/가타카나 암기장

## 라이선스

MIT
