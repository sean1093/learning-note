# React with webpack and babel

## Initial Project

建立一個空專案並且產生 package.json

```sh
mkdir myapp
cd myapp
npm init -y
```

* npm init 使用 -y 可以略過所有問題

## Install Webpack, React and Babel

<strong>Install Webpack</strong>

```sh
npm i webpack@4 webpack-cli@3 -D
```

* -D: -save-dev

<strong>Install React</strong>

```sh
npm i react@16 react-dom@16 -S
```

* -S: --save

<strong>Install Babel</strong>

```sh
npm i babel-loader@8 @babel/core @babel/preset-env @babel/preset-react -D
```

<strong>Install html-webpack-plugin</strong>

```sh
npm i html-webpack-plugin -D
```

並修改 package.json

```json
    ...
  "scripts": {
    "start": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production"
  },
    ...
```

<strong>Install css-loader and style-loader</strong>

```sh
npm i css-loader style-loader -D
```

## 建立 webpack.config.js 與 .babelrc

<strong>webpack.config.js</strong>

```js
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
```

<strong>.babelrc</strong>

```json
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```