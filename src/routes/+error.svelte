<script lang="ts">
	import Home from '@lucide/svelte/icons/home';

	import Navbar from '$lib/widgets/navbar.svelte';
    import Footer from '$lib/widgets/footer.svelte';
    import { page } from '$app/state';
    import { resolve } from '$app/paths';
</script>

{#if page.status === 404}

<div class="bg-base-200">
	<Navbar />
	<div class="container mx-auto flex w-full max-w-7xl justify-center py-8 min-h-[75vh]">
		<div class="text-center">
			<h1 class="text-9xl font-black text-primary">404</h1>
			<h1 class="text-4xl font-bold">Page Not Found</h1>
            <a
					href={resolve('/')}
					class="btn btn-primary mt-8"
				>
					<Home class="h-5 w-5" />
					Go to home
				</a>
		</div>
	</div>
	<Footer />
</div>

{:else}

<div class="bg-base-200">
	<Navbar />
	<div class="container mx-auto flex w-full max-w-7xl justify-center py-8 min-h-[75vh]">
		<div class="text-center">
        	<h1 class="text-4xl font-bold">An error occured</h1>
			<h1 class="text-9xl font-black text-primary">{page.status}</h1>
		</div>
	</div>
	<Footer />
</div>

{/if}