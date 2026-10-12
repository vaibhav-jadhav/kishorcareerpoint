# KCP design system

The rulebook for how the site looks. Read it before changing a page, and keep new work inside it.
Words and data live in `content/`. See `AGENTS.md` for the working rules.

## Direction

A serious Indian coaching site: clear type, generous space, obvious next steps. Light pages, one strong blue, one warm accent. It should feel made for KCP, not generated from a template.

## Type

| Use | Face | Notes |
| --- | --- | --- |
| Headlines (h1 to h3) | Bricolage Grotesque | Set globally in `app/globals.css`. Weights 700 to 800. |
| Body, labels, buttons | Manrope | `font-sans`. Weights 500 to 700. |

- Never use Inter, Roboto, Arial, Open Sans or Helvetica.
- Scale: hero `text-3xl` to `text-5xl`, section heading `text-2xl` to `text-3xl`, body `text-base`, small `text-sm`, tags `text-xs`. Do not add sizes between these.
- Headlines sit on `text-ink` (or white on blue). Body copy uses `text-muted`.

## Colour

| Token | Value | Use |
| --- | --- | --- |
| `brand` | `#005aaa` | Primary blue: bands, links, buttons |
| `brand-dark` | `#04284a` | Dark bands, strong text on yellow |
| `accent` | `#e4570e` | The one call to action that must stand out |
| `sun` | `#ffc20e` | Highlights, tags, main-branch marker |
| `tag` | `#1aa14a` | Success and foundation course |
| `sky` | `#eaf4fc` | Page hero and section wash |
| `surface` | `#f4f7fb` | Alternating section background |

- Flat colours only. No gradients. Depth comes from a subtle dot grid, a ring, or a photo.
- No purple, indigo or violet anywhere.
- One accent per screen. If everything is orange, nothing is.

## Layout and shape

- Containers are `max-w-6xl`, with `px-5 sm:px-6`. Sections use `py-10 sm:py-14`.
- Do not repeat three identical cards in a row. Mix a list, a split with a photo, a big number, a narrative paragraph.
- Separate sections with spacing and a change of background, not borders. Use a border only when it carries meaning (a selected card, an input).
- Radius: `rounded-lg` for buttons and inputs, `rounded-2xl` for cards, `rounded-3xl` only for large feature blocks.

## Copy

- Real names, numbers, branches and dates from `content/`. Never invent rankers, scores or testimonials.
- No em-dashes in copy. Use a comma, a colon or a full stop. Ranges use an en dash ("8th–10th").
- No decorative emoji. Use the SVG icons already in the code.
- Keep the institute's voice. Fix only obvious typos.

## Images

- Real KCP photos only (`public/rankers`, `public/courses`, `public/about`, `public/results`). No stock photos, no generated people.

## Motion

- CSS keyframes only. Looping motion is small and decorative; nothing moves content the user is reading.
- Every animation must stop under `prefers-reduced-motion` (see `app/globals.css`).

## Interaction

- Every form control has a visible label.
- Tap targets are at least 44px tall.
- Call and Directions are one tap away on every branch.
