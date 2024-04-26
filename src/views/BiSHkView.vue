<template>
    <div class="content-container">
        <div v-for="command in this.$store.state.commands" >
            <Output :command="command" />
        </div>
        <Prompt 
            @execute-command="processCommand"
        />
    </div>
</template>

<script>
import Prompt from '@/components/biSHk/Prompt'
import Output from '@/components/biSHk/Output'
export default {
    name: 'biSHkView',
    components: {
        Prompt,
        Output,
    },
    mounted() {
    },
    methods: {
        processCommand(value) {
            console.log('pushing the val', value)
            let cmds;
            if (this.$store.state.commands) {
                cmds = this.$store.state.commands.map(o=>o);
                cmds.push(value);
            } else {
                cmds = [];
            }
            this.$store.commit('setCommands', cmds);
            console.log(this.$store.state.commands);
        },
    },
    computed: {
    },
    data() {
        return {
        }
    },
}
</script>

<style scoped>
    .content-container {
        font-family: monospace;
        font-size: 17px;
        background-color: black;
        height: 100%;
        width: 100%;
        color: white;
    }
</style>
