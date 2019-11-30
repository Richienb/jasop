# Jasop [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/jasop/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/jasop)

A `window.open` JavaScript wrapper.

[![NPM Badge](https://nodei.co/npm/jasop.png)](https://npmjs.com/package/jasop)

## Install

```sh
npm install jasop
```

## Usage

```js
const jasop = require("jasop");

jasop(
    "https://example.com", // URL
    {
        height: 100, // You can use any window.open option
        scrollbars: true, // Booleans will the parsed
        width: 200, // Everything else will be converted to a string
        top: 100, // Options are polyfilled
        title: "MyWindow", // Custom window title
        replace: true // History behaviour
    }
)
// window.open("https://example.com", "MyWindow", "height=100,scrollbars=yes,width=200,top=100,screenY=100", true)
```

## API

### jasop(url, options?)

#### url

Type: `string (url)`

The URL to open.

#### options

Type: `object`

The options to use. Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Window_features)
