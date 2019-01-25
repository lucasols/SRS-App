module.exports = {
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 8,
    'ecmaFeatures': {
      'jsx': true,
    },
    'useJSXTextNode': true,
    'sourceType': 'module',
    'codeFrame': false
  },
  'env': {
    'browser': true,
  },
  'plugins': [
    '@typescript-eslint',
    'react',
    'react-hooks',
  ],
  'globals': {
    'mapboxgl': true,
  },
  'rules': {
    'implicit-arrow-linebreak': 0,
    'arrow-body-style': ['error', 'as-needed', { 'requireReturnForObjectLiteral': false }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'no-bitwise': 0,
    'no-param-reassign': ['error', { 'props': false }],
    'no-multi-assign': 0,
    'no-plusplus': 0,
    'no-use-before-define': ['error', { 'functions': false }],
    'curly': 0,
    'no-console': 0,
    'no-nested-ternary': 0,
    'no-continue': 0,
    'no-mixed-operators': [
      'error',
      {
        'groups': [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
            ['in', 'instanceof']
          ],
        'allowSamePrecedence': true
      }
    ],
    'no-cond-assign': ['error', 'except-parens'],
    'max-len': 0,
    'no-underscore-dangle': 0,
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 7, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 7, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
    'quotes': 0,
    'function-paren-newline': 0,
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none', '&&': 'ignore' } }],

    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/first': 0,
    'import/prefer-default-export': 0,

    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render'
      ],
    }],
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 1,
    'react/prop-types': 0,
    'react/no-array-index-key': 0, // disabled because no need for reorder the items
    'react/jsx-key': 2,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'ignore',
      prop: 'parens-new-line',
    }],

    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/click-events-have-key-events': 0,

    // 'babel/quotes': ['error', 'single', { 'allowTemplateLiterals': true }],

    'react-hooks/rules-of-hooks': 'error',

    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
  'extends': ['airbnb', 'plugin:@typescript-eslint/recommended']
}
