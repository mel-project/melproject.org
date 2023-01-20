<script lang="ts">
    let _class = "";
    export { _class as class };
    export let color: string = "";
    export let border: boolean = false;
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
            border: .9px rgb(189, 189, 189);
            border-style: dotted;
            display: flex;
            box-shadow: 0px 2px 1px 1px rgba(40, 40, 40, 0.092);
            width:fit-content;
            max-width: 100%;
            margin: 0;
            padding: 0;
            border-radius: 1rem;
            // border: 1px solid red;
        }
        .container.separated {
            & > :global(*) {
                border-left: 1px solid var(--border-color);
            }
        }

        .container > :global(*) {
            flex-grow: 1;
            flex-shrink:1;
            border-radius: 0;
            margin: 0;
            box-shadow: none;
            border: none;
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
