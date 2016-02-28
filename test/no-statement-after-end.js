import test from 'ava';
import {RuleTester} from 'eslint';
import rule from '../rules/no-statement-after-end';

const ruleTester = new RuleTester({
	env: {
		es6: true
	}
});

const errors = [{ruleId: 'no-statement-after-end'}];
const header = `const test = require('ava');\n`;

test.cb(() => {
	ruleTester.run('no-statement-after-end', rule, {
		valid: [
			header + 'test.cb(function (t) { t.end(); });',
			header + 'test.cb(function (t) { t.is(1, 1); t.end(); });',
			header + 'test.cb(function (t) { notT.end(); t.is(1, 1); });',
			header + 'test.cb(function (t) { if (t.context.a === 1) { return t.end(); }\nt.is(1, 1); t.end(); });',
			// shouldn't be triggered since it's not a test file
			'test.cb(function (t) { t.end(); t.is(1, 1); });',
		],
		invalid: [
			{
				code: header + 'test.cb(function (t) { t.end(); t.is(1, 1); });',
				errors
			},
			{
				code: header + 'test.cb(function (t) { t.end.skip(); t.is(1, 1); });',
				errors
			},
			{
				code: header + 'test.cb(function (t) { t.end(); return; });',
				errors
			},
			{
				code: header + 'test.cb(function (t) { t.end(); console.log("end"); });',
				errors
			},
			{
				code: header + 'test.cb(function (t) { if (t.context.a === 1) { t.end(); }\nt.is(1, 1); t.end(); });',
				errors
			}
		]
	});
});
