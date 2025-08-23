# Development Notes – DevFayzullo Portfolio

## How the project started

- Initially began as a simple **React + Tailwind** single-page portfolio.
- The first version only had three sections: **About Me**, **Projects**, and **Contact**.
- As the project grew, it was refactored into **modular sections** (AboutSection, ProjectsSection, SkillsSection, ContactSection).
- Routing was later introduced using **React Router** to create dedicated pages (About, Projects, Contact).

## Challenges & Bugs encountered

1. **Asset path issues**

   - Problem: Lottie `loading.json` animation failed to load with `../../assets/loading.json`.
   - Cause: Wrong relative path from `components/`.
   - Fix: Corrected to `../assets/loading.json`.

2. **Projects data not rendering**

   - Problem: `projects.json` in `src/data` and images in `public/projects` were not showing properly.
   - Cause: Static assets in `public` don’t require import, only direct `/projects/...` path.
   - Fix: Updated `<img src={project.cover} />` to directly use the public path.

3. **Footer duplication**

   - Problem: Footer showed duplicate GitHub/Resume links.
   - Fix: Removed duplicates, redesigned footer with **lucide-react icons** (Email, GitHub, LinkedIn, Instagram, X).

4. **Contact section confusion**

   - Problem: Contact links appeared both in section and footer, cluttering the UI.
   - Fix: Simplified – kept "Contact Me" CTA → redirects to `/contact` page with **EmailJS form**.

5. **EmailJS integration**
   - Issue: Form submission initially did nothing.
   - Fix: Added proper environment variables (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`) and connected `sendForm`.

## Improvements made

- Hover animations (`hover:scale-105`, `hover:shadow-lg`) across all cards for better UX.
- Dark/Light mode support with Tailwind’s `dark:` classes.
- Added **multi-language resumes** (EN & KR) available from footer.
- Cleaned up project structure:
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

## Next steps

- Add **unit tests** for form validation.
- Improve **SEO** with `react-helmet-async`.
- Consider adding a **Blog section** that auto-syncs with Telegram/Naver posts.
