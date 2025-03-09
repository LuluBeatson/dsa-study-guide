import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'DSA Study Guide',
    tagline: 'A concise guide to Data Structures and Algorithms',
    favicon: 'img/logo_small.png',

    // Set the production url of your site here
    url: 'https://dsa.lulubeatson.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    baseUrl: '/',
    trailingSlash: false,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'LuluBeatson', // Usually your GitHub org/user name.
    projectName: 'dsa-study-guide', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
            type: 'text/css',
            integrity: 'sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+',
            crossorigin: 'anonymous',
        },
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Remove the default edit URL
                    editUrl: 'https://github.com/LuluBeatson/dsa-study-guide/tree/main',
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        // image: 'img/dsa-study-guide-social-card.jpg',
        navbar: {
            title: 'DSA Study Guide',
            logo: {
                alt: 'DSA Study Guide Logo',
                src: 'img/logo_512.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Guide',
                },
                {
                    href: 'https://github.com/LuluBeatson/dsa-study-guide',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [],
            copyright: `© ${new Date().getFullYear()} DSA Study Guide - Open Source | Built with Docusaurus`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
