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
import CommandProcessorFactory from '@/biSHk/commands/CommandProcessorFactory'
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
            let cmds;
            if (this.$store.state.commands) {
                cmds = this.$store.state.commands.map(o=>o);
            } else {
                cmds = [];
            }
            const command = {
                input: value,
                output: new CommandProcessorFactory().produce(value)
            }
            cmds.push(command);
            this.$store.commit('setCommands', cmds);
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
