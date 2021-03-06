# eslint-plugin-ava [![Build Status](https://travis-ci.org/sindresorhus/eslint-plugin-ava.svg?branch=master)](https://travis-ci.org/sindresorhus/eslint-plugin-ava)

> **WIP** - ESLint rules for [AVA](https://github.com/sindresorhus/ava)


## Install

```
$ npm install --save-dev eslint eslint-plugin-ava
```


## Usage

Configure it in package.json.

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"plugins": [
			"ava"
		],
		"rules": {
			"ava/test-ended": 2
		}
	}
}
```


## Rules

The rules will only activate in test files.

- [test-ended](docs/rules/test-ended.md) - Ensure callback tests are explicitly ended.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
