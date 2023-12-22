<script lang="ts">
	import type { TrackerItem } from '@prisma/client';
	import TrackerItemsList from '../components/TrackerItems/TrackerItemsList.svelte';

	async function getAllTrackerItems() {
		const response = await fetch('/api/items/getAll');

		return (await response.json()) as TrackerItem[];
	}
</script>

<div class="min-w-screen min-h-screen">
	<TrackerItemsList />
</div>
