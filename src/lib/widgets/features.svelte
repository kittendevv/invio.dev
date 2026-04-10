<script lang="ts">
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import Server from '@lucide/svelte/icons/server';
	import Handshake from '@lucide/svelte/icons/handshake';
	import BadgeDollarSign from '@lucide/svelte/icons/badge-dollar-sign';

	// component
	import FeatureCard from '$lib/components/feature-card.svelte';

	const features = [
		{
			title: 'PDF Export'
		},
		{
			title: 'Rich Invoice Status'
		},
		{
			title: 'Custom Brand Color'
		},
		{
			title: 'HTML Invoice Templates'
		},
		{
			title: 'Secure By Default'
		},
		{
			title: 'Brute Force Protection'
		},
		{
			title: 'Reverse Proxy Ready'
		},
		{
			title: 'Open Source'
		}
	];
</script>

<h1 class="text-center text-4xl font-bold">Why Invio?</h1>

<div class="container mx-auto w-full max-w-7xl justify-center py-5">
	<!-- Highlighted features -->
	<div class="grid grid-cols-5 items-stretch justify-center gap-4">
		<div class="card col-span-2 bg-secondary text-secondary-content">
			<div class="card-body">
				<h2 class="card-title flex items-center gap-2">
					<Sparkles class="h-5 w-5" aria-hidden="true" />
					Zero Bloat
				</h2>
				<p>
					Create an invoice, share a link, get paid. No menus to dig through, no setup wizards, no
					fluff.
				</p>
			</div>
		</div>
		<div class="card col-span-3 bg-primary text-primary-content">
			<div class="card-body">
				<h2 class="card-title flex items-center gap-2">
					<Server class="h-5 w-5" aria-hidden="true" />
					Fully Selfhosted
				</h2>
				<p>
					Your data, stays your data. Host it on your own hardware and never worry about what
					happens when a SaaS company changes its pricing or shuts down.
				</p>
			</div>
		</div>
		<div class="card col-span-3 bg-success text-success-content">
			<div class="card-body">
				<h2 class="card-title flex items-center gap-2">
					<Handshake class="h-5 w-5" aria-hidden="true" />
					Client Friendly
				</h2>
				<p>Skip the 'how do I log in?' emails. Just send a secure link, no account needed.</p>
			</div>
		</div>
		<div class="card col-span-2 bg-info text-info-content">
			<div class="card-body">
				<h2 class="card-title flex items-center gap-2">
					<BadgeDollarSign class="h-5 w-5" aria-hidden="true" />
					Free. Forever.
				</h2>
				<p>
					No subscription, no per-invoice charges, no hidden fees. Invio is fully free and open
					source. Good tools shouldn't cost a fortune.
				</p>
			</div>
		</div>
	</div>
	<!-- All features -->
	<div class="grid grid-cols-4 items-stretch justify-center gap-2 pt-5">
		{#each features as item}
			<FeatureCard feature={item} />
		{/each}
	</div>
</div>
