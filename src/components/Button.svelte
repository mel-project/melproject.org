<script lang="ts">
  export let size: "normal" | "large" = "normal";
</script>

<button class="btn btn-primary" class:btn-lg={size === "large"}><slot /></button
>
