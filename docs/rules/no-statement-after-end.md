# Ensure no statements are present after `t.end()`

`t.end()` should mark the end of your test, and should not be followed by other statements.


## Fail

```js
import test from 'ava';

test.cb(t => {
	t.end();
	t.is(1, 1);
});

test.cb(t => {
	t.end();
	console.log('at the end');
});
```


## Pass

```js
import test from 'ava';

test.cb(t => {
	t.is(1, 1);
	t.end();
});
import test from 'ava';

test.cb(t => {
	if (a) {
		return t.end();
	}
	t.is(1, 1);
	t.end();
});
```
