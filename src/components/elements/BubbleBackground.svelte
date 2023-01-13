<script lang="ts">
    import Button from "./Button.svelte";
    import GradientBubble from "./GradientBubble.svelte";
    import Range from "../Range.svelte";
    import { Colors } from "@src/utils/colors";
    let scale = 50;
    const init_scale = scale;
    let opacity: number = 40;
    let reload = 0;
    let bubbles = 400;

    let available_colors = [Colors.teal, Colors.purple];

    function pick_random_item<T>(items: Array<T>): T {
        return items[Math.floor(Math.random() * items.length)];
    }
    let start = false;
    let scale_down = ()=>{
        let temp  = scale - (Math.log(scale+1) / 10)
        temp = Math.round(temp * 1000)
        scale = temp / 1000;
        if(scale < .01){
            scale = 0;
            start = false;
        }
        if(start)
        setTimeout(scale_down, 1);
    }
    start = true;
    $: {

        if (start) {
            scale_down();
        }
    }
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
                    type=""
                    bind:value={scale}
                />
                <button on:click={()=>{
                    start = !start
                    scale = init_scale
                }}>{start ? "stop" : "start"}</button>
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
                color={pick_random_item(available_colors)}
                offset="random"
                {opacity}
            />
        </Range>
    {/key}
</div>

<style>
    .bubble-background {
        height: 100%;
        width: 100%;
    }
</style>
