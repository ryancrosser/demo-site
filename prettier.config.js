module.exports = {
  /**
   * arrowParens
   * Include parentheses around a sole arrow function parameter.
   *
   * Values:
   * avoid: (default) Omit parens when possible. Example: `x => x`
   * always: Always include parens. Example: `(x) => x`
   */
  arrowParens: 'avoid',
  /**
   * bracketSpacing
   * Print spaces between brackets.
   *
   * Values: boolean
   * true: (default)
   */
  bracketSpacing: true,
  /**
   * cursorOffset
   * Print (to stderr) where a cursor at the given position would move to
   * after formatting.
   * This option cannot be used with --range-start and --range-end.
   *
   * Values: integer
   * -1 (default)
   */
  // cursorOffset: -1,
  /**
   * endOfLine
   * Which end of line characters to apply.
   *
   * Values:
   * auto: (default) Maintain existing (mixed values within one file are
   *       normalised by looking at what's used after the first line)
   * lf: Line Feed only (\\n), common on Linux and macOS as well as inside
   *     git repos
   * crlf: Carriage Return + Line Feed characters (\\r\\n), common on Windows
   */
  // endOfLine: 'auto',
  /**
   * filepath
   * Specify the input filepath. This will be used to do parser inference.
   *
   * Values: string
   */
  // filepath: '',
  /**
   * htmlWhitespaceSensitivity
   * How to handle whitespaces in HTML.
   *
   * Values:
   * css: (default) Respect the default value of CSS display property.
   * strict: Whitespaces are considered sensitive.
   * ignore: Whitespaces are considered insensitive.
   */
  htmlWhitespaceSensitivity: 'css',
  /**
   * insertPragma
   * Insert @format pragma into file's first docblock comment.
   *
   * Values: boolean
   * false (false)
   */
  // insertPragma: false,
  /**
   * jsxBracketSameLine
   * Put > on the last line instead of at a new line.
   *
   * Values: boolean
   * false (default)
   */
  // jsxBracketSameLine: false,
  /**
   * jsxSingleQuote
   * Use single quotes in JSX.
   *
   * Values: boolean
   * false (default)
   */
  // jsxSingleQuote: false,
  /**
   * parser
   * Which parser to use.
   *
   * Values:
   * flow: Flow
   * babel: JavaScript
   * babel-flow: flow
   * typescript: TypeScript
   * css: CSS
   * less: Less
   * scss: SCSS
   * json: JSON
   * json5: JSON5
   * json-stringify: JSON.stringify
   * graphql: GraphQL
   * markdown: Markdown
   * mdx:MDX
   * vue: Vue
   * yaml: YAML
   * html: HTML
   * angular: Angular
   */
  // parser: 'babel',
  /**
   * pluginSearchDirs
   * Custom directory that contains prettier plugins in node_modules subdirectory.\nOverrides default behavior when plugins are searched relatively to the location of Prettier.\nMultiple values are accepted.
   *
   * Values: array
   * [] (default)
   */
  // pluginSearchDirs: [],
  /**
   * plugins
   * Add a plugin. Multiple plugins can be passed as separate `--plugin`s.
   *
   * Values: array
   * [] (default)
   */
  // plugins: [],
  /**
   * printWidth
   * The line length where Prettier will try wrap.
   *
   * Value: integer
   * 80 (default)
   */
  printWidth: 200,
  /**
   * proseWrap
   * How to wrap prose.
   *
   * Values:
   * preserve: (default) Wrap prose as-is.
   * always: Wrap prose if it exceeds the print width.
   * never: Do not wrap prose.
   */
  // proseWrap: 'preserve',
  /**
   * rangeEnd
   * Format code ending at a given character offset (exclusive).\nThe range will extend forwards to the end of the selected statement.\nThis option cannot be used with --cursor-offset.
   *
   * Values: integer
   * null (default)
   */
  // rangeEnd: null,
  /**
   * rangeStart
   * Format code starting at a given character offset.\nThe range will extend backwards to the start of the first line containing the selected statement.\nThis option cannot be used with --cursor-offset.
   *
   * Value: integer
   * 0 (default)
   */
  // rangeStart: 0,
  /**
   * requirePragma
   * Require either '@prettier' or '@format' to be present in the file's first docblock comment\nin order for it to be formatted.
   *
   * Values: boolean
   * false (default)
   */
  // requirePragma: false,
  /**
   * semi
   * Print semicolons.
   *
   * Values: boolean
   * true (default)
   */
  semi: true,
  /**
   * singleQuote
   * Use single quotes instead of double quotes.
   *
   * Values: boolean
   * false (default)
   */
  singleQuote: true,
  /**
   * tabWidth
   * Number of spaces per indentation level.
   *
   * Values: integer
   * 2 (default)
   */
  tabWidth: 2,
  /**
   * trailingComma
   * Print trailing commas wherever possible when multi-line.
   *
   * Values:
   * none: (default) No trailing commas.
   * es5: Trailing commas where valid in ES5 (objects, arrays, etc.)
   * all: Trailing commas wherever possible (including function arguments).
   */
  trailingComma: 'none',
  /**
   * useTabs
   * Indent with tabs instead of spaces.
   *
   * Values: boolean
   * true (default)
   */
  useTabs: false
};
