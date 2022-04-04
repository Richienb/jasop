import {expectType} from 'tsd';
import jasop, {Options} from './index.js';

const options: Options = {
	height: 100,
	noreferrer: true,
	width: 200,
	target: 'MyWindow',
};

expectType<WindowProxy>(jasop('https://example.com', options));
