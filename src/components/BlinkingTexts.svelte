<script lang="ts">
  export let labels: string[];

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  let activeIdx = 0;
  let activeString = labels[activeIdx] ? labels[activeIdx] : "";

  (async () => {
    for (;;) {
      await sleep(8000);
      if (labels.length > 1) {
        activeIdx = (activeIdx + 1) % labels.length;
        const fullString = labels[activeIdx];
        for (let i = 0; i < fullString.length; i++) {
          await sleep(50);
          activeString = fullString.substring(0, i + 1);
        }
      }
    }
  })();
</script>

<nobr class="flashing-cursor">{activeString}</nobr>

<style>
  .flashing-cursor:after {
    content: "_";
    opacity: 0;
    animation: cursor 1s infinite;
  }
  @keyframes cursor {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
