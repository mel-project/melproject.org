<script lang="ts">
    let _class = "";
    export { _class as class };
    export let color: string = "";
    export let border: boolean = true;
</script>

<div class="button-group {_class}">
    <div class="container" class:separated={border} style="--border-color: {color || 'grey'}">
        <slot />
    </div>
</div>

<style lang="scss">
    .button-group {
        max-width: 100%;
        width: auto;
        .container {
            display: flex;
            // box-shadow: 0px 2px 1px 1px rgba(40, 40, 40, 0.092);
            width:fit-content;
            // border: 1px solid red;
        }
        .container.separated {
            & > :global(*) {
                border-left: 1px solid var(--border-color);
            }
        }

        .container > :global(*) {
            border-radius: 0;
            margin: 0;
            box-shadow: none;
            border-right: none;
            border-top: none;
            border-bottom: none;
        }
        .container :global(:first-child) {
            // background: red;
            border: none;
            border-radius: 1rem 0rem 0rem 1rem;
        }
        .container :global(:last-child) {
            // background: yellow;
            border-right: none;
            border-top: none;
            border-bottom: none;
            border-radius: 0 1rem 1rem 0;
        }
    }
</style>
