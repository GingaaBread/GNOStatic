// GNO syntax highlighting support

Prism.languages.gno = {
  comment: {
    pattern: /(\/\/.*|\/\*[\s\S]*?\*\/)/g,
    lookbehind: false,
    greedy: true,
  },
  builtin: {
    pattern: /print|input|args/,
    lookbehind: false,
    greedy: true,
  },
  keyword: {
    pattern:
      /\b(?:abstract|and|as|boolean|break|case|catch|constructor|char|class|default|do|double|else|empty|enum|entity|equals|event|exists|false|for|foreach|get|if|implemented|in|int|interface|is|not|null|of|or|overridden|return|set|single|static|string|switch|this|throw|true|while|with)\b/,
    lookbehind: false,
    greedy: true,
  },
  punctuation: {
    pattern: /(?<!["'])[,.\[\]{}\(\):#](?=(?:[^"\\]*(?:\\.|"(?!"))[^"\\]*)*$)/,
    lookbehind: false,
    greedy: true,
  },
  string: {
    pattern: /\"[^"\\]*\"/,
    lookbehind: false,
    greedy: true,
  },
  number: {
    pattern:
      /(?<![.\d-])(?:-?\d+(?:\.\d+(?:(?<=\d)s|(?<=\d)d)?)?|(?<!\d)-?\d+(?:(?<=\d)s|(?<=\d)d)?)(?![.\d-])/g,
    lookbehind: false,
    greedy: true,
  },
};
