<script lang="ts">
	import Rocket from '@lucide/svelte/icons/rocket';
	import Star from '@lucide/svelte/icons/star';
	import Download from '@lucide/svelte/icons/download';

	let { data } = $props();
	const downloads = () => data?.item?.['invio-package-downloads']?.formatted ?? '0';
	const stars = () => data?.item?.['invio-stars']?.formatted ?? '0';
</script>

<div class="container mx-auto flex w-full max-w-7xl justify-center py-5">
	<div class="card">
		<div class="card-body">
			<h1 class="card-title text-4xl font-bold">Just invoicing, nothing else.</h1>
			<div class="mt-2 flex justify-center">
				<Star />
				<h2 class="ml-1 text-xl">{stars()}</h2>
				<Download class="ml-4" />
				<h2 class="ml-1 text-xl">{downloads()}</h2>
			</div>
			<div class="card-actions justify-center py-4">
				<button class="btn btn-primary">
					<Rocket />
					Quick Start
				</button>
				<button class="btn btn-ghost">Try Demo</button>
			</div>
		</div>
	</div>
</div>
