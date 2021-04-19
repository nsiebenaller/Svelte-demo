<script lang="typescript">
  let value = "";
  export let addTask: (task: string) => void;

  function onSubmit() {
    // Validate input
    if (value.length === 0) {
      window.alert("You cannot create an empty task");
      return;
    }
    // Add tasks to list of tasks
    addTask(value);
    value = "";
  }
</script>

<div>
  <form on:submit|preventDefault={onSubmit}>
    <input type="text" bind:value />
    <button type="submit">Add</button>
  </form>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
  }
  form {
    display: flex;
    flex-direction: row;
  }
  input {
    margin-right: 10px;
  }
  @media (max-width: 600px) {
    form {
      flex-direction: column;
    }
    form > * {
      width: 100%;
    }
  }
</style>
