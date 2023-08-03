module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
    browser: true,
    'astro/astro': true,
  },
  extends: [
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-strict',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        // project: './tsconfig.eslint.json',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
};
