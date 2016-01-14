# Todo App using React Redux Webpack

Yet another Todo app using React Redux and Webpack. 

The content is based on the example in the 
[great Redux tutorial by Dan Abramov](https://egghead.io/series/getting-started-with-redux).

The aim here was to keep it *really* simple to get started with these technologies.

## Deps

    npm install

This repository is meant to be used with npm 3. For version 2 also install:

    npm install --save-dev babel-plugin-transform-object-rest-spread
    npm install --save-dev babel-plugin-transform-class-properties

## Build

    node_modules/.bin/webpack

## Dev

    node_modules/.bin/webpack-dev-server --hot --inline
