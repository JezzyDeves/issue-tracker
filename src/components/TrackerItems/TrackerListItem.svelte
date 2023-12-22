<script lang="ts">
	import Priority from '$lib/enums/Priority';
	import type { TrackerItem } from '@prisma/client';
	import TrackerItemText from './TrackerItemText.svelte';

	export let trackerItem: TrackerItem;
</script>

{#if trackerItem.priorityId === Priority.Low}
	<div class="m-2 flex max-w-full rounded bg-blue-500 px-4 py-2 text-white">
		<TrackerItemText {trackerItem} />
	</div>
{/if}
{#if trackerItem.priorityId === Priority.Medium}
	<div class="m-2 flex max-w-full rounded bg-yellow-500 px-4 py-2 text-white">
		<TrackerItemText {trackerItem} />
	</div>
{/if}
{#if trackerItem.priorityId === Priority.High}
	<div class="m-2 flex max-w-full rounded bg-red-500 px-4 py-2 text-white">
		<TrackerItemText {trackerItem} />
	</div>
{/if}
{#if trackerItem.priorityId === Priority.Critical}
	<div class="m-2 flex max-w-full rounded bg-purple-500 px-4 py-2 text-white">
		<TrackerItemText {trackerItem} />
	</div>
{/if}
