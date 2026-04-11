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
		class: className = 'h-105'
	}: {
		id?: string;
		images?: CarouselImage[];
		speed?: number;
		class?: string;
	} = $props();
</script>

<section class="relative overflow-x-hidden my-4 md:my-16" {id}>
	<div class="edge-cover pointer-events-none absolute top-0 left-0 z-20 bg-base-200"></div>
	<div class="edge-cover pointer-events-none absolute top-0 right-0 z-20 bg-base-200"></div>

	<div
		class="fade-edge pointer-events-none absolute top-0 z-10 bg-linear-to-r from-base-200 to-transparent"
		style="left: var(--edge-inset);"
	></div>
	<div
		class="fade-edge pointer-events-none absolute top-0 z-10 bg-linear-to-l from-base-200 to-transparent"
		style="right: var(--edge-inset);"
	></div>

	<div class="carousel-wrapper">
		<div class="carousel-container" style={`--scroll-speed: ${speed}s;`}>
			<div class="carousel-track animate-scroll">
				{#each images as img, i (img.src + '-' + i)}
					<div class="carousel-item">
						<img
							class={`invoice-img ${className} rounded-lg bg-white object-contain shadow-md`}
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
				{#each images as img, i (img.src + '-dup-' + i)}
					<div class="carousel-item">
						<img
							class={`invoice-img ${className} rounded-lg bg-white object-contain shadow-md`}
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
		width: auto;
		max-width: none;
		z-index: 0;
		display: block;
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
