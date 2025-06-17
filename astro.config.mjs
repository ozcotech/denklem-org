// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';


// https://astro.build/config
export default defineConfig({
  site: 'https://denklem.org',

  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  integrations: [
    tailwind({
      applyBaseStyles: false, // Disable base styles to avoid conflicts with DaisyUI
      configFile: './tailwind.config.js',
    }),
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
    }),
    sitemap()
  ],
});