# Nova Social Client Portal

Professional React + Vite web app for Nova Social Studio, a social-media agency with a public portfolio site and a private Supabase Auth client dashboard.

## Tech Stack

- React
- Vite
- React Router
- Supabase Auth
- Vercel

## Local Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the environment example:

   ```bash
   cp .env.example .env
   ```

3. Add your Supabase values to `.env`:

   ```bash
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the app:

   ```bash
   npm run dev
   ```

5. Create a production build:

   ```bash
   npm run build
   ```

## Create a Supabase Project

1. Go to [Supabase](https://supabase.com/).
2. Create a new project.
3. Open **Project Settings**.
4. Go to **API**.
5. Copy the project URL into `VITE_SUPABASE_URL`.
6. Copy the anon public key into `VITE_SUPABASE_ANON_KEY`.

## Enable Email and Password Auth

1. In Supabase, open **Authentication**.
2. Go to **Providers**.
3. Enable **Email**.
4. Keep **Confirm email** enabled if you want users to verify email before login.
5. Save the provider settings.

## Enable Google Login

1. In Supabase, open **Authentication**.
2. Go to **Providers**.
3. Enable **Google**.
4. Create OAuth credentials in Google Cloud Console.
5. Add the Google client ID and client secret in Supabase.
6. Save the provider settings.

## Add Redirect URLs

In Supabase, open **Authentication** and then **URL Configuration**.

For local development, add:

```text
http://localhost:5173/dashboard
```

For Vercel production, add:

```text
https://your-vercel-domain.vercel.app/dashboard
```

Also set the Site URL to your deployed Vercel domain when deploying.

## Deploy to Vercel

1. Push the project to a Git repository.
2. Import the repository in [Vercel](https://vercel.com/).
3. Set the framework preset to **Vite**.
4. Add these environment variables in Vercel:

   ```text
   VITE_SUPABASE_URL
   VITE_SUPABASE_ANON_KEY
   ```

5. Deploy the project.
6. Add the deployed `/dashboard` URL to Supabase redirect URLs.

The included `vercel.json` rewrites all route requests to `index.html` so React Router routes work after refresh.

## Routes

- `/`
- `/services`
- `/work`
- `/about`
- `/team`
- `/contact`
- `/login`
- `/dashboard`

The `/dashboard` route is protected. Unauthenticated visitors are redirected to `/login`.
