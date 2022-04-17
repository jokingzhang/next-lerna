module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  rules: {
    'block-no-empty': null,
    'color-hex-length': null,
    'unit-case': null,
    'selector-list-comma-newline-after': null,
    'selector-pseudo-element-colon-notation': null,
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [
      'always',
      {
        ignore: ['stylelint-commands', 'after-comment'],
      },
    ],
    'declaration-colon-space-after': 'always',
    indentation: 2,
    'max-empty-lines': 2,
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'inside-block', 'inside-block-and-after-rule'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extend', 'mixin', 'include', 'for', 'each', 'if', 'else', 'rect', 'svg', 'tailwind', 'layer'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
