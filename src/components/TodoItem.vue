<template>
    <div class="todo">
        {{todo.title}}
        <button @click="deleteTodo(todo.id)">X</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "TodoItem",
    props: ["todo"],
    methods: {
        ...mapActions(['deleteTodo'])
    }
}
</script>

<style scoped>

</style>