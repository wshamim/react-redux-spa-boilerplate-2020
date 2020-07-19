# React Redux Webpack Babel Boilerplate for SPA (2020 Edition)
> A simple boilerplate with React, Redux, redux-thunk, eslint, webpack, loadable-components, react-router, jest

* **[React](https://facebook.github.io/react/)** (16.x)
* **[Redux](https://redux.js.org/)** (4.x)
* **[Webpack](https://webpack.js.org/)** (4.x)
* **[React Hot Loader](https://github.com/gaearon/react-hot-loader)** (4.x)
* **[Babel](http://babeljs.io/)** (7.x)
* **[React Router](https://github.com/ReactTraining/react-router#readme)** (5.x)
* **[@loadable/component](https://github.com/gregberge/loadable-components#readme)** - The recommended Code Splitting library for React
* [Brotli/Gzip Compression](https://github.com/webpack-contrib/compression-webpack-plugin) - Productions assets also compile to *.br and *.gz files
* [SASS/SCSS](http://sass-lang.com/)
* [Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader)
* [SVGR](https://react-svgr.com/) - Transform SVGs into React components.
* [Prettier](https://github.com/prettier/prettier)
* [ESLint](https://eslint.org/)
* [Jest](https://facebook.github.io/jest/)

## Installation
1. Clone/download repo
2. `yarn install` (or `npm install` for npm)

## Usage
**Development**

`yarn run dev`

* Build app continously (HMR enabled)
* App served @ `http://localhost:3000`

**Production**

`yarn run start`

* Build app once (HMR disabled) to `/dist/`
* App served @ `http://localhost:8080`

---

**All commands**

Command | Description
--- | ---
`yarn run dev` | Build app continously (HMR enabled) and serve @ `http://localhost:3000`
`yarn run start` | Build app once (HMR disabled) to `/dist/` and serve @ `http://localhost:8080`
`yarn run build` | Build app to `/dist/`
`yarn run serve` | Serve app from `/dist/` @ `http://localhost:8080`
`yarn run test` | Run tests
`yarn run lint` | Fix syntax errors using `ESlint`
`yarn run fix-code` | Fix the code using `Prettier` then run `ESLint` afterwards to fix syntax

## See Also
* [React Webpack Babel Starter](https://github.com/vikpe/react-webpack-babel-starter)