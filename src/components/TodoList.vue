<template>
    <div v-if="getLoading">
        Loading...
    </div>
    <div v-else-if="getError">
        {{getError}}
    </div>
    <div v-else>
        <h1>TodoList</h1>
        <div class="todos" v-for="todo in allTodos" :key="todo.id">
            <TodoItem v-bind:todo="todo" />
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "TodoList",
    components: {
        TodoItem
    },
    computed: mapGetters(['allTodos', 'getLoading', 'getError']),
    methods: {
        ...mapActions(['fetchTodos'])
    },
    created() {
        this.fetchTodos()
    }
}
</script>

<style scoped>

</style>