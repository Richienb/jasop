# Jasop

A `window.open` JavaScript wrapper.

[![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/jasop/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/jasop)
[![CodeFactor Score](https://www.codefactor.io/repository/github/Richienb/jasop/badge?style=for-the-badge)](https://www.codefactor.io/repository/github/Richienb/jasop)

[![NPM](https://nodei.co/npm/jasop.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/jasop)

## Importing

From your NodeJS application:

```js
const Jasop = require("jasop")
```

From your web application:

```html
<script src="https://unpkg.com/jasop/jasop.min.js"></script>
```

## Usage

```js
// Will parse as: window.open("https://example.com", "MyWindow", "height=100,scrollbars=yes,width=200", true)
Jasop(
    "https://example.com", // URL
    {
        height: 100, // You can use any window.open option
        scrollbars: true // Booleans will the parsed
        width: 200, // Everything else will be converted to a string
        title: "MyWindow", // Custom window title
        replace: true // History behaviour
    }
)
```
