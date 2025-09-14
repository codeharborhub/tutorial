import { themes as prismThemes } from "prism-react-renderer";

const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

const path = require("path");
require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CodeHarborHub",
  tagline: "A place to learn and grow",
  favicon: "img/favicon_io/favicon.ico",
  url: "https://codeharborhub.github.io/",
  baseUrl: "/tutorial/",
  customFields: {
    admin: "Ajay Dhangar",
    superman: "Shivay",
  },

  organizationName: "codeharborhub",
  projectName: "dsa",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // debug: true,
        docs: {
          sidebarPath: require.resolve("./sidebar.js"),
          editUrl: "#",
          routeBasePath: "/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  scripts: [
    {
      src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5832817025080991",
      async: true,
      crossOrigin: "anonymous",
    },
    {
      src: "https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js",
      customElement: "amp-auto-ads",
      async: true,
    },
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/codeharborhub-social-card.jpg",
      announcementBar: {
        id: "announcementBar",
        content:
          'Comming Soon!',
        isCloseable: true,
        backgroundColor: "#4d5061",
      },

      metadata: [
        {
          name: "keywords",
          content:
            "CodeHarborHub, Docs, Tutorials, Courses, DSA, Problems, Solutions, Showcase, Community, Blog, Web Dev, Live Editor, Quiz, Tags, Donate, Careers, Team, GitHub, Products, LinkedIn, YouTube, Discord, Twitter, Privacy Policy, Terms of Service, Code of Conduct, Cookie Policy, Licensing, Web Development, React, JavaScript, Python, Java, Tailwind CSS, CPP, NextJs, MATLAB, Julia, HTML, CSS, TypeScript, DSA, Data Structures, Algorithms, Competitive Programming",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@CodesWithAjay" },
        { name: "twitter:creator", content: "@CodesWithAjay" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "CodeHarborHub" },
        {
          property: "og:title",
          content: "CodeHarborHub - A place to learn and grow",
        },
        {
          name: "google-adsense-account",
          content: "ca-pub-5832817025080991",
        },
        {
          property: "og:description",
          content:
            "CodeHarborHub is a place to learn and grow. We provide accessible and comprehensive educational resources to learners of all levels, from beginners to advanced professionals.",
        },
        {
          property: "og:image",
          content:
            "https://codeharborhub.github.io/img/codeharborhub-social-card.jpg",
        },
        { property: "og:url", content: "https://codeharborhub.github.io" },
      ],

      navbar: {
        title: "CodeHarborHub",
        logo: {
          alt: "CodeHarborHub Logo",
          src: "img/nav-logo.jpg",
          href: "https://codeharborhub.github.io/",
          target: "_self",
        },
        items: [
          {
            to: "/",
            position: "right",
            label: "📚 Tutorial",
          },
          {
            href: "https://github.com/codeharborhub",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
        // hideOnScroll: true,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: " ",
            items: [
              {
                html: `
                    <div class="footer_info--container">
                      <img src="/img/nav-logo.jpg" alt="Footer logo" />
                      <span>
                      Our mission at CodeHarborHub is clear: to provide accessible and comprehensive educational resources to learners of all levels, from beginners to advanced professionals.
                      </span>
                    </div>
                  `,
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Tutorials",
                to: "https://codeharborhub.github.io/docs/",
              },
              {
                label: "Courses",
                to: "https://codeharborhub.github.io/courses/",
              },
              {
                label: "DSA Problems",
                to: "#",
              },
              {
                label: "DSA Solutions",
                to: "#",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "About",
                to: "https://codeharborhub.github.io/about/",
              },
              {
                label: "Contact",
                to: "https://codeharborhub.github.io/contact/",
              },
              {
                label: "Careers",
                to: "https://codeharborhub.github.io/careers/",
              },
              {
                label: "Team",
                to: "https://codeharborhub.github.io/community/team/",
              },
            ],
          },
          {
            title: "Terms/Conditions",
            items: [
              {
                label: "Privacy Policy",
                to: "https://codeharborhub.github.io/privacy-policy/",
              },
              {
                label: "Terms of Service",
                to: "https://codeharborhub.github.io/terms-service/",
              },
              {
                label: "Code of Conduct",
                to: "https://codeharborhub.github.io/code-of-conduct",
              },
              {
                label: "Cookie Policy",
                to: "https://codeharborhub.github.io/cookie-policy",
              },

              {
                label: "License",
                to: "https://codeharborhub.github.io/License/",
              },
            ],
          },
          {
            title: "Quick Links",
            items: [
              {
                label: "Blog",
                to: "https://codeharborhub.github.io/blog/",
              },
              {
                label: "Community",
                to: "https://codeharborhub.github.io/community/",
              },
              {
                label: "GitHub",
                href: "https://github.com/codeharborhub",
              },
            ],
          },
          {
            title: "Social Media",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/codeharborhub/",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/",
                icon: "faYoutube",
              },
              {
                label: "Discord",
                href: "https://discord.gg/c53FQn3pRv",
              },
              {
                label: "Twitter(X)",
                href: "https://twitter.com/CodesWithAjay",
              },
            ],
          },
        ],
        logo: {
          alt: "Powered by CodeHarborHub | Product Hunt",
          src: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=464236&theme=light",
          href: "https://www.producthunt.com/posts/codeharborhub",
        },
        copyright: `Copyright © ${new Date().getFullYear()} CodeHarborHub, Made by <a href="https://github.com/ajay-dhangar/">Ajay Dhangar</a>`,
      },
      prism: {
        theme: prismThemes.github,
        // theme: prismThemes.dracula,
        // theme: prismThemes.vsDark,
        darkTheme: prismThemes.dracula,
        // darkTheme: prismThemes.github,
        additionalLanguages: ["powershell"],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid", "@docusaurus/theme-live-codeblock"],

  plugins: [
    [
      "vercel-analytics",
      {
        debug: true,
        mode: "auto",
      },
    ],
    [
      "@docusaurus/plugin-google-tag-manager",
      {
        containerId: "GTM-MLJNRGC9",
      },
    ],
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-8QK6Y7QDCB",
        anonymizeIP: true,
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        swCustom: require.resolve("./src/sw.js"),
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/favicon_io/favicon.ico",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#000",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/favicon_io/apple-touch-icon.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/favicon_io/android-chrome-192x192.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#000",
          },
        ],
      },
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
    [
      path.join(__dirname, "/plugins/my-plugin"),
      {
        settings: "Some20settings",
        api: "Some-API",
        keys: "Some-keys",
      },
    ],
  ],
};

export default config;
