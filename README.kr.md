# 💼 개발자 포트폴리오

[🇺🇸 English README](./README.md)

**React**, **Tailwind CSS**, **EmailJS** 로 만든 현대적이고 반응형 개인 포트폴리오.  
다크 모드, 연락처 폼, 블로그 링크, 소셜 미디어 푸터 포함.

---

## 🌟 주요 기능

- 🌐 다국어 지원 (영어 · 우즈베크어 · 한국어, i18next)
- 🎨 라이트와 다크 테마 디자인
- 🖼️ Tailwind CSS 로 반응형 레이아웃
- 📂 포트폴리오 프로젝트 섹션 (GitHub 링크 포함)
- 👤 자기소개 섹션
- 📬 연락처 폼 (EmailJS 연동)
- 🌐 블로그 링크: 텔레그램 & 네이버
- 🔗 푸터에 GitHub, LinkedIn, Twitter(X), Instagram 아이콘
- 🎯 호버 효과 및 애니메이션

---

## 📦 사용 기술

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)
- [Lucide React](https://lucide.dev/)
- [Vite](https://vitejs.dev/)

---

## 📁 폴더 구조

```
src/
├── assets/           # 이미지 및 애니메이션 (Lottie 등)
├── components/       # 재사용 컴포넌트 (ProjectCard, Loading, Footer...)
├── sections/         # 섹션 컴포넌트 (About, Projects, Skills, Contact)
├── pages/            # 페이지 라우트 (Home, About, Projects, Contact, NotFound)
├── routes/           # 라우터 설정
├── data/             # JSON 데이터 (projects.json)
├── App.jsx           # 메인 레이아웃
├── index.css         # Tailwind 기본 스타일
└── main.jsx          # 엔트리 포인트
public/
├── projects/         # 프로젝트 커버 이미지
├── resume/           # 이력서 파일 (resume.pdf, resume-kr.pdf)
└── ...
```

---

## 🚀 시작하기

```bash
git clone https://github.com/DevFayzullo/portfolio.git
cd portfolio
npm install
npm run dev
```

---

## ⚙️ 환경 변수

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 📸 스크린샷

![Portfolio Preview](./public/pic/preview-kr.png)

---

## 🔧 커스터마이징

- `src/data/projects.json` 수정하여 본인 프로젝트 추가
- 블로그 및 소셜 링크를 `Footer.jsx` / `ContactSection.jsx` 에서 교체
- "About Me" 자기소개 텍스트를 본인 이야기로 교체
- `public/resume/` 에 본인 이력서 파일 교체

---

## 📚 문서

- Development Notes (EN): [docs/notes.md](./docs/notes.md)
- 개발 메모 (KR): [docs/notes.kr.md](./docs/notes.kr.md)

---

## 📮 연락처

- 텔레그램: [@DevFayzullo](https://t.me/devFayzullo)
- 네이버 블로그: [Fayzullo’s Life](https://blog.naver.com/devfayzullo)

---

## 📝 라이선스

이 프로젝트는 오픈소스로, 개인/프로 용도로 자유롭게 수정 및 사용할 수 있습니다.

---

## 🧠 인용구

> "위대한 일을 하는 유일한 방법은 당신이 하는 일을 사랑하는 것이다."  
> — _스티브 잡스_
