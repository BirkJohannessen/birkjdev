<template>
        <div :class="'textBody'+this.type">
            <h1>
                {{ this.header}}
            </h1>
            {{ this.subText }}
        </div>
  
</template>

<script>
export default {
    name: 'HoverText',
    props: {
        header: String,
        subText: String,
        type: String
    },



}
</script>

<style scoped>
.textBody1{
    position: relative;
    padding: 1em;
    border: 2px solid black;
    background-color: white;
    color: black;
    left: 30vw;
    top: 10vh;
    border-radius: 10px;
    z-index: 999;
    max-width: 20vw;
}
.textBody2{
    position: relative;
    padding: 1em;
    border: 2px solid white;
    background-color: black;
    color: white;
    left: 75vw;
    top: 55vh;
    border-radius: 10px;
    z-index: 999;
    max-width: 20vw;
}
.textBody3{
    position: relative;
    padding: 1em;
    background-color: transparent;
    color: white;
    left: center;
    top: center;
    border-radius: 10px;
    z-index: 999;
    left: 45vw;
    top: 20vh;
    transform: translateX(-50%);
    transform: translateY(-50%);
    max-width: 20vw;
}

@media only screen and (max-width: 768px) {
    .textBody1{
        position: relative;
        padding: 1em;
        border: 2px solid black;
        background-color: white;
        color: black;
        left: 10vw;
        top: 20vh;
        border-radius: 10px;
        z-index: 999;
        max-width: 70vw;
    }
    .textBody2{
        position: relative;
        padding: 1em;
        border: 2px solid white;
        background-color: black;
        color: white;
        left: 10vw;
        top: 60vh;
        border-radius: 10px;
        z-index: 999;
        max-width: 70vw;
    }
    .textBody3{
        position: relative;
        padding: 1em;
        background-color: transparent;
        color: white;
        left: center;
        top: center;
        border-radius: 10px;
        z-index: 999;
        left: 10vw;
        top: 10vh;
        transform: translateX(-50%);
        transform: translateY(-50%);
        max-width: 70vw;
    }
}
</style>