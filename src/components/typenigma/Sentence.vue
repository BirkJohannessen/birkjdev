<template>
    <div id="sentence">
        <span v-for="word in sentence" class="word">
            <div v-for="letter in word" class="letter">
                <span v-if="letter.isCursor() && letter.isCursorLeft()" class="cursor"></span>
                <span v-if="letter.getState() === 0" class="default">{{ letter.getLetter() }}</span>
                <span v-if="letter.getState() === 1" class="miss">{{ letter.getLetter() }}</span>
                <span v-if="letter.getState() === 2" class="hit">{{ letter.getLetter() }}</span>
                <span v-if="letter.getState() === 3" class="miss">{{ letter.getLetter() }}</span>
                <span v-if="letter.isCursor() && !letter.isCursorLeft()" class="cursor"></span>
            </div>
        </span>
    </div>
</template>

<script>
export default {
    name: 'SentenceComponent',
    props: {
        sentence: Array,
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/stylesheets/all.scss';
    .word {
        padding: 0 6px 0 6px;
        font-size: 26px;
        font-weight: 900;
    }
    .miss {
        color: red;
    }
    .hit {
        color: white;
    }
    .letter {
        padding: 0;
        margin: 0;
        display: inline-block;
    }
    .cursor {
        background-color: gold;
        width: 2px;
        height: 22px;
        display: inline-block;
    }
    #sentence {
        width: 70vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
