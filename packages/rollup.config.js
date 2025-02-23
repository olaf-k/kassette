const path = require('path');
const pkg = require('../package.json');
const dependencies = Object.keys(pkg.dependencies);
const typescript = require('@rollup/plugin-typescript');

export default [
  {
    output: [
      {
        file: path.join(__dirname, '../dist/index.js'),
        format: 'cjs',
      },
    ],
    input: path.join(__dirname, './index.ts'),
    external: dependencies.concat([
      'crypto',
      'fs',
      'http',
      'https',
      'net',
      'path',
      'perf_hooks',
      'tls',
      'url',
    ]),
    plugins: [
      typescript({
        tsconfig: path.join(__dirname, 'tsconfig.rollup.json'),
      }),
    ],
  },
  {
    output: [
      {
        file: path.join(__dirname, '../dist/cli/index.js'),
        format: 'cjs',
      },
    ],
    input: path.join(__dirname, './cli/index.ts'),
    external: dependencies.concat(['..']),
    plugins: [
      typescript({
        tsconfig: path.join(__dirname, 'tsconfig.rollup.json'),
      }),
    ],
  },
];
