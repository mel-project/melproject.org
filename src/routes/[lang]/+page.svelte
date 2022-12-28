<script>
	import MainLayout from "../../components/MainLayout.svelte";
	import BlogFeed from "../../components/BlogFeed.svelte";
	import BlinkingTexts from "../../components/BlinkingTexts.svelte";
	import ExploreCarousel from "../../components/ExploreCarousel.svelte";
	import { l10nLoad, lang } from "@l10n/index";

	import base from "@l10n/base.yaml";
	import layer from "@l10n/index.l10n.yaml";
	$: l10n = l10nLoad({ ...base, ...layer }, $lang);

	let carouselPosn = 0;
	let carouselimgs =
		"homepage-participate.png homepage-build.png homepage-learn.png".split(
			" "
		);
	$: carouselimg = carouselimgs[carouselPosn];
</script>

<template />
