<script lang="ts">
	import type { TrackerItem } from '@prisma/client';
	import TrackerListItem from './TrackerListItem.svelte';
	import { fade } from 'svelte/transition';

	async function getAllTrackerItems() {
		const response = await fetch('/api/items/getAll');

		return (await response.json()) as TrackerItem[];
	}
</script>

{#await getAllTrackerItems()}
	Loading...
{:then items}
	<div transition:fade>
		{#each items as item}
			<TrackerListItem trackerItem={item} />
		{/each}
	</div>
{/await}
