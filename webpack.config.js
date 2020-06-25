import path from 'path';

module.exports = {
  entry: path.resolve(__dirname, './src/main.ts'),
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          // Vueをtypescriptとして扱う
          appendTsSuffixTo: [/\.vue/],
          transpileOnly: true, // 型チェックしない！！！
        },
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        },
      },
    ],
  },
};
