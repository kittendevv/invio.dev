<script lang="ts">
	type CarouselImage = {
		src: string;
		alt?: string;
		width?: number;
		height?: number;
	};

	let {
		id,
		images = [],
		speed = 40,
		maxHeight = 420
	}: {
		id?: string;
		images?: CarouselImage[];
		speed?: number;
		maxHeight?: number | string;
	} = $props();

	let resolvedMaxHeight = $derived(typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight);
</script>

<section class="relative overflow-hidden py-16" {id}>
	<div class="edge-cover pointer-events-none absolute top-0 left-0 z-20 bg-base-200"></div>
	<div class="edge-cover pointer-events-none absolute top-0 right-0 z-20 bg-base-200"></div>

	<div
		class="fade-edge pointer-events-none absolute top-0 z-10 bg-gradient-to-r from-base-200 to-transparent"
		style="left: var(--edge-inset);"
	></div>
	<div
		class="fade-edge pointer-events-none absolute top-0 z-10 bg-gradient-to-l from-base-200 to-transparent"
		style="right: var(--edge-inset);"
	></div>

	<div class="carousel-wrapper">
		<div
			class="carousel-container"
			style={`--scroll-speed: ${speed}s; --carousel-max-height: ${resolvedMaxHeight};`}
		>
			<div class="carousel-track animate-scroll">
				{#each images as img}
					<div class="carousel-item">
						<img
							class="invoice-img rounded-lg bg-white object-contain shadow-md"
							src={img.src}
							alt={img.alt || 'Invoice preview'}
							width={img.width ?? 297.75}
							height={img.height ?? 421.125}
							loading="lazy"
						/>
					</div>
				{/each}
			</div>

			<div class="carousel-track animate-scroll" aria-hidden="true">
				{#each images as img}
					<div class="carousel-item">
						<img
							class="invoice-img rounded-lg bg-white object-contain shadow-md"
							src={img.src}
							alt=""
							width={img.width ?? 297.75}
							height={img.height ?? 421.125}
							loading="lazy"
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	section {
		--edge-inset: clamp(12px, 5vw, 50px);
		--fade-width: clamp(60px, 10vw, 180px);
	}

	@media (min-width: 1024px) {
		section {
			--edge-inset: clamp(64px, 8vw, 140px);
			--fade-width: clamp(90px, 12vw, 240px);
		}
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}

	.animate-scroll {
		animation: scroll var(--scroll-speed) linear infinite;
	}

	section:hover .animate-scroll {
		animation-play-state: paused;
	}

	.carousel-wrapper {
		overflow: visible;
		width: 100%;
	}

	.carousel-container {
		display: flex;
		width: fit-content;
		overflow: visible;
	}

	.carousel-track {
		display: flex;
		flex-shrink: 0;
		overflow: visible;
	}

	.carousel-item {
		flex: 0 0 auto;
		padding-inline: clamp(0.5rem, 1vw, 1rem);
		overflow: visible;
		position: relative;
	}

	.invoice-img {
		height: var(--carousel-max-height);
		width: auto;
		max-width: none;
		transition:
			transform 0.18s cubic-bezier(0.6, 0.2, 0.3, 1),
			box-shadow 0.18s cubic-bezier(0.6, 0.2, 0.3, 1);
		will-change: transform;
		z-index: 0;
		display: block;
	}

	.invoice-img:hover {
		transform: scale(1.055);
		z-index: 2;
		box-shadow: 0 2px 24px 0 rgb(0 0 0 / 0.18);
	}

	.fade-edge {
		width: var(--fade-width);
		height: 100%;
		pointer-events: none;
	}

	.edge-cover {
		width: var(--edge-inset);
		height: 100%;
	}
</style>
