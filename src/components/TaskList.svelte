<script lang="typescript">
  import Task from "./Task.svelte";
  export let tasks: Array<string>;
</script>

{#if tasks.length === 0}
  <em>no tasks</em>
{:else}
  <ol>
    {#each tasks as task, i (i)}
      <Task {task} />
    {/each}
  </ol>
{/if}

<style>
  em {
    display: inline-block;
    color: grey;
    margin-bottom: 10px;
  }
  ol {
    display: inline-block;
    padding: 0;
  }
</style>
