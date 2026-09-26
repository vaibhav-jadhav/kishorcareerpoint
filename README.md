# Kishor Career Point

Public website for [Kishor Career Point](https://www.kishorcareerpoint.com), a coaching institute in Maharashtra for JEE, NEET, and Foundation (classes 8–10).

This app replaces the old WordPress theme. Page copy, branch details, rankers, and the NEET article come from that theme and its database. The layout is new.

## Stack

- React 19 and Next.js (App Router)
- TypeScript
- Tailwind CSS
- Content as TypeScript files in `content/`
- Enquiry form as a Next.js server action (email via [Resend](https://resend.com) when configured)
- Hosting target: Vercel

## Requirements

- Node.js 20 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

| Script | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Project layout

```
app/            Routes, layout, sitemap, enquiry server action
components/     Header, footer, page sections, form
content/        All editable site copy and structured data
public/brand/   Logo
old_files/      WordPress backup. Reference only. Do not import it into the app.
```

Routes:

| Path | Page |
|---|---|
| `/` | Home |
| `/about-us` | About |
| `/courses` | JEE, NEET, Foundation |
| `/results` | Rankers and result categories |
| `/branches` | Five branches with maps |
| `/contact-us` | Phone, email, enquiry form |
| `/careers` | Hiring. Empty until a role is added |
| `/blog` | Article list |
| `/blog/kcp-blog` | NEET 2025 guide |

`/kcp-blog` redirects to `/blog/kcp-blog` so the old WordPress post URL still works.

## Editing content

Change the files in `content/`. You do not need to touch a page component for a new branch, course, ranker, or job.

| Change | File |
|---|---|
| Phone, email, social links, Talent Hunt form, Olympiad link | `content/site.ts` |
| Header and footer links | `content/navigation.ts` |
| Courses | `content/courses.ts` |
| Branches, addresses, maps | `content/branches.ts` |
| Rankers and result categories | `content/rankers.ts` |
| Student quotes | `content/testimonials.ts` |
| About, mission, vision, values | `content/about.ts` |
| Blog posts | `content/blog.ts` |
| Careers copy and open roles | `content/careers.ts` |

To publish a job, add an object to `openings` in `content/careers.ts`:

```ts
{
  id: "physics-ichalkaranji",
  title: "Physics faculty",
  location: "Ichalkaranji",
  summary: "One paragraph about the role.",
}
```

The careers page lists roles when that array is not empty.

To add a blog post, append a `BlogPost` in `content/blog.ts`. The blog index and `/blog/[slug]` pick it up. `generateStaticParams` builds a page for every slug.

## Enquiry email

Copy `.env.example` to `.env.local`:

```bash
RESEND_API_KEY=re_...
CONTACT_INBOX=contact@kishorcareerpoint.com
CONTACT_FROM="Kishor Career Point <admissions@your-verified-domain>"
```

`CONTACT_FROM` must use a domain verified in Resend. Without these variables the form does not pretend the message was sent. It asks the visitor to call or email instead.

Add the same variables in the Vercel project settings before going live.

## Deploy on Vercel

1. Import this repository.
2. Leave the root directory as the repository root (this is where `package.json` lives).
3. Framework preset: Next.js.
4. Add the environment variables above.
5. Deploy.

`old_files/` is listed in `.vercelignore`. That folder contains the WordPress database password and auth keys. Do not remove it from `.vercelignore`, and do not commit those secrets into a public repository.

## What was intentionally left out

- Porto demo photos are not used as student portraits. The old results gallery pointed at stock theme images, not photographs of the named students.
- Placeholder blog cards on the old homepage (dated February, with no articles behind them) are not republished. The blog shows the one real post from the database.
- Lorem ipsum quotes on the old courses page are not republished. Testimonials are the two quotes from the homepage.
- Director’s Message is not a route. In WordPress that template was a copy of the homepage and the menu item was turned off.
