<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>Invio</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" /><link rel="icon" href={favicon} />
	<meta name="description" content="Invio is a free, self-hosted invoicing tool without feature bloat. Create invoices, share secure links, and get paid — no subscriptions, no cloud dependencies." />
</svelte:head>
{@render children()}
