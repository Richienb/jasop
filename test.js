import {test} from 'uvu';
import {equal} from 'uvu/assert'; // eslint-disable-line node/file-extension-in-import
import {getProperty, setProperty} from 'dot-prop';
import jasop from './index.js';

function testJasop(...arguments_) {
	let calledArguments;

	const previousValue = getProperty(globalThis, 'window.open');

	setProperty(globalThis, 'window.open', (...arguments_) => {
		calledArguments = arguments_;
	});

	jasop(...arguments_);

	setProperty(globalThis, 'window.open', previousValue);

	return calledArguments;
}

test('main', () => {
	equal(testJasop(
		'https://example.com',
		{
			height: 100,
			scrollbars: true,
			width: 200,
		},
	), ['https://example.com', '', 'height=100,scrollbars=yes,width=200']);
});

test.run();
