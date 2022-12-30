<script>

	import { localize } from "@l10n";
    import HomeContent from "@src/components/page-sections/HomeContent.svelte";
	import Navbar from "@src/components/page-sections/Navbar.svelte";

	
</script>

<template>
	<Navbar />
	<HomeContent></HomeContent>
	{$localize("test")}
</template>
