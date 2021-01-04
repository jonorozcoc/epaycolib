module.exports = {
  title: "epaycolib",
  tagline: "Integra ePayco en PHP facilmente",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "jonorozcoc", // Usually your GitHub org/user name.
  projectName: "epaycolib", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "epaycolib",
      logo: {
        alt: "epaycolib",
        src: "img/php-logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Documentación",
          position: "left",
        },
        // TODO: Enable blog
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/jonorozcoc/epaycolib",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentación",
          items: [
            {
              label: "Libreria",
              to: "docs/",
            },
            {
              label: "Características",
              to: "docs/features/charges/",
            },
          ],
        },
        {
          title: "Comunidad",
          items: [
            {
              label: "GitHub (Discusiones)",
              href: "https://github.com/jonorozcoc/epaycolib/discussions",
            },
          ],
        },
        {
          title: "Enlaces",
          items: [
            // TODO: Enable blog
            // {
            //   label: "Blog",
            //   to: "blog",
            // },
            {
              label: "Repositorio",
              href: "https://github.com/jonorozcoc/epaycolib",
            },
            {
              label: "Sitio web de ePayco",
              href: "https://epayco.co",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jonatan Orozco. Hecho con Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
