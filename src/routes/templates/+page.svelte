<script lang="ts">
	// widgets
	import Navbar from '$lib/widgets/navbar.svelte';
	import Footer from '$lib/widgets/footer.svelte';

    // img
	import Template from '$lib/assets/templ.svg?raw';
</script>

<div class="bg-base-200">
	<Navbar />
	<div class="container mx-auto w-full max-w-2xl justify-center pt-20">
        <h1 class="text-4xl text-center font-bold">Premium templates <span class="text-primary">coming soon...</span></h1>
        <div class="flex justify-center pb-30 text-info mask-linear-[black,transparent_75%]">
            {@html Template}
        </div>
	</div>
	<Footer />
</div>
