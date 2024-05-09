import { afterAll, it, expect, vi, describe } from 'vitest';
import { Add, LogHello, Mul, Sub } from 'src/main';

describe('LogHello', () => {
	const consoleMock = vi
		.spyOn(console, 'log')
		.mockImplementation(() => undefined);

	afterAll(() => {
		consoleMock.mockReset();
	});

	it('should log `Hello, World`', () => {
		LogHello();
		expect(consoleMock).toHaveBeenCalledOnce();
		expect(consoleMock).toHaveBeenLastCalledWith('Hello, World');
	});
});

describe('Add', () => {
	it('should add two numbers', () => {
		expect(Add(1, 2)).toBe(3);
	});
});

describe('Sub', () => {
	it('should subtract two numbers', () => {
		expect(Sub(1, 2)).toBe(-1);
	});
});

describe('Mul', () => {
	it('should multiply two numbers', () => {
		expect(Mul(5, 4)).toBe(20);
	});
});
