<script>
	import MainLayout from "../../components/MainLayout.svelte";
	import BlinkingTexts from "../../components/BlinkingTexts.svelte";
	import ExploreCarousel from "../../components/ExploreCarousel.svelte";
	import { localize, lang } from "@l10n";
    import Navbar from "@src/components/page-sections/Navbar.svelte";

	let carouselPosn = 0;
	let carouselimgs =
		"homepage-participate.png homepage-build.png homepage-learn.png".split(
			" "
		);
	$: carouselimg = carouselimgs[carouselPosn];
</script>


<template> 
	<Navbar></Navbar>
	{localize("test")} 
</template>
