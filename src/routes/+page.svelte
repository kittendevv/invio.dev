<script lang="ts">
	import Code from '@lucide/svelte/icons/code';

	// widgets
	import Navbar from '$lib/widgets/navbar.svelte';
	import ImageCarousel from '$lib/widgets/image-carousel.svelte';
	import Features from '$lib/widgets/features.svelte';
	import Screenshots from '$lib/widgets/screenshots.svelte';
	import CTA from '$lib/widgets/cta.svelte';
	import Footer from '$lib/widgets/footer.svelte';

	const carouselImages = [
		{
			src: '/invoices/1.png',
			alt: 'Invoice 1'
		},
		{
			src: '/invoices/3.png',
			alt: 'Invoice 2'
		},
		{
			src: '/invoices/2.png',
			alt: 'Invoice 3'
		},
		{
			src: '/invoices/5.png',
			alt: 'Invoice 4'
		},
		{
			src: '/invoices/4.png',
			alt: 'Invoice 5'
		},
		{
			src: '/invoices/7.png',
			alt: 'Invoice 6'
		},
		{
			src: '/invoices/6.png',
			alt: 'Invoice 7'
		},
		{
			src: '/invoices/8.png',
			alt: 'Invoice 8'
		}
	];

	const { data } = $props();
</script>

<div class="bg-base-200">
	<Navbar />

	<div class="bg-base-200">
		<div class="container mx-auto flex w-full max-w-7xl justify-center py-10 md:py-20">
			<div class="text-center">
				<h1 class="text-5xl md:text-6xl font-bold">
					Selfhosted invoicing <span class="text-primary">without the bloat.</span>
				</h1>
				<br />
				<a
					href="https://github.com/kittendevv/Invio"
					target="_blank"
					rel="noopener noreferrer external"
					class="btn btn-primary"
				>
					<Code class="h-5 w-5" />
					View on github
				</a>
				<a
					href="https://demo.invio.dev/"
					target="_blank"
					rel="noopener noreferrer external"
					class="btn btn-ghost"
				>
					Try Demo
				</a>
			</div>
		</div>
	</div>

	<ImageCarousel id="invoices" images={carouselImages} speed={40} class="h-50 md:h-85 lg:h-100" />

	<Features />

	<Screenshots />

	<CTA {data} />

	<Footer />
</div>
