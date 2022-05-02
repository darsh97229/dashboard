module.exports = {
  resolve: {
    fallback: {"crypto": require.resolve("crypto-browserify")},
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};