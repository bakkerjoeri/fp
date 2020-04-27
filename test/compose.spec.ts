import { compose } from './../src/compose';

describe('compose', () => {
	test('composes functions', () => {
		const timesTwo = (a: number) => {
			return a * 2;
		};

		const plusTwo = (a: number) => {
			return a + 2;
		};

		expect(compose(timesTwo, plusTwo)(2)).toBe(8);
	});
});
