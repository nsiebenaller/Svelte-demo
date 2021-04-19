import { writable, Writable } from "svelte/store";

const CACHE_KEY = "svelte_tasks";

function createTaskStore() {
  // Default state of the store
  let tasks = new Array<string>();

  // Check cache if tasks were saved
  const cache = window.localStorage.getItem(CACHE_KEY);
  if (cache) {
    tasks = JSON.parse(cache);
  }

  // Setup store
  const { set, subscribe, update } = writable(tasks);

  // Store actions
  const addTask = (task: string) => {
    update((tasks) => {
      const taskList = tasks.concat(task);
      window.localStorage.setItem(CACHE_KEY, JSON.stringify(taskList));
      return taskList;
    });
  };
  const resetTasks = () => {
    const taskList = new Array<string>();
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(taskList));
    set(taskList);
  };

  return { subscribe, addTask, resetTasks };
}

export const taskStore = createTaskStore();
