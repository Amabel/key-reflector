import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import changeCase from 'change-case'
import pkg from './package.json'

const banner = require('./shared/banner')

const name = changeCase.pascalCase(pkg.name)
const input = 'src/index.js'

const getBabelOptions = ({ useESModules }) => ({
  exclude: /node_modules/,
  runtimeHelpers: true,
  plugins: [['@babel/transform-runtime', { useESModules }]]
})

export default [
  {
    input,
    output: {
      banner,
      name,
      file: pkg.main,
      format: 'umd'
    },
    plugins: [babel(getBabelOptions({ useESModules: true })), nodeResolve()]
  },
  {
    input,
    output: {
      banner,
      name,
      file: pkg.unpkg,
      format: 'umd'
    },
    plugins: [babel(getBabelOptions({ useESModules: true })), nodeResolve(), terser()]
  },
  {
    input,
    output: {
      banner,
      name,
      file: pkg.module,
      format: 'esm'
    },
    plugins: [babel(getBabelOptions({ useESModules: true }))]
  }
]
