# Guide for coding agents

This file is the working agreement for humans and coding agents changing the Kishor Career Point site.

## What this project is

A Next.js marketing site. React, TypeScript, Tailwind, App Router. Content lives in `content/*.ts`. There is no CMS and no database in this app.

`old_files/` is a WordPress backup used as the source of the original copy. It contains live database credentials in `wp-config.php` and password hashes in the SQL dump. Never copy secrets from that folder into source, env examples, logs, or chat. Never deploy it. It is already in `.vercelignore`.

## How to change the site

1. Read the page and the `content/` file it renders before editing.
2. Put words, phone numbers, addresses, and lists in `content/`. Keep components presentational.
3. Match existing patterns: one route folder per page, shared chrome in `components/layout`, repeated sections in `components/home` or a feature folder.
4. Run `npm run lint` and `npm run build` after a change that touches types, routes, or the form.
5. Check the changed pages in a browser, including a narrow viewport, before calling the work done.

## Content rules

- Do not invent rankers, scores, branches, phone numbers, or testimonials.
- Ranker portraits in `public/rankers/`, course banners in `public/courses/`, campus photos in `public/about/`, and result posters in `public/results/` are real KCP images and must stay on the pages that show them. Do not replace them with stock photos.
- Keep public URLs stable: `/about-us`, `/courses`, `/results`, `/branches`, `/contact-us`. The site has no blog; `/blog` and `/kcp-blog` redirect to the home page.
- External links that must stay: Talent Hunt Google Form, Olympiad site, WhatsApp, Facebook, Instagram, YouTube. They are defined once in `content/site.ts`.
- Careers stays an empty list until a real role is provided. Do not add sample jobs.
- Fix a spelling mistake in existing copy only when it is obviously a typo. Do not rewrite the institute’s voice.

## UI rules

- Brand blue is `#005aaa` (`bg-brand`). Headlines sit on `text-ink`. Calls to action that should stand out use `bg-accent`.
- The visual reference is a serious Indian coaching site: clear type, generous space, obvious next steps. Do not clone Allen or Aakash, and do not bring back the Porto template look.
- Prefer server components. Add `"use client"` only for interaction (menu, form).
- Every form control needs a visible label. Do not rely on placeholder text alone.
- The enquiry action must not report success when email is not configured.

## Adding a page

1. Add the route under `app/<path>/page.tsx` with a `metadata` export.
2. Add the path to `app/sitemap.ts` and, if it belongs in the menu, to `content/navigation.ts`.
3. Reuse `PageHero`, `Container`, and existing sections instead of new one-off layout systems.

## Enquiry form

`app/actions/enquiry.ts` validates with Zod and sends through the Resend HTTP API. A hidden `company` field is a honeypot. Keep validation messages specific. Do not log message bodies.

## Do not

- Add a second styling system, a CSS framework, or a component library without being asked.
- Add Redux, a headless CMS, or a database for this brochure site.
- Edit `old_files/`.
- Commit `.env.local` or real API keys.
