# Setting up the Project
### Need to initialize with yarn to create package.json. Then proceeded to add React, ReactDOM, and then Webpack.
* Need to add Webpack before adding babel-core, babel-loader, babel-preset-env, babel-preset-react, and webpack-dev-server.
* If Webpack is not added before these, a warning will be seen as 'has unmet peer dependency webpack@2 || 3'. This is just a warning about not having installed Webpack first.
### Changes need to be made to include CSS. SASS will be used and the following files need to be included to take advantage of SASS features
* css-loader -> loads assets. Takes css and allows it to be used in JS
* style-loader -> takes the JS used to load CSS and allows it to be used as CSS in the DOM
* sass-loader -> allows the import of SASS files
* node-sass -> takes SASS and turns to CSS
* Rule needs to be added to the `webpack-config` file to allow the usage of css
```javascript
  rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      // the code below adds functionality to SASS and CSS
      test: /\.sass$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
```
* Will need to import the style.sass file into app.js to be able to use it
