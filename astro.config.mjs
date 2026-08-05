import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL;
const configuredBase = process.env.BASE_PATH ?? '/';
const base = `/${configuredBase}`.replace(/\/+/g, '/').replace(/\/$/, '') || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
});
