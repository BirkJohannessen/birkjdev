import { createStore } from 'vuex'

const store = createStore({
    state () {
        return{
            commands: []
        }
    },
    mutations: {
        setCommands(state, commands) {
            state.commands = commands;
        },
    },
    getters: {
        allChoices: function (state) {
            return "${state}"
        }
    }
});

export default store;
