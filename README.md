# Simple Redux Boilerplate

A simple, yet comprehensive React + Redux application, complete with DevTools.

Maintainer: Edward D. Gaudio - [edg.audio](http:edg.audio.com)

*Feel free to contribute!  Just make a pr and issue with your suggestions/changes*

***

### Overview

This is the perfect way to start any React + Redux application - **especially if you're looking for a middle-ground**. Minimize bulk and overhead - and get the exact amount of tools and configuration necessary to hit the ground running!

Designed to keep style/structure as un-opinionated as possible,  to offer you - the user - as much creativity and flexibility when it comes to your needs. As this is stil a **work-in-progress**, do reach out if you have suggestions, fixes, etc!

If you found this helpful, please star/fork/follow me on **[GitHub](https://github.com/edwardgaudio/)** and follow me on **[Twitter](https://twitter.com/tftsai)**!

### Features

##### Basic:
  - React + Redux
  - Babel 6 w/ basic presets and transform
  - Webpack w/ basic dev and prod configurations
  - Express development server; easily roll out a production enabled server of your own
  - Sequelize for MySQL or PostGres usage
  - Eslint w/ basic configs
  - Redux DevTools + Logger middleware - easily removable/replaceable based on your needs

***

### Requirements
  - `node 6.8.0` and higher!
  - postgres or mysql database
***

### FAQ

  - Why another React and Redux boilerplate?
  > There are tons of great boilerplates out there, some of them with some pretty advanced functionality! But they aren't good for learning the holistic approach of getting a React/Redux app up and running. I wanted to create a boilerplate that would encourage and help the user learn how everything is set up, from Babel and Webpack through conditional requires and giving them the DevTools they need!

  - Why not use WebpackDevServer?
  > The included `devServer.js` is a Node/Express server - mainly because most people will end up creating applications that rely on a Node server! Using the `webpack-dev-middleware` and `webpack-hot-middleware` allow us to get syntax errors displayed in an overlay, which using WebpackDevServer doesn't allow for.

### Usage

##### Getting Started:

To begin, fork this repo and then clone those contents down!

Install required dependencies.
(*Did you make sure you have the right version of Node?*)
```
npm install
```

Run development server, complete with DevTools and related configuration.
```
npm run dev
```

You're now ready to get working! *(enter command or visit via browser directly)*
```
open http://localhost:3000/
```

***

##### Next Steps & Other Notes:

Now that your development server is up and running, you will see that you have your Redux DevTools available for you to use. The keyboard shortcuts available follow the generally accepted config - but you're free to make changes to them here: `containers/DevTools.js`.

***To toggle the DevTool panel during development:***
<kbd>CTRL</kbd> + <kbd>H</kbd>

***Change the DevTool panel's position during development:***
<kbd>CTRL</kbd> + <kbd>Q</kbd>

***

### Style Guide

Code style can be a tricky subject - I've instead decided to rely on the ever trustworthy configurations that AirBnb follows!

This project relies on `eslint-config-airbnb`.
Learn more here: [AirBnb Style Guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

***

### Credits

##### Contributions:

>This boilerplate was initially based on [simple-redux-boilerplate](https://github.com/tsaiDavid/simple-redux-boilerplate). by
[@tsaiDavid](https://github.com/tsaiDavid/)

>Which was in turn based initially on [@gaeron's](https://github.com/gaeron) awesome [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate).

This project supports [Babel 6](https://github.com/babel/babel), with reference implementations of:

 **[babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform)**. It can be used as a boilerplate for quickly getting a new project up and running with a few useful transforms:

* [**react-transform-hmr**](https://github.com/gaearon/react-transform-hmr) - enables hot reloading react components
* [**react-transform-catch-errors**](https://github.com/gaearon/react-transform-catch-errors) - catches errors inside `render()`

For convenience they are packed in a single preset called [**react-transform-hmre**](https://github.com/danmartinez101/babel-preset-react-hmre) but you can make your own.

Syntax errors are displayed in an overlay using **[@glenjamin](https://github.com/glenjamin)**’s **[webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)**, which replaces Webpack Dev Server. This project **[does not](https://medium.com/@dan_abramov/the-death-of-react-hot-loader-765fa791d7c4)** use React Hot Loader.
