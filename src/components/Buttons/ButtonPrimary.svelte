<script lang="ts">
	export let onClick: () => void;
</script>

<div>
	<button
		class="m-1 rounded-3xl bg-sky-400 px-4 py-2 font-bold text-white shadow-md shadow-gray-500"
		on:click={onClick}><slot /></button
	>
</div>
