<script>
	import { localize } from "@l10n";
	import HomeContent from "@src/components/page-sections/HomeContent.svelte";
	import Navbar from "@src/components/page-sections/Navbar.svelte";
	import HeroImage from "@src/assets/images/themelio-hero.png";
</script>

<template>
	<div class="main-body">
		<Navbar />
		<img src={HeroImage} alt="Hero Image" />
		<HomeContent />
		{$localize("test")}
	</div>
</template>

<style>
	.main-body {
		width: 100vw;
	}
	img{
		max-width: 100%;
	}
</style>