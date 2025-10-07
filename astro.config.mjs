// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

// https://astro.build/config
export default defineConfig({
	site: 'https://baktistr.github.io',
	integrations: [
		starlight({
			title: 'My Blog',
			favicon: '/logo_blog.png',
			logo: {
				src: './public/logo_blog.png',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/baktistr' }
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [starlightThemeRapide()],
		}),
	],
});
