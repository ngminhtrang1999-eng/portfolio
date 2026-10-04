# AGENTS.md — working guide for AI coding agents

> **Audience:** an AI agent (or a human) starting a **new session** in this repository.
> **Purpose:** let you extend this portfolio correctly without re-reading the whole codebase.
> Read this file fully before editing anything.

---

## 1. What this project is

A personal portfolio website for a student who uses it for **job/internship
interviews** and **scholarship applications**.

- **Stack:** Astro 5 (static output) + Tailwind CSS v4 (through `@tailwindcss/vite`) + TypeScript.
- **Single page:** `src/pages/index.astro` renders every section, in order.
- **No database, no CMS, no API, no tests.** All content is one TypeScript object.
- **Deployed** to GitHub Pages by GitHub Actions.

## 2. Commands

```bash
npm install          # once, after cloning or when package.json changes
npm run dev          # dev server at http://localhost:4321 (hot reload)
npm run build        # production build into dist/ — run this before every push
npm run preview      # serve the built dist/ locally
```

> If `npm install` is blocked by a sandbox that forbids writing to the global npm
> cache, pass a project-local cache: `npm install --cache ./.npm-cache`
> (that directory is already in `.gitignore`).

## 3. The one rule that matters

**Every piece of content lives in `src/config.ts`.** It is the single source of
truth. To change wording, add a project, add an award, or swap the CV, edit that
file — **not** the components.

Component files under `src/components/` describe *how* a section looks. Only edit
them when you need a new *kind* of section or a visual change.

## 4. Architecture map

| File | Responsibility |
| --- | --- |
| `src/config.ts` | **All content.** The only file needed for day-to-day edits. |
| `src/pages/index.astro` | Page shell: `<head>`, section order, `<Header>` / `<Footer>`. |
| `src/components/Hero.astro` | Full-screen intro: name, title, Download CV button, social icons. |
| `src/components/About.astro` | About paragraph + skill pills. |
| `src/components/Projects.astro` | Project cards, numbered `01`, `02`, … |
| `src/components/Awards.astro` | Awards & competitions cards. |
| `src/components/Experience.astro` | Timeline of roles with bullet points. |
| `src/components/Education.astro` | Degree cards with achievements. |
| `src/components/Certifications.astro` | Compact rows of courses/certificates. |
| `src/components/Header.astro` | Fixed top nav (desktop only, `hidden md:block`). |
| `src/components/Footer.astro` | Contact block + secondary nav. |
| `src/utils/url.ts` | `withBase()` — see §10. |

**Section order on the page:** Hero → About → Projects → Awards → Experience →
Education → Courses → Footer.

**Conditional rendering:** every section component starts with a guard such as
`const hasAwards = siteConfig.awards && siteConfig.awards.length > 0;` and renders
nothing when the array is missing or empty. **The nav links in `Header.astro` and
`Footer.astro` have the same guards.** Consequences you can rely on:

- Deleting a whole array from `config.ts` removes the section *and* its nav links.
- Do **not** leave an empty-looking placeholder entry; delete it instead, or the
  section will render with empty text.

## 5. Recipe — add a project

This is the most common task. Projects are the strongest evidence in the
portfolio, so **curate** rather than dump: 3–5 entries beat 15.

1. Open `src/config.ts` and find the `projects: [...]` array.
2. Add an object with this exact shape:

```ts
{
  name: "Short, concrete project name",
  description:
    "One sentence on what it does and for whom, one sentence on the result (users, accuracy, time saved, ranking).",
  link: "https://github.com/username/repo",   // optional — delete this line for a private project
  skills: ["Python", "FastAPI", "PostgreSQL"], // optional — concrete tools actually used
},
```

3. Order matters: the first entry renders as `01` at the top. Put the strongest
   project first.
4. Remove the `link` line entirely (do not set it to `""`) when a project has no
   public URL — the card then renders as non-clickable plain text.
5. Run `npm run build` and confirm it exits 0.

**Writing the description — do not skip this.** Vague descriptions waste a good
project. Each one should answer: what problem, what did *you* build, what was the
outcome. Prefer "Reduced manual data-entry time from 2 hours to 5 minutes for a
40-person student club" over "A web app for data entry".

## 6. Recipe — add an award / competition / scholarship

Edit `awards: [...]` in `src/config.ts`:

```ts
{
  title: "Competition or award name",
  issuer: "Organizing body, university, or sponsor",
  date: "2025",
  description:
    "What the competition was, how many teams or applicants took part, and the result (prize, rank, percentile).",
  link: "https://optional-proof-url", // optional
},
```

Include the **scale** (number of participants) — it is what makes an award
meaningful to a reviewer.

## 7. Recipe — add a course / certification

Edit `certifications: [...]` in `src/config.ts`:

```ts
{
  name: "Course or certificate name",
  issuer: "Coursera / freeCodeCamp / etc.",
  date: "2025",
  link: "https://certificate-url", // optional
},
```

## 8. Recipe — replace the CV

`public/resume.pdf` currently holds a **placeholder PDF**. `public/` is served
from the site root, so anything placed there is reachable at `/<filename>`.

- **Preferred:** overwrite `public/resume.pdf` with the real CV, keeping the name.
  `resumeUrl` in `src/config.ts` already points at `/resume.pdf`.
- **External hosting** (Google Drive, Dropbox) also works — set
  `resumeUrl` to the full `https://…` link. `withBase()` passes absolute URLs
  through untouched.
- To hide the Download CV button, set `resumeUrl: ""`.

Keep the CV itself to 1 page for a student. This site complements the CV; it does
not replace it.

## 9. Recipe — add a whole new section

1. Create `src/components/YourSection.astro`, copying the structure of an existing
   component. Match these conventions exactly:
   - guard: `const hasX = siteConfig.x && siteConfig.x.length > 0;`
   - wrapper: `<section id="your-id" class="p-8 sm:p-12 md:p-16 lg:p-24">`
   - layout: `<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">`
     with the heading in `lg:col-span-4` and content in `lg:col-span-8`
   - heading: `text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900`
   - accent rule: `<div class="w-[75px] h-[5px] mt-2 rounded-full" style={`background-color: ${siteConfig.accentColor}`} />`
2. Add the matching array to `src/config.ts`.
3. Import it and place it in `src/pages/index.astro`.
4. **Add the nav link to BOTH `Header.astro` AND `Footer.astro`**, each wrapped in
   the same `hasX` guard. Forgetting one is the most common mistake here.
5. `npm run build`.

## 10. Invariants and gotchas

- **Never hard-code a root-absolute asset path.** GitHub Pages serves project
  repositories from a sub-path (e.g. `/my-portfolio/favicon.svg`). Wrap local
  asset URLs in `withBase()` from `src/utils/url.ts`, which resolves against
  `import.meta.env.BASE_URL`. Absolute `http(s)://`, `mailto:`, and `tel:` URLs
  pass through unchanged.
- **Hash links are safe.** `#projects`, `#awards`, … need no `withBase()`.
- **Social links are optional.** `config.social` fields can be commented out;
  `Hero.astro` and `Footer.astro` render each icon conditionally. If you add a new
  social field, update **both** files.
- **Use `siteConfig.accentColor`** for any new themed element. Do not introduce a
  second accent color.
- **Tailwind utility classes only** — no separate CSS files. The only global CSS is
  `src/styles/global.css`, which imports Tailwind and sets the IBM Plex Mono font.
- **Responsive breakpoints are mandatory** in new markup: `sm:` `md:` `lg:` `xl:`
  alongside the base classes, matching neighbouring components.
- **`dist/` and `node_modules/` are gitignored.** Never commit build output.
- Placeholder copy in `config.ts` is marked with the string `— replace me`. Find
  what is still unedited with: `grep -rn "replace me" src/config.ts`

## 11. Verifying your change

There is no test suite. Use this checklist instead:

```bash
npm run build     # must exit 0
npm run preview   # open the printed URL and check the section renders
```

Then confirm the section actually made it into the output:

```powershell
# PowerShell
Select-String -Path dist\index.html -Pattern 'id="awards"','<your project title>' -SimpleMatch
```

```bash
# bash
grep -o 'id="awards"' dist/index.html
grep -c 'Your Project Title' dist/index.html
```

**Definition of done** for a content change: build exits 0, the new content is
present in `dist/index.html`, no placeholder `— replace me` text remains in the
section you touched, and the matching nav link appears if you added a new section.

## 12. Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds the site with `withastro/action@v6` and
publishes it with `actions/deploy-pages@v5` on every push to `main`.

`astro.config.mjs` **auto-detects** `site` and `base` from the GitHub Actions
environment variables, so it works whether the repository is a project repo
(`user/my-portfolio` → `base: /my-portfolio`) or a user site
(`user/user.github.io` → `base: /`). Locally both fall back to `/`.

First-time setup, once, in the browser:

1. Create a repository on GitHub and push `main` to it.
2. Repository **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Push any commit; the Actions tab shows the deploy. The URL is
   `https://<user>.github.io/<repo>/`.

For a **custom domain**, add `public/CNAME` with the domain, and set `SITE_URL`
and `BASE_PATH: /` in the workflow's `env:` block (see the comments in
`astro.config.mjs`).

`package-lock.json` is committed on purpose — `withastro/action` uses it to detect
npm. Do not delete it.

## 13. Content strategy — what the user actually wants

The user's stated goal is to make **interviews and scholarship applications**
easier. When asked to help with content, optimise for that:

- **Curate ruthlessly.** A weak project on the page dilutes the strong ones.
  If the user lists many projects, ask which 3–5 best demonstrate the skills the
  target role or scholarship cares about, and suggest hiding the rest.
- **Numbers beat adjectives.** Every bullet should carry a scale, a duration, or a
  result.
- **State ownership.** For team work, say which part the user built.
- **Keep it in English** — the site is deliberately English-only for international
  reviewers.
- **Keep it honest and verifiable.** Never invent metrics, awards, or links; if
  information is missing, ask the user rather than filling it in.
- **Keep it short.** This page is a summary that earns a click, not a full CV.
