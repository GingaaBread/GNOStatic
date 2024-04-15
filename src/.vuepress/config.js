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
            title: "Data Types",
            path: "/essentials/datatypes.md",
          },
          {
            title: "Data Casting",
            path: "/essentials/casting.md",
          },
          {
            title: "Arrays",
            path: "/essentials/arrays.md",
          },
          {
            title: "Enumerations",
            path: "/essentials/enumerations.md",
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
                title: "Arithmetic Operators",
                path: "/essentials/operators/arithmetic_operators.md",
              },
              {
                title: "String Operators",
                path: "/essentials/operators/string_operators.md",
              },
              {
                title: "Special Operators",
                path: "/essentials/operators/special_operators.md",
              },
            ],
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
                title: "Do Loop",
                path: "/essentials/loops/do_loop.md",
              },
              {
                title: "Foreach Loop",
                path: "/essentials/loops/foreach_loop.md",
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
            title: "Exceptions",
            path: "/essentials/exceptions.md",
          },
          {
            title: "Comments",
            path: "/essentials/comments.md",
          },
          {
            title: "Constants",
            path: "/essentials/constants.md",
          },
        ],
      },
      {
        title: "Object Orientation",
        path: "/object_orientation/classes",
        collapsable: true,
        children: [
          {
            title: "Classes",
            path: "/object_orientation/classes.md",
          },
          {
            title: "Class Definitions",
            path: "/object_orientation/class_definitions/abstract_classes",
            collapsable: true,
            children: [
              {
                title: "Abstract Classes",
                path: "/object_orientation/class_definitions/abstract_classes.md",
              },
              {
                title: "Iterable Classes",
                path: "/object_orientation/class_definitions/iterable_classes.md",
              },
              {
                title: "Singleton Classes",
                path: "/object_orientation/class_definitions/singleton_classes.md",
              },
              {
                title: "Entity Classes",
                path: "/object_orientation/class_definitions/entity_classes.md",
              },
              {
                title: "Service Classes",
                path: "/object_orientation/class_definitions/service_classes.md",
              },
            ],
          },
          {
            title: "Properties",
            path: "/object_orientation/properties.md",
          },
          {
            title: "Methods",
            path: "/object_orientation/methods.md",
          },
          {
            title: "Protection Levels",
            path: "/object_orientation/protection_levels.md",
          },
          {
            title: "Constructors",
            path: "/object_orientation/constructors.md",
          },
          {
            title: "Objects",
            path: "/object_orientation/objects.md",
          },
          {
            title: "Generic Classes",
            path: "/object_orientation/generics.md",
          },
          {
            title: "Operator Overloading",
            path: "/object_orientation/operator_overloading.md",
          },
          {
            title: "Assertions",
            path: "/object_orientation/assertions.md",
          },

          {
            title: "Inheritance",
            path: "/object_orientation/inheritance.md",
          },
          {
            title: "Interfaces",
            path: "/object_orientation/interfaces.md",
          },
        ],
      },
      {
        title: "Advanced",
        path: "/advanced/identifiers",
        collapsable: true,
        children: [
          {
            title: "Identifiers",
            path: "/advanced/identifiers.md",
          },
          {
            title: "Keywords",
            path: "/advanced/keywords.md",
          },
          {
            title: "Coding Conventions",
            path: "/advanced/coding_conventions.md",
          },
          {
            title: "Sets",
            path: "/advanced/sets/list",
            collapsable: true,
            children: [
              {
                title: "List",
                path: "/advanced/sets/list.md",
              },
              {
                title: "Unless Condition",
                path: "/advanced/sets/set_queries.md",
              },
            ],
          },
          {
            title: "Builtins",
            path: "/advanced/builtins/print",
            collapsable: true,
            children: [
              {
                title: "Print",
                path: "/advanced/builtins/print.md",
              },
            ],
          },
        ],
      },
      {
        title: "Sample",
        path: "/sample.md",
        collapsable: false,
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
