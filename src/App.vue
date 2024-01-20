<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" />
      <h1>Pinia Tasks</h1>
    </header>


     <div class="new-task-form">
      <TaskForm />
     </div> 

    <div class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>

    </div>

    <div class="loading" v-if="taskStore.loading">Loading tasks...</div>

    <div class="task-list" v-if="filter === 'all'">
      <p>you have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks">
        <Task :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>you have {{ taskStore.favCount }} favs left to do</p>
     
      <div v-for="task in taskStore.favTasks">
        <Task :task="task" />
      </div>
    </div>
  </main>
</template>
<script>
import {ref} from "vue";
import { useTasksStore } from "./stores/TaskStore.js";
import Task from "./components/Task.vue";
import TaskForm from "./components/TaskForm.vue";


export default {
  components: {
    Task,
    TaskForm
  },
  setup(props) {
    const taskStore = useTasksStore();

    const filter = ref('all')
    taskStore.getTasks()

    return { taskStore, filter };
  },
};
</script>
<style></style>
