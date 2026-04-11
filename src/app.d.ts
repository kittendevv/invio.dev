// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module '*.svg?component' {
	import type { Component } from 'svelte';

	const SvgComponent: Component<Record<string, unknown>>;
	export default SvgComponent;
}

declare module '$lib/assets/templ.svg?component' {
	import type { Component } from 'svelte';

	const SvgComponent: Component<Record<string, unknown>>;
	export default SvgComponent;
}

export {};
