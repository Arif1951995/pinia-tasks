<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="handleDelete(task.id)">delete</i>
      <i
        class="material-icons"
        :class="{ fav: task.isFav }"
        @click="taskStore.toggleTaskFav(task.id)"
        >favorite</i
      >
    </div>
  </div>
</template>

<script>
import { useTasksStore } from "@/stores/TaskStore.js";

export default {
  props: ["task"],
  setup(props) {
    const taskStore = useTasksStore();
    return { taskStore };
  },
  
  methods: {
    handleDelete(id) {
        this.taskStore.deleteTask(id)
    }
  },
};
</script>

<style>
.fav {
  color: red !important;
}
</style>
