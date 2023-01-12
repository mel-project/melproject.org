<script>
  import { Banner } from "@src/components";
  import Navbar from "@src/components/page-sections/Navbar.svelte";
  import { communityIcons } from "@src/utils/navigation";

  // test
  import Homepage from "./[lang]/+page.svelte";
</script>

<Navbar />

<slot />

<Banner variant="clear">
  <div class="Mel"></div>
  {#each communityIcons as icon}
    <div class="col-lg-4 mb-5">{icon.name}</div>
  {/each}
</Banner>
