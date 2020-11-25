import axios from 'axios'

const apiUrl = process.env.VUE_APP_API_URL

const state = {
    todos: [],
    loading: false,
    error: ''
}

const getters = {
    allTodos: (state) => state.todos,
    getLoading: (state) => state.loading,
    getError: (state) => state.error
}

const actions = {
    fetchTodos: async ({ commit }) => {
        commit('isLoading')
        axios.get(apiUrl)
            .then(async res => {
                commit('isLoading')
                commit('populateTodos', res.data)
            })
            .catch(err => {
                commit('isLoading')
                commit('isError', err.message)
            })
    },
    createTodo: ({ commit }, todo) => {
        commit('isLoading')
        axios.post(apiUrl, todo)
            .then(res => {
                commit('isLoading')
                commit('addNewTodo', res.data)
            })
            .catch(err =>{
                commit('isLoading')
                commit('isError', err.message)
            })
    },
    deleteTodo: ({ commit }, id) => {
        commit('isLoading')
        axios.delete(`${apiUrl}/${id}`)
            .then(() => {
                commit('isLoading')
                commit('removeTodo', id)
            })
            .catch(err => {
                commit('isLoading')
                commit('isError', err.message)
            })
    },
    filterTodos: ({ commit }, limit) => {
        commit('isLoading')
        axios.get(`${apiUrl}?_limit=${limit}`)
            .then(res => {
                commit('isLoading')
                commit('populateTodos', res.data)
            })
            .catch(err => {
                commit('isError', err.message)
                commit('isLoading')
            })
    }
}

const mutations = {
    populateTodos(state, todos) {
        state.todos = todos
    },
    addNewTodo(state, todo) {
        state.todos = [todo, ...state.todos]
    },
    removeTodo(state, id) {
        state.todos = state.todos.filter(todo => todo.id !== id)
    },
    isLoading(state){
        state.loading = !state.loading
    },
    isError(state, msg){
        state.error = msg
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}

