# Nishchay Bhardwaj Portfolio

## Original problem statement
Create a professional React portfolio for Nishchay Bhardwaj using resume, GitHub, LinkedIn, and profile photo details, inspired by Awwwards technology sites. Include all public GitHub projects, resume viewing/downloading, and a contact form that delivers mail to nishchaybhardwaj2004@gmail.com.

## Architecture decisions
- Single-page React experience with smooth section navigation and responsive mobile menu.
- Existing workspace API service handles the contact endpoint and Resend delivery; credentials remain server-side in backend environment.
- Portfolio content is curated from the supplied resume and public GitHub profile, with direct repository and social links.
- Profile photo and resume use the supplied public artifacts.

## Implemented
- Cinematic dark portfolio with electric blue and mint accents, expressive typography, orbit portrait treatment, entrance motion, and responsive layouts.
- Hero, selected work grid with six GitHub projects, about/education/experience facts, skills, social links, resume link, and contact section.
- Contact form validation, Resend email delivery, loading state, success/error toasts, and reply-to visitor email handling.
- Accessible/descriptive data-testid coverage for interactive and critical user-facing elements.
- Updated page metadata to “Nishchay Bhardwaj — Developer”.
- Expanded internship journey with Hashedin by Deloitte dates, Bangalore location, full learning stack, and AgentSRE product-month story (text-only; screenshots removed per user request, July 2026).
- Added AI/ML Hub and NSS Hub leadership, structured certifications (only supplied URLs render as links), IEEE publication link, linked IC3 2025 presentation certificate PDF (CSE/IC3-2025/340), CGPA corrected to 7.99, and live public GitHub repository refresh cards.
- Escaped contact form content before building email HTML.

## Prioritized backlog
- P0: Replace Resend testing sender with a verified personal domain sender when available.
- P1: Add a CMS or editable project data source for maintaining new work without code changes.
- P1: Add project detail pages with screenshots and case-study narratives.
- P2: Add a downloadable one-page case-study/press kit and optional dark/light theme switch.