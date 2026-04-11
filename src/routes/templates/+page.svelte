<script lang="ts">
	// widgets
	import Navbar from '$lib/widgets/navbar.svelte';
	import Footer from '$lib/widgets/footer.svelte';

	// img
	import templateSvg from '$lib/assets/templ.svg';
</script>

<div class="bg-base-200">
	<Navbar />
	<div class="container mx-auto w-full max-w-2xl justify-center pt-20">
		<h1 class="text-4xl text-center font-bold mb-8">Premium templates <span class="text-primary">coming soon...</span></h1>
		<div class="flex justify-center pb-30 text-info mask-linear-[black,transparent_75%] [&_svg]:h-auto [&_svg]:w-full">
			<div
				aria-label="Template preview"
				role="img"
				class="template-preview h-auto w-full"
				style={`--template-url: url('${templateSvg}');`}
			></div>
		</div>
	</div>
	<Footer />
</div>

<style>
	.template-preview {
		aspect-ratio: 595 / 449;
		background-color: currentColor;
		mask-image: var(--template-url);
		mask-position: center;
		mask-repeat: no-repeat;
		mask-size: contain;
		-webkit-mask-image: var(--template-url);
		-webkit-mask-position: center;
		-webkit-mask-repeat: no-repeat;
		-webkit-mask-size: contain;
	}
</style>
