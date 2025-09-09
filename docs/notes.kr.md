# 개발 메모 – DevFayzullo Portfolio

## 프로젝트 시작

- 처음에는 단순한 **React + Tailwind** 기반의 원페이지(One-page) 포트폴리오로 시작.
- 초기 버전에는 **About Me**, **Projects**, **Contact** 3개 섹션만 존재.
- 이후 점점 확장되면서 각 부분을 **컴포넌트/섹션 단위**로 분리 (AboutSection, ProjectsSection, SkillsSection, ContactSection).
- 나중에는 **React Router**를 도입하여 페이지 단위 (About, Projects, Contact)로 나누어 구조화.

## 겪었던 문제와 버그

1. **에셋 경로 문제**

   - 문제: Lottie `loading.json` 애니메이션 로드 실패 (`../../assets/loading.json`).
   - 원인: `components/` 폴더 기준 상대 경로 오류.
   - 해결: `../assets/loading.json` 으로 수정.

2. **Projects 데이터 렌더링 문제**

   - 문제: `src/data/projects.json` 과 `public/projects` 내부 이미지가 보이지 않음.
   - 원인: `public/` 폴더 자산은 import 불필요 → 절대 경로 `/projects/...` 로 접근해야 함.
   - 해결: `<img src={project.cover} />` 로 직접 public path 사용.

3. **Footer 중복**

   - 문제: Footer에 GitHub/Resume 링크가 이중으로 표시됨.
   - 해결: 중복 제거 후 **lucide-react 아이콘**(Email, GitHub, LinkedIn, Instagram, X)으로 재디자인.

4. **Contact 섹션 혼동**

   - 문제: Contact 링크가 섹션과 푸터 양쪽에 있어 UI가 복잡해 보임.
   - 해결: "Contact Me" CTA만 유지 → `/contact` 페이지로 이동 후 **EmailJS 폼**에서 메일 전송.

5. **EmailJS 연동**
   - 문제: 폼 제출 시 아무 동작도 하지 않음.
   - 해결: 환경변수 (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`) 추가 후 `sendForm` 연결.

## 개선 사항

- 카드 hover 애니메이션 (`hover:scale-105`, `hover:shadow-lg`) 적용.
- Tailwind `dark:` 클래스로 다크모드/라이트모드 지원.
- Footer에서 **이력서 (EN & KR)** 다운로드 가능하도록 개선.
- 프로젝트 구조 정리:
  ```
  src/
    components/
    sections/
    pages/
    routes/
    data/
  public/
    projects/
    resume/
  ```

## 앞으로의 계획

- 폼 검증을 위한 **단위 테스트(Unit Test)** 추가.
- `react-helmet-async` 를 이용한 **SEO 최적화**.
- Telegram/Naver 블로그와 자동 연동되는 **Blog 섹션** 추가 고려.
