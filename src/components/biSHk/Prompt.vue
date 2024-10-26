<template>
    <div class="flex">
        <div class="foo">
            <Ps1/>
        </div>
        <div class="padding-div"></div>
        <div class="input-wrapper">
            <input id="input" @input="setValue" :value="value" type="text" />
        </div>
    </div>
</template>

<script>
import Ps1 from './Ps1.vue';
export default {
    name: 'Prompt',
    components: {
        Ps1
    },  
    emits: ['execute-command'],
    mounted() {
        document.addEventListener("keydown", this.onKeydown);
    },
    methods: {
        onKeydown(e) {
            e.stopPropagation();
            if (e.key === 'Enter') {
                var element = document.getElementById('input');
                if (element == null) return;
                var event = new Event('input');
                element.dispatchEvent(event);
                this.$emit('execute-command', this.value)
                this.value = '';
            }
            if (e.ctrlKey) {
                if (e.code === 'KeyL') {
                    e.preventDefault();
                    this.$store.commit('setCommands', []);
                } else if (e.code === 'KeyC') {
                    this.$emit('execute-command', this.value + '^C')
                    this.value = '';
                }
            }
        },
        setValue(e) {
            this.value = e.target.value
        }
    }
}
</script>

<style scoped>
    .flex {
        width: 100%;
        display: flex;
        height: 100%;
        overflow: hidden;
    }
    input {
        font-family: monospace;
        font-size: 17px;
        background-color: transparent;
        color: white;
        margin: 0;
        padding: 0;
        border: none;
        &:focus-visible {
            border: none;
            outline: none;
        }
        width: 100%;
        padding-bottom: calc(100vh - 21px);
    }
    .input-wrapper {
        flex-grow: 1;
    }
    .padding-div {
        width: 10px;
    }
</style>
