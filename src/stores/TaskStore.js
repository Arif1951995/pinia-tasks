import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasksStore", {
  state: () => ({
    tasks: [],
    loading: false,
  }),
  getters: {
    favTasks() {
      return this.tasks.filter((task) => task.isFav);
    },
    totalCount() {
      return this.tasks.length;
    },
    favCount() {
      return this.favTasks.length;
    },
  },

  actions: {
    async getTasks() {
      this.loading = true;
      const res = await fetch("http://localhost:4000/tasks");
      const tasks = await res.json();
      this.tasks = tasks;
      this.loading = false;
    },

    async addTask(task) {
      this.tasks.push(task);
      const res = await fetch("http://localhost:4000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });

      if (res.error) {
        console.log(res.error);
      }
    },
    async toggleTaskFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;
      const res = await fetch("http://localhost:4000/tasks/" + id, {
        method: "PATCH",
        body: JSON.stringify({ isFav: task.isFav }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.error) {
        console.log(res.error);
      }
    },

    async deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);

      const res = await fetch("http://localhost:4000/tasks/" + id, {
        method: "DELETE",
      });

      if (res.error) {
        console.log(res.error);
      }
    },
  },
});
