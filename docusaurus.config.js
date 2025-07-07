// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Combilift Documentation',
  tagline: "Supporting Your Business",
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  plugins: [
    [
      "docusaurus-plugin-chat-page",
      {
        path: "chat", // URL path for the chat page
        openai: {
          apiKey: process.env.OPENAI_API_KEY, // Your OpenAI API key
        },
      },
    ],
  ],

  // Set the production url of your site here
  url: 'https://combiCaolan.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/combi-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'combiCaolan', // Usually your GitHub org/user name.
  projectName: 'combi-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es'], // add your target languages here
    localeConfigs: {
      en: { label: 'English' },
      fr: { label: 'Français' },
      es: { label: 'Español' }
    }
  },

  scripts: [
    {
      src: 'https://cdn.kapa.ai/widget.js',
      async: true,
    }
  ],

  themes: [
    [
      // @ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        hashed: true,
        // language: ["en"], // Uncomment if you want to support other languages
        // forceIgnoreNoIndex: true, // Uncomment if you use noIndex: true in docs
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Next 🚧',
            },
            '1.0.0': {
              label: 'v1.0.0',
            },
            '2.0.0': {
              label: 'v2.0.0',
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Combilift Docs',
        logo: {
          alt: 'Combilift Logo',
          src: 'https://combilift.com/wp-content/uploads/2021/09/Combilift-Web-Logo_W2-01.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            // Optional: customize dropdown label and options
            // dropdownActiveClassDisabled: false,
            // dropdownItemsBefore: [],
            // dropdownItemsAfter: [],
          },
          {
            to: "/chat", // Make sure this matches your plugin's path configuration
            label: "Chat",
            position: "left",
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'X',
          //       href: 'https://x.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'Contact us',
            items: [
              {
                label: 'Address:  Annahagh, Co. Monaghan, H18 VP65, Ireland.',
                href: 'https://maps.app.goo.gl/39gipgksvuAahrS5A'
              },
              {
                label: 'Phone:+353(0)4780500',
                href: 'tel:+353(0)4780500',
              },
            ],
          },
          {
            // title: 'Contact us',
            items: [
              {
                label: `Copyright © ${new Date().getFullYear()} Combilift. `,
                href: 'https://combilift.com/'
              }
            ],
          }
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Combilift. `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.duotoneDark,
      },
    }),
};

export default config;
