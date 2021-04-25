# Twinkle CSS

This repo allows you to generate Tailwind CSS' JIT build - which enables many features - without being forced to use NPM in each of your project.

#### Specify paths to your HTML/template files for real-time purging
Modify `purge` option in `tailwind.config.js`

#### Change output file location
Modify `css:build` and `css:watch` scripts in `package.json`

#### To start the JIT build in watcher mode:
`npm run css:watch`

#### For a one-time build:
`npm run css:build`

This will produce `twinkle.min.css` which will be purged as per tailwind.config.js and minified by cssnano.