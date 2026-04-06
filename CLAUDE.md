# ArcGenesis Finance — Landing Page

## Stack

- React + Vite
- Tailwind CSS v4 (uses @tailwindcss/vite plugin — no tailwind.config.js)
- Vanilla CSS for any custom styles beyond Tailwind

## Design System

- Background: #f8f9fa (light gray)
- Primary text: #20232a (dark, from brand palette)
- Accent / CTA color: #37d3f1 (cyan)
- Font: Syne (Google Fonts) for headlines, Inter for body text
- Light theme throughout — clean, professional, advisor-facing

## Brand Voice

- Professional but approachable
- Speaks directly to financial advisors, not consumers
- Confident, not salesy

## Page Goal

Capture advisor email addresses in exchange for the free Heir 
Relationship Framework (mini book + quick reference PDF).
Secondary goal: qualify founding cohort applicants via a 
separate application form below the fold.

## Forms

- Two separate forms — book download and cohort application
- Both connect to ConvertKit via API (not embedded forms)
- API key and form IDs stored in .env as environment variables
- Form submissions handled via Vercel serverless functions

## Environment Variables

- VITE_CONVERTKIT_API_KEY
- VITE_CONVERTKIT_BOOK_FORM_ID
- VITE_CONVERTKIT_COHORT_FORM_ID
