// GNO syntax highlighting support

Prism.languages.gno = {
  keyword: {
    pattern:
      /\b(?:abstract|and|as|boolean|break|case|catch|char|class|default|do|double|else|empty|enum|entity|equals|event|exists|for|foreach|get|if|implemented|in|int|interface|is|long|not|null|of|or|unless|until|overridden|return|set|single|static|string|switch|this|try|throw|while|with)\b/,
    lookbehind: false,
    greedy: true,
  },
  builtin: {
    pattern: /printin|print|input|args/,
    lookbehind: false,
    greedy: true,
  },
  "class-name": {
    pattern: /\b[A-Z][a-zA-Z\d_]*\b(?!\s*\()/,
    greedy: true,
  },
  function: {
    pattern: /\b[A-Za-z_]\w*\s*(?=\()/,
    lookbehind: false,
    greedy: true,
  },
  boolean: {
    pattern: /\b(?:true|false)\b/,
    greedy: true,
  },
  number: {
    pattern:
      /(?<![.\d-])(?:-?\d+(?:\.\d+)?(?:[dL])?|(?<!\d)-?\d+(?:[dL])?)(?![.\d-])/,
    lookbehind: false,
    greedy: true,
  },
  string: {
    pattern: /"(?:\\[\s\S]|[^\\"])*"|"""\s*[\s\S]*?\s*"""/,
    greedy: true,
  },
  char: {
    pattern: /@?'(?:\\.|(?!\1)[^\\\r\n])*?\1/,
    greedy: true,
  },
  operator: {
    pattern:
      /(\+\+|--|&&|\|\||<|>|=>|[-+*%&|^!=]=?|~|\?\.|\?|:|<<?=|>>?>?=?|[-+*%&|^<>!]=?(?![^\n]))/,
    greedy: true,
  },
  variable: {
    pattern: /\b[a-z][A-Za-z\d]*\b/,
    greedy: true,
  },
  constant: {
    pattern: /\b[A-Z][A-Za-z\d]*\b/,
    greedy: true,
  },
  punctuation: {
    pattern: /[()\[\]{}.,;]/,
    lookbehind: false,
    greedy: true,
  },
  comment: {
    pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
    greedy: true,
  },
};
