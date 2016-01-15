# JS Starter

This is a template project that has all the configuration basics for creating a
new single page app.

# Basic Structure

`public/`

Static files, including the landing page `index.html`

`src/`

All javascript files. These are bundled through Webpack and output into `public/assets/main.bundle.js`.

# Getting Started

**Clone the Repo**

```
git clone https://github.com/Krustal/js-starter.git
mkdir [project directory]
cd js-starter
git archive master | tar -x -C [project directory]
cd [project directory]
git init
npm install
```

**Customize it**

```
npm init
```

**Run It**

```
npm start
```

or build and host with another server

```
npm run webpack
```
