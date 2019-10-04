import nodeResolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import changeCase from 'change-case'
import pkg from './package.json'

const banner = require('./shared/banner')

const name = changeCase.pascalCase(pkg.name)
const input = 'src/index.js'

export default [
  {
    input,
    output: {
      banner,
      name,
      file: pkg.main,
      format: 'umd',
    },
    plugins: [nodeResolve()],
  },
  {
    input,
    output: {
      banner,
      name,
      file: pkg.unpkg,
      format: 'umd',
    },
    plugins: [nodeResolve(), terser()],
  },
  {
    input,
    output: {
      banner,
      name,
      file: pkg.module,
      format: 'esm',
    },
    plugins: [nodeResolve()],
  },
]
