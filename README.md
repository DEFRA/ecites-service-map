# Service Mapping Tool

Gives cross-functional teams a shared canvas to map what users do, what the service does, and what's happening behind the scenes — across stages, steps, and swimlanes (L1 macro → L2 journey → L3 product detail). Pain points, needs, and system constraints are visible in the same view, so nothing gets siloed in a slide deck or across multiple mural boards.

This is a proof of concept, not a production SaaS platform. To roll it out across multiple teams, it would need to be productionised with shared persistent storage, proper authentication and authorisation, team/workspace management, collaboration features, backups, and operational support.


## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Current limitations

- **Single-user editing only:** the app does not support multi-user collaboration, live cursors, comments, presence, locking, or merge/conflict handling.
- **No user accounts or roles:** the Heroku password gate is only a shared preview password. It is not per-user authentication, authorisation, audit history, or workspace membership.
- **Local-first storage:** active boards and the library are stored in the browser’s `localStorage`. Work is tied to that browser/device unless exported or shared.
- **No database by default:** the app is not connected to persistent server storage out of the box. Without Supabase configuration, **Copy share link** cannot create a share URL and will show **Share failed**.
- **Share links are snapshots:** shared `/view/<id>` pages are read-only. They are not collaborative editing sessions.
- **Share payload size limits:** large boards may be trimmed for sharing; storyboard images can be omitted and long text shortened to stay within transport limits. Use Export for a visual copy that includes storyboard images.
- **Import limitations:** PDF import works from text-based PDFs. Scanned/image-only PDFs may not extract usable rows.
- **Browser storage limits apply:** very large boards, especially with storyboard images, can hit browser storage quotas or fail in private browsing modes.

## Tech stack

Next.js · TypeScript · Tailwind CSS v4 · Zustand · shadcn/ui · dnd-kit

## Project structure

```
src/
├── app/                  — Next.js routes and global styles
├── components/board/     — Board, cards, toolbar, panels
├── components/import/    — Import dialog and file handling
├── lib/                  — Types, import pipeline, data loaders
└── store/                — Zustand blueprint store
```

## Deploying to Heroku

**1. Create the app**
```bash
heroku create your-app-name
```

**2. Set the password**

This activates the password gate — anyone visiting the URL will get a browser login prompt. They can enter any username but must use this exact password.
```bash
heroku config:set PREVIEW_PASSWORD=yourchosenpassword
```

**3. Configure share links**

Set the same Supabase values in Heroku if you want **Copy share link** to work on the deployed app.

```bash
heroku config:set NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
heroku config:set NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

**4. Push to deploy**
```bash
git push heroku main
```

> `middleware.ts` handles the password gate. When `PREVIEW_PASSWORD` is set, every page requires authentication. If the env var is not set (e.g. locally), all traffic passes through freely. No code changes needed.

---

Created and designed by Millie Chan, May 2026.
