import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: {
    file: '@korzio/djv-draft-04.js',
    format: 'umd',
    name: 'djvDraft04',
    sourcemap: true
  },
  plugins: [
    babel({
      babelrc: false,
      presets: [['env', { modules: false }]]
    })
  ]
}
