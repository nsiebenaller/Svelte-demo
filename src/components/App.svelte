<script lang="ts">
  import { onDestroy } from "svelte";
  import TaskForm from "./TaskForm.svelte";
  import TaskList from "./TaskList.svelte";
  import { taskStore } from "../stores/taskStore";

  let tasks = new Array<string>();
  const unsubscribe = taskStore.subscribe((store) => {
    tasks = store;
  });
  onDestroy(unsubscribe);
</script>

<main>
  <h1>Hello!</h1>

  <h4>My Tasks</h4>
  <TaskList {tasks} />
  <TaskForm addTask={taskStore.addTask} />
  <button type="reset" on:click={taskStore.resetTasks}>Reset</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
