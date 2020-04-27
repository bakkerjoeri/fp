import { pipe } from './../src/pipe';

describe('pipe', () => {
	test('pipes functions', () => {
		const timesTwo = (a: number) => {
			return a * 2;
		};

		const plusTwo = (a: number) => {
			return a + 2;
		};

		expect(pipe(timesTwo, plusTwo)(2)).toBe(6);
	});
});
