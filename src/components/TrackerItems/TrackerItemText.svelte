<script lang="ts">
	import Priority from '$lib/enums/Priority';
	import type { TrackerItem } from '@prisma/client';

	export let trackerItem: TrackerItem;
</script>

<div>
	<p class="font-bold">{trackerItem.title} - {Priority[trackerItem.priorityId]} Priority</p>
	<p class="rounded border p-2">{trackerItem.description}</p>
</div>
