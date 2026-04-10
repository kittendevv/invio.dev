<script lang="ts">
	import Check from '@lucide/svelte/icons/check';

	let { feature } = $props<{ feature: { title: string } }>();
</script>

<div class="card col-span-1 bg-base-100 text-base-content">
	<div class="card-body">
		<p class="flex">
			<Check class="pr-2" />
			{feature.title}
		</p>
	</div>
</div>
