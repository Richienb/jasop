export default function jasop(url, {target = '', ...options} = {}) {
	return window.open(
		url instanceof URL ? url.href : url,
		target,
		Object
			.entries(options)
			.map(([key, value]) => {
				if (typeof value === 'boolean') {
					return [key, value ? 'yes' : 'no'];
				}

				return [key, value];
			})
			.map(([key, value]) => `${key}=${value}`)
			.join(','),
	);
}
