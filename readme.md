# jasop

Human-friendly `window.open`.

## Install

```sh
npm install jasop
```

## Usage

```js
import jasop from 'jasop';

jasop(
    'https://example.com', // URL
    {
        height: 100, // You can use any window.open option
        scrollbars: true, // Booleans will the parsed
        width: 200, // Everything else will be converted to a string
    }
);
// window.open('https://example.com', 'MyWindow', 'height=100,scrollbars=yes,width=200,top=100', true);
```

## API

### jasop(url, options?)

#### url

Type: `string | URL`

The URL to open.

#### options

Type: `object`

The options to use. Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Window_features)
