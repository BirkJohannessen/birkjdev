<template>
    <div class="wrapper">
        <div class="center">
            <h2>
                <div v-for="(word, idx) in this.enstructSentence()">
                </div>
            </h2>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Typenigma',
    components: {
    },
    beforeMount() {
        document.addEventListener("keydown", this.onKeyDownPress);
        // document.addEventListener("keyup", this.onKeyUpPress);
    },
    methods: {
        enstructSentence() {
            return this.sentence.split(' ').map(word => word.split(''));
        },
        enstructInput() {
            return this.userInput.split(' ').map(word => word.split(''));
        },
        onKeyDownPress(e) {
            if (!this.getInputChar(e)) {
                if (e.which === 8) {
                    // one back
                }
                if (e.which === 8) {
                    // wordback back
                }
                return;
            }
            this.userInput = this.userInput += this.getInputChar(e);
        },
        getInputChar(e) {
            if (!this.charMap[e.which]) {
                return null;
            }
            e.stopPropagation();
            return this.charMap[e.which];
        },
    },
    data() {
        return {
            sentence: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.',
            charMap:  { 32:" ", 48:"0", 49:"1", 50:"2", 51:"3", 52:"4", 53:"5", 54:"6", 55:"7", 56:"8", 57:"9", 65:"A", 66:"B", 67:"C", 68:"D", 69:"E", 70:"F", 71:"G", 72:"H", 73:"I", 74:"J", 75:"K", 76:"L", 77:"M", 78:"N", 79:"O", 80:"P", 81:"Q", 82:"R", 83:"S", 84:"T", 85:"U", 86:"V", 87:"W", 88:"X", 89:"Y", 90:"Z", 96:"0", 97:"1", 98:"2", 99:"3", 100:"4", 101:"5", 102:"6", 103:"7", 104:"8", 105:"9", 106:"*", 107:"+", 109:"-", 110:".", 111:"/", 186:";", 187:"=", 188:",", 189:"-", 190:".", 191:"/", 192:"`", 219:"[", 220:"\\", 221:"]", 222:"'" },
            userInput: ''
        }
    },
}
</script>

<style scoped>
    .wrapper {
        width: 100%; height: 100vh;
        background-color: #292736; color: white;
        display: flex; justify-content: right;
        overflow-y: scroll;
    }
    .center {
        width: auto; height: auto;
        margin: auto;
        text-align: center;
        display: flex; flex-direction: column;
        position: relative;
    }
</style>
