<script lang="ts">
	import { page } from "$app/stores";
	import {fade} from 'svelte/transition';
	import Logo from '@src/assets/images/logo.png';
	import {
		localize,
		home_page,
		replace_lang,
		Language,
	} from "@l10n";
	let lang_offset = 0;
	$: display_language = Language[lang_offset];
	let change_language = ()=>{
		lang_offset = (lang_offset + 1) % Language.length;
		
		setTimeout(change_language, 2500);
	}
	change_language();
	const isUserPortal = $page.url.toString().includes("portal");
	const isPolicies = $page.url.toString().includes("policies");
	const isHome = !isUserPortal && !isPolicies;
</script>

<nav class="navbar navbar-expand-lg bg-light">
	<div class="container">

		<a href={$home_page} class="navbar-brand">
			<img src={Logo} height="40rem" alt="Mel Logo" class="me-1" />
			<!-- {$localize("geph")} -->
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div
			class="collapse navbar-collapse justify-content-end"
			id="navbarSupportedContent"
		>
			<ul class="navbar-nav mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link" class:active={isHome} href={$home_page}>
						{$localize("home")}
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="{$home_page}/components">Components</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="{$home_page}/technology">Technology</a>
				</li>
				<li class="nav-item dropdown">
					<div
						class="nav-link dropdown-toggle"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						in:fade out:fade
					>
						{$localize("langname", display_language)}
					</div>
					<ul class="dropdown-menu">
						{#each Language as l}
							<li>
								<a
									data-sveltekit-reload
									class="dropdown-item"
									href={$replace_lang(l)}
								>
									{$localize(
										"langname",
										l
									)}
								</a>
							</li>
						{/each}
					</ul>
				</li>
			</ul>
		</div>
	</div>
</nav>

<style lang="scss">
	.navbar-brand {
		font-weight: 500;
	}

	.active {
		font-weight: 500;
	}
	nav.navbar{
		background-color: white !important;
	}
</style>
