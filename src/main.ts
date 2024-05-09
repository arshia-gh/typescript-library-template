export function LogHello(name?: string) {
	console.log(`Hello, ${name ?? 'World'}`);
}

export function Add(a: number, b: number) {
	return a + b;
}

export function Sub(a: number, b: number) {
	return a - b;
}
