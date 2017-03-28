# Choices

This project is set up from scratch using the latest and greatest versions of repositories that are available.

## Info

To run the project after running `yarn` or `npm install` just run `npm run dev` and visit it at `localhost:4000`. 

Note the port number, as you will see responses at port `3000` as well, pages here will give you an error however, since js in dev mode is served from `webpack-dev-server` which proxies page from `3000` and serves at `4000`.

## TODO:

* Add more stuff, everything seems to work.
* AsyncRoute makes page re-render on initial page load since promise isn't resolved. Does seem to be the way it's done currently though.
* Css which is not wrapped in routes can't be processed by the server when running npm run dev. Thus you can either use ignore-styles and just get a server-client mismatch warning, or don't use style imports on components used before System.import in routes.

## Production build

Delete source maps from `/build` before deploying to production server!

### Deployment

To deploy run `npm run build` in a folder with all dependencies installed and then copy the following files to a new folder:

* `/build`
* `/static`
* `index.html`

From here you have two options. 

#### Running production server directly

* Set environment variable `NODE_ENV` to `production`
* `node build/prodserverbundle.js`

#### Using npm commands with cross-env

* Copy `package.json` along with the other files listed under deployment.
* `npm install --production` or `yarn --production` - Installs `cross-env` to set environment variable
* `npm start` - starts the production server, no need to have configured environment variables.

#### Running deployment mode locally

If you want to test the server in production mode while developing you can do the following

* `npm run build` - Clears build folder
* `npm start` -  starts the prod server with `NODE_ENV=production` with `cross-env`

## Wallaby.js

The wallaby.js file on root is a config file for wallaby.js test runner. They provide a plugin for all major code editors, in which you select the wallaby js config files and it will continuously run your tests for you. With a trial license you will be limited in the time you can run the tests without restarting the editor. You don't need to run wallaby to code though, however, please run all tests before commiting.

## Packages

### Dependencies

* cross-env - Platform independent way to set environment variables through cli. Used in package.json commands. Used to start production server as well, that's why it is not in devdependencies.

### DevDependencies

* express - We use an express server to serve the app. See server.js file for usage.
* lodash - Used for templating for server side rendering.
* react - React is the framework we use for our app.
* react-dom - Necessary dependency for react. Used directly in server side rendering.
* react-redux - Supplies helper functions and bindings between redux and react, see redux.
* react-router-dom - This is react-router v4, gives us routing between pages with history etc.
* redux - We use redux for application state handling.
* redux-saga - Supplies a way to handle asynchronous actions for redux. Basically replacement for redux-thunk. Easier to test, easier to see side effects.
* babel-cli - Part of babel files, enables cli usage
* babel-core - Core files required to run babel
* babel-loader - Webpack loader for babel
* babel-polyfill - Polyfill for newer features, installed for generators for redux-saga. Used in all webpack config files in entry points before first code file.
* babel-preset-es2015 - Preset for es2015 features for babel
* babel-preset-react - Preset for react features for babel
* chai - Assertion library for tests
* concurrently - Used to simplify package.json commands, can run several commands simultaneously.
* css-loader - Css loader for webpack
* enzyme - A test framework that can "render" react components without needing a browser
* eslint - Checks that your code follows set styleguides.
* eslint-config-airbnb - Widely used preset styleguide for eslint, using this as base for our eslint checks.
* eslint-plugin-import - Dependency of eslint-config-airbnb preset.
* eslint-plugin-jsx-a11y - Dependency of eslint-config-airbnb preset.
* eslint-plugin-react - Dependency of eslint-config-airbnb preset.
* extract-text-webpack-plugin - Plugin used to extract styles into a separate css file when building with webpack for production.
* mocha - Test runner, used to run tests directly, wallaby uses this as well.
* node-noop - Used as a non-platform-specific noop, installed for wallaby tests to use as loader for files walalby shouldnt try to parse.
* node-sass - Necessary for sass-loader to compile scss files.
* path - Used to get correct paths for files where necessary.
* react-addons-test-utils - Installed when setting up wallaby tests, used to test react components
* react-hot-loader - Enables hot reloading of our app in dev mode.
* rimraf - Used to delete build folder content regardless of platform for build script in package.json.
* sass-loader - Webpack loader for scss files
* style-loader - Webpack loader for processed style files.
* wallaby-webpack - Webpack tool for wallaby to parse es6 files etc.
* webpack - Webpack 2 is used to pack the app, which means to compile our application into code that can be run on the server and browser. Handles running code through babel, various loaders, etc.
* webpack-dev-server - Used when running in dev mode, to enable hot reloading.


## Eslint rules

The eslint rules extend airbnb, which is a popular eslint preset. We have made some modifications, which are explained here.

* linebreak-style - We have turned of checks for linebreak style. Commit unix style endings with git, though.
* jsx-quotes - We prefer single quotes everywhere, while the default was double in jsx code.
* comma-dangle - Seems unnecessary in functions.
* react/jsx-filename-extension - We use .js for all code files, don't report error when using jsx code in .js file.
* import/no-extraneous-dependencies - Imports can now be made from devDependencies as well.
* no-underscore-dangle - Disabled, because the redux devtools extension has underscore dangle. We never use this elsewhere.
* global-require - We need require inside code at places for hot reloading, thus can't enforce requires to be in top of file.


## Editor config

Editor config rules are the same as in the official react project editorconfig, just to help keep code uniformity and respect eslint rules.
