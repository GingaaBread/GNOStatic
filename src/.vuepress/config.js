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
    ],
    sidebar: [
      {
        title: "Get Started",
        path: "/get_started/",
        collapsable: false,
      },
      {
        title: "Essentials",
        path: "/essentials/programs",
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
            title: "Data Types",
            path: "/essentials/datatypes.md",
          },
          {
            title: "Arrays",
            path: "/essentials/arrays.md",
            collapsable: true,
          },
          {
            title: "Conditions",
            path: "/essentials/conditions/if_condition",
            collapsable: true,
            children: [
              {
                title: "If Condition",
                path: "/essentials/conditions/if_condition.md",
              },
              {
                title: "Unless Condition",
                path: "/essentials/conditions/unless_condition.md",
              },
              {
                title: "Switch",
                path: "/essentials/conditions/switch.md",
              },
            ],
          },
          {
            title: "Loops",
            path: "/essentials/loops/for_loop",
            collapsable: true,
            children: [
              {
                title: "For Loop",
                path: "/essentials/loops/for_loop.md",
              },
              {
                title: "Foreach Loop",
                path: "/essentials/loops/foreach_loop.md",
              },
              {
                title: "Do Loop",
                path: "/essentials/loops/do_loop.md",
              },
              {
                title: "While Loop",
                path: "/essentials/loops/while_loop.md",
              },
              {
                title: "Until Loop",
                path: "/essentials/loops/until_loop.md",
              },
            ],
          },
          {
            title: "Operators",
            path: "/essentials/operators/comparison_operators",
            collapsable: true,
            children: [
              {
                title: "Comparison Operators",
                path: "/essentials/operators/comparison_operators.md",
              },
              {
                title: "Logical Operators",
                path: "/essentials/operators/logical_operators.md",
              },
              {
                title: "Mathematical Operators",
                path: "/essentials/operators/mathematical_operators.md",
              },
              {
                title: "Special Operators",
                path: "/essentials/operators/special_operators.md",
              },
            ],
          },
          {
            title: "Sample",
            path: "/essentials/sample.md",
          },
        ],
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
