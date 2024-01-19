import {defineStore} from "pinia";




export const useTasksStore = defineStore("tasksStore", {
    state: () => ({
        tasks: [
            {id:1, title: "Learn Vue", isFav: false},
            {id:1, title: "Learn Next.js", isFav: true},

        ],

        name: "My Name"
    })
})


