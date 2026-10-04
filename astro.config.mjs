// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

/**
 * `site` and `base` are detected automatically when GitHub Actions builds the
 * site, so the deployed URL is correct no matter what you name the repository
 * (project repo, e.g. /my-portfolio, or user site, e.g. user.github.io).
 *
 * Locally both fall back to "/" which is what `npm run dev` expects.
 *
 * USING A CUSTOM DOMAIN? Set these two environment variables in
 * `.github/workflows/deploy.yml` under the build step's `env:`, and they take
 * precedence over auto-detection:
 *
 *   SITE_URL: https://your-domain.com
 *   BASE_PATH: /
 */
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite =
  Boolean(owner) &&
  Boolean(repo) &&
  repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

const site =
  process.env.SITE_URL ||
  (isGitHubActions && owner
    ? `https://${owner.toLowerCase()}.github.io`
    : "https://example.github.io");

const base =
  process.env.BASE_PATH ??
  (isGitHubActions && repo && !isUserSite ? `/${repo}` : "/");

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
