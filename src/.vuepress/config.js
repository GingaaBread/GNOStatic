const { description } = require("../../package");

module.exports = {
  base: "/GNOStatic/",
  markdown: {
    lineNumbers: true,
  },
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "GNODocs",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Get Started",
        link: "/get_started/",
      },
      {
        text: "VuePress",
        link: "https://v1.vuepress.vuejs.org",
      },
    ],
    sidebar: [
      {
        title: "Get Started",
        path: "/get_started/",
        collapsable: false,
      },
      {
        title: "Essentials",
        path: "/essentials/",
        collapsable: true,
        children: [
          {
            title: "Programs",
            path: "/essentials/programs.md",
          },
          {
            title: "Folders",
            path: "/essentials/folders.md",
          },
          {
            title: "Enumerations",
            path: "/essentials/enumerations.md",
          },
          {
            title: "Arrays",
            path: "/essentials/arrays.md",
          },
          {
            title: "Data Types",
            path: "/essentials/datatypes.md",
          },
          {
            title: "Conditions",
            path: "/essentials/conditions/",
            collapsable: true,
            children: [
              {
                title: "If Condition",
                path: "/essentials/conditions/if_condition.md",
              },
            ],
          },
          {
            title: "Loops",
            path: "/essentials/loops/",
            collapsable: true,
            children: [
              {
                title: "For Loop",
                path: "/essentials/loops/for_loop.md",
              },
            ],
          },
          {
            title: "Operators",
            path: "/essentials/operators/",
            collapsable: true,
            children: [
              {
                title: "Some Operator",
                path: "/essentials/operators/some_operator.md",
              },
            ],
          },
          {
            title: "Exceptions",
            path: "/essentials/exceptions.md",
          }
        ],
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
