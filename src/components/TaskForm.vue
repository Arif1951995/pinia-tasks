<template>
  <form @submit.prevent="handleSubmit">
    <input placeholder="you need to..." v-model="newTask" />
    <button>Add</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useTasksStore } from "@/stores/TaskStore";

export default {
  setup(props) {
    const taskStore = useTasksStore();
    const newTask = ref("");

    return { taskStore, newTask };
  },

  methods: {
    handleSubmit() {
      if (this.newTask.length > 0) {
        this.taskStore.addTask({
          title: this.newTask,
          isFav: false,
          id: Math.floor(Math.random() * 10000),
        });
        this.newTask = "";
      }
    },
  },
};
</script>
