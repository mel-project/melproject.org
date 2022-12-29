<script lang="ts">
	import { page } from "$app/stores";
	import {
		localize,
		home_page,
		replace_lang,
		available_languages as available_languages,
		Language_Shortname,
	} from "@l10n";

	const isUserPortal = $page.url.toString().includes("portal");
	const isPolicies = $page.url.toString().includes("policies");
	const isHome = !isUserPortal && !isPolicies;
</script>

<nav class="navbar navbar-expand-lg bg-light">
	<div class="container">
		<a href={$home_page} class="navbar-brand">
			<img src="/gephlogo.png" height="32" alt="Geph logo" class="me-1" />
			{$localize("geph")}
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
					<a
						class="nav-link"
						class:active={isUserPortal}
						href={`${$home_page}/portal`}
					>
						{$localize("user-portal")}
					</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						class:active={isPolicies}
						href={`${home_page}/policies`}
					>
						{$localize("policies")}
					</a>
				</li>
				<li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						{$localize("langname")}
					</a>
					<ul class="dropdown-menu">
						{#each available_languages as l}
							<li>
								<a
									data-sveltekit-reload
									class="dropdown-item"
									href={$replace_lang(Language_Shortname[l])}
								>
									{$localize(
										"langname",
										Language_Shortname[l]
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
</style>
