import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'development',
  context: path.resolve(__dirname, "src"),
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.scss$/, use: [
        {
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
        }
      ]},
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader?outputPath=img/',
            options: {
              limit: '1024',
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};

export default config;