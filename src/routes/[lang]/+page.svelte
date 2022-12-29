<script>
	import MainLayout from "../../components/MainLayout.svelte";
	import BlinkingTexts from "../../components/BlinkingTexts.svelte";
	import ExploreCarousel from "../../components/ExploreCarousel.svelte";
	import { localize, Language } from "@l10n";

	$: l10n = localize(Language.EN_US);

	let carouselPosn = 0;
	let carouselimgs =
		"homepage-participate.png homepage-build.png homepage-learn.png".split(
			" "
		);
	$: carouselimg = carouselimgs[carouselPosn];
</script>

<template> hello world </template>
