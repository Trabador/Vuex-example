<template>
    <div>
        <form @submit="onSubmit">
            <input type="text" v-model="title" placeholder="Add a new todo...">
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "AddTodo",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['createTodo']),
        onSubmit(e) {
            e.preventDefault()
            if(this.title !== ''){
                const newTodo = {
                    title: this.title,
                    completed: false
                }
                this.createTodo(newTodo)
                this.title = ''
            }
        }
    }    
}
</script>

<style scoped>

</style>