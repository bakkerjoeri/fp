# fp

## Installation

```bash
npm install @bakkerjoeri/fp
```

## Usage



### `compose`

Returns a composed function:

```ts
import { compose } from '@bakkerjoeri/fp';

const timesTwo = (a: number) => {
	return a * 2;
};

const plusTwo = (a: number) => {
	return a + 2;
};

const result = compose(timesTwo, plusTwo)(2) // => 8
```

### `pipe`

Returns a piped function:

```ts
import { pipe } from '@bakkerjoeri/fp';

const timesTwo = (a: number) => {
	return a * 2;
};

const plusTwo = (a: number) => {
	return a + 2;
};

const result = pipe(timesTwo, plusTwo)(2) // => 6
```
