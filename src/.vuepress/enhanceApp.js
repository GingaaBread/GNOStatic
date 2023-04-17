/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

import Prism from "prismjs";
import "./gno.js";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  console.log(Prism);

  Vue.mixin({
    mounted() {
      const codeSections = document.querySelectorAll(
        "div.language-gno code.language-text"
      );

      console.log(codeSections.length);

      codeSections.forEach((element) => {
        element.classList.replace("language-text", "language-gno");
      });

      Prism.highlightAll();
    },
  });
};
