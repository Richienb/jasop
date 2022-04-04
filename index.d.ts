export interface Options {
	/**
	Whether a minimal popup window should be used. The UI is decided by the browser and generally consists of only an address bar.
	*/
	popup?: boolean;

	/**
	The width of the content, including scrollbars. The minimum required value is 100. Causes `popup` to be `true`.
	*/
	width?: number;

	/**
	The width of the content, including scrollbars. The minimum required value is 100. Causes `popup` to be `true`.
	*/
	innerWidth?: number;

	/**
	The height of the content, including scrollbars. The minimum required value is 100. Causes `popup` to be `true`.
	*/
	height?: number;

	/**
	The height of the content, including scrollbars. The minimum required value is 100. Causes `popup` to be `true`.
	*/
	innerHeight?: number;

	/**
	The distance in pixels from the left side of the screen where the new window will be placed. Causes `popup` to be `true`.
	*/
	left?: number;

	/**
	The distance in pixels from the left side of the screen where the new window will be placed. Causes `popup` to be `true`.
	*/
	screenX?: number;

	/**
	The distance in pixels from the top of the screen where the new window will be placed. Causes `popup` to be `true`.
	*/
	top?: number;

	/**
	The distance in pixels from the top of the screen where the new window will be placed. Causes `popup` to be `true`.
	*/
	screenY?: number;

	/**
	Whether `window.opener` in the new window should be removed.
	*/
	noopener?: boolean;

	/**
	Whether the Referer header should be omitted. Causes `noopener` to be `true`.
	*/
	noreferrer?: boolean;

	/**
	The name of the browsing context the resource is being loaded into. Possible values include: `_self`, `_blank`, `_parent`, and `_top`.
	*/
	target?: string;
}

/**
Human-friendly `window.open`.

@param url The URL to open.
@param options The options to use. Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Window_features)

@example
```
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
*/
export default function jasop(url: string | URL, options?: Options): WindowProxy;
