<script lang="ts">
    import Button from "./elements/Button.svelte";
    import GradientBubble from "./elements/GradientBubble.svelte";
    import Range from "./Range.svelte";
    import { Colors } from "@src/utils/colors";
    let scale = 30;
    let opacity: number = 10;
    let reload = 0;
    let bubbles = 28;
</script>

<div class="bubble-background">
    {#key reload}
        <div>
            <Button
                on:click={() => {
                    reload = (reload + 1) % 2;
                }}>Reload Bubbles</Button
            >
            <div class="bubble-options">
                <label for="scale">scale</label><input
                    name="scale"
                    type="text"
                    bind:value={scale}
                />
                <label for="opacity">opacity</label><input
                    name="opacity"
                    type="text"
                    bind:value={opacity}
                />
                <label for="bubbes">Num Bubbles</label><input
                    name="bubbles"
                    type="text"
                    bind:value={bubbles}
                />
            </div>
        </div>

        <Range to={bubbles}>
            <GradientBubble
                {scale}
                color={Object.values(Colors)[
                    Math.floor(Math.random() * Object.values(Colors).length)
                ]}
                offset="random"
                {opacity}
            />
        </Range>
    {/key}
</div>

<style>
    .bubble-background{
        height: 100%;
        width: 100%;
    
    }
</style>
