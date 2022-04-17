module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 120,
  jsxSingleQuote: true,
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
};
