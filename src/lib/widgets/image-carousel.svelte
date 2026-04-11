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
		class: className = ''
	}: {
		id?: string;
		images?: CarouselImage[];
		speed?: number;
		class?: string;
	} = $props();
</script>

<section class={`relative overflow-x-hidden my-4 md:my-16 ${className}`} {id}>
	<div class="carousel-frame">
		<div class="carousel-mask">
			<div class="carousel-wrapper">
				<div class="carousel-container" style={`--scroll-speed: ${speed}s;`}>
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
		</div>
	</div>
</section>

<style>
	.carousel-frame {
		height: 100%;
	}

	.carousel-mask {
		display: block;
		height: 100%;
		width: 100%;
		mask-image: linear-gradient(
			to right,
			transparent 0,
			black var(--edge-inset),
			black calc(100% - var(--edge-inset)),
			transparent 100%
		);
		-webkit-mask-image: linear-gradient(
			to right,
			transparent 0,
			black var(--edge-inset),
			black calc(100% - var(--edge-inset)),
			transparent 100%
		);
	}

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
		height: 100%;
		overflow: visible;
		width: 100%;
	}

	.carousel-container {
		display: flex;
		width: fit-content;
		height: 100%;
		overflow: visible;
	}

	.carousel-track {
		display: flex;
		align-items: stretch;
		flex-shrink: 0;
		height: 100%;
		overflow: visible;
	}

	.carousel-item {
		flex: 0 0 auto;
		padding-inline: clamp(0.5rem, 1vw, 1rem);
		height: 100%;
		overflow: visible;
		position: relative;
	}

	.invoice-img {
		height: 100%;
		width: auto;
		max-width: none;
		z-index: 0;
		display: block;
	}
</style>
